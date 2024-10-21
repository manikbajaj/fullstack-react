import { API_URL } from "../../constants.js";
import { useMutation } from "@tanstack/react-query";

// Simulated function to post data to an API endpoint
const createUser = async (user) => {
  const response = await fetch(`${API_URL}user/create`, {
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
export function useSignup() {
  return useMutation({
    mutationFn: createUser,
    onSuccess: (response) => {
      // This callback is triggered if the mutation is successful
      console.log("User Created Successfully", response);
    },
    onError: (error) => {
      // Handle error case
      console.error("Error creating user:", error);
    },
  });
}
