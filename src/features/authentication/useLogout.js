import {  useMutation, useQueryClient } from "@tanstack/react-query";
import { logout as logoutApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogout() {
  const navigate = useNavigate();
 const queryClient = useQueryClient();
  const { mutate: logout, isLoading } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      navigate("/");
    },
    onError: (err) => {
      console.log("Error", err);
      toast.error("Something went wrong. Please try again.");
    },
  });
  return { logout, isLoading };
}
