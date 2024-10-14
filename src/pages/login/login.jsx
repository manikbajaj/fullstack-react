import { Button } from "@/components/ui/button.jsx";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 className="text-xl">This is the Login Page</h1>
      <ul>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <li>
          {/* asChild prop indicates that the Button component should treat its child elements as the button element itself, often used for semantic or accessibility reasons. It enables wrapping external components, like a Link, with Button styling without duplicating button functionality. */}
          <Button asChild>
            <Link to="signup">Signup</Link>
          </Button>
        </li>
      </ul>
    </>
  );
}
