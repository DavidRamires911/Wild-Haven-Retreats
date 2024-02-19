import Button from "../../ui/Button";
import CreateCabinForm from "./CreateCabinForm";
import Modal from "../../ui/Modal";

function AddCabin() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="cabin-form">
          <Button>Add new cabin</Button>
        </Modal.Open>
        <Modal.Window name="cabin-form">
          <CreateCabinForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}


// const AddCabin = () => {
  //   const [isOpenModel, setIsOpenModel] = useState(false);
  
  //   return (
    //     <div>
    //       <Button
    //         $variation="primary"
    //         onClick={() => setIsOpenModel((show) => !show)}
    //       >
    //         {" "}
    //         Add new Cabin
    //       </Button>
    //       {isOpenModel && (
      //         <Modal onClose={() => setIsOpenModel(false)}>
      //           <CreateCabinForm onCloseModal={() => setIsOpenModal(false)} />
      //         </Modal>
      //       )}
      //     </div>
      //   );
      // };
      
      
      export default AddCabin;