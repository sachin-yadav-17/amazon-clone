import { Link } from "react-router-dom";
import "./register.css";
import { useAuth } from "../context/auth";
import { useForm } from "react-hook-form";

function Register() {
  const { signup } = useAuth();

  type FormData = {
    name: string;
    email: string;
    password: string;
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    signup(data);
  };

  return (
    <div className="login">
      <div className="img_wrapper">
        <img src="./login_logo.png" className="login_logo" />
      </div>

      <div className="login_container">
        <h2>Sign-up</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="name">
            <label>Name</label>
            <input
              type="text"
              {...register("name", { required: "Name is required" })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>

          <div className="email">
            <label>Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email.message}</p>}
          </div>

          <div className="password">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
            />
            {errors.password && <p>{errors.password.message}</p>}
          </div>

          <button type="submit">Sign Up</button>
        </form>

        <p>By sign up you are providing us your email</p>

        <span className="sign_in">
          Already have account ? <Link to="/login">Sign In</Link>
        </span>
      </div>
    </div>
  );
}

export default Register;
