"use client";
import { signin } from "../actions";
import "./style.css";
import { useFormState } from "react-dom";

// export const generateMetadata =async()=> {
//   title: "Login",
//   description: "login page ",
// };

export default function SingninPage() {
  const [state, formAction] = useFormState(signin, { message: null });
  return (
    <div className="container">
      <form action={formAction}>
        {/* <h3>Please </h3> */}

        <label for="username">Username</label>
        <input type="email" placeholder="Email" id="email" name="email" />

        <label for="password">Password</label>
        <input type="password" placeholder="Password" id="password" />

        <button type="submit">Log In</button>
        <div class="social">
          <div class="go">
            <i class="fab fa-google"></i> Google
          </div>
          <div class="fb">
            <i class="fab fa-facebook"></i> Facebook
          </div>
        </div>
      </form>
    </div>
  );
}
