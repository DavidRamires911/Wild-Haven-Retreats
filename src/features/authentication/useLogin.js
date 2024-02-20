import { useMutation, useQueryClient } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export function useLogin() {
    const queryClient = useQueryClient();
    const navigate = useNavigate();
  
    const { mutate: login, isLoading } = useMutation({
      mutationFn: ({ email, password }) => loginApi({ email, password }),
      onSuccess: (user) => {
        // Update the cache with the user data
        queryClient.setQueryData(["user"], user.user);
        // Navigate to the dashboard after successful login
        navigate("/dashboard");
      },
      onError: (err) => {
        console.log("Error", err);
        toast.error("Provided credentials are invalid. Please try again.");
      },
    });
  
    return { login, isLoading }; }
