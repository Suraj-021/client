import { React, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../CSS/Signin.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth";

function Login() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  const [auth, setAuth] = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/login`,
        { name, email, password }
      );
      if (res.data.success) {
        toast.success(res.data && res.data.message);
        setAuth({
          ...auth,
          user: res.data.user,
          token: res.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(res.data));
        navigate("/");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something Went Wrong");
    }
  };
  return (
    <>
      <Layout title={"login"}>
        <div className="login">
          <form onSubmit={handleSubmit}>
            <div className="in">
              <label htmlFor="Name">Name </label>
              <div>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setname(e.target.value)}
                  name="user_name"
                  placeholder=" Enter Your Name Here"
                  required
                />
              </div>
            </div>
            <div className="in">
              <label htmlFor="email">Email </label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter Your Email here"
                required
              />
            </div>
            <div className="in">
              <label htmlFor="password">Password </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter password"
              />
            </div>
            <div className="in">
              <a href>
                <button
                  className="btn Submit_btn"
                  type="submit"
                  id="Signin_submit"
                >
                  {" "}
                  Log in{" "}
                </button>
              </a>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Login;
