import { API_URL } from "../../constants.js";
import { useMutation } from "@tanstack/react-query";

// Simulated function to post data to an API endpoint
const loginUser = async (user) => {
  const response = await fetch(`${API_URL}auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

// Custom hook for posting todos
export function useLogin() {
  return useMutation({
    mutationFn: loginUser,
    onSuccess: (response) => {
      // This callback is triggered if the mutation is successful
      console.log("User Logged In Successfully", response);
    },
    onError: (error) => {
      // Handle error case
      console.error("Error authenticating:", error);
    },
  });
}
