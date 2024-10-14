import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <h1 class="text-xl">This is the Login Page</h1>
      <ul>
        <li>
          <Link to="tasks">Tasks</Link>
        </li>
        <Link to="signup">Signup</Link>
      </ul>
    </>
  );
}
