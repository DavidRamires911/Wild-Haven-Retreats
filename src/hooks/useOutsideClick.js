import { useEffect, useRef } from "react";

///handler need to be generic so that it can be used in any component
export function useOutsideClick(handler, listenCapture = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        // console.log("click outside");
        handler();
      }
    }
    //  true is used to capture the event in the capturing phase because default is bubbling
    document.addEventListener("click", handleClick, listenCapture);
    return () =>
      document.removeEventListener("click", handleClick, listenCapture);
  }, [handler, listenCapture]);
  return ref;
}
