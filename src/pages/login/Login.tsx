import "./login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useAuth } from "../../context/auth";

type LoginFormData = {
  email: string;
  password: string;
};

function Login() {
  const navigate = useNavigate();
  const {login} = useAuth()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>();

  const onSubmit = (data: LoginFormData) => {
    login(data)
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="img_wrapper">
        <img src="./login_logo.png" className="login_logo" />
      </div>

      <div className="login_container">
        <h2>Sign-in</h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="email">
            <label>Email</label>
            <input
              type="email"
              {...register("email", {
                required: "Email is required",
              })}
            />
            {errors.email?.message && (
              <p>{errors.email.message}</p>
            )}
          </div>

          <div className="password">
            <label>Password</label>
            <input
              type="password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password?.message && (
              <p>{errors.password.message}</p>
            )}
          </div>

          <button type="submit">Sign In</button>
        </form>

        <p>By sign you are providing us your email</p>

        <button type="button" onClick={handleRegister}>
          Create Account
        </button>
      </div>
    </div>
  );
}

export default Login;