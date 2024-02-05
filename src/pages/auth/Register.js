import { React, useState } from "react";
import Layout from "../../components/Layout/Layout";
import "../../CSS/Signin.css";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [dob, setdob] = useState("");
  const [phoneno, setphone] = useState("");
  const [password, setpassword] = useState("");
  const [address, setaddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_API}/api/v1/auth/register`,
        { name, email, dob, phoneno, password, address }
      );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("../login");
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
      <Layout title={"Register"}>
        <div className="register">
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
              <label htmlFor="DOB">Date Of Birth </label>
              <input
                type="date"
                name="DOB"
                value={dob}
                onChange={(e) => setdob(e.target.value)}
                placeholder="Enter the date of your joining"
              />
            </div>
            <div className="in">
              <label htmlFor="mobile">Phone No. </label>
              <input
                type="number"
                name="phoneNo"
                value={phoneno}
                onChange={(e) => setphone(e.target.value)}
                placeholder="Enter your Mobile No"
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
              <label htmlFor="address">Address </label>
              <input
                type="text"
                name="address"
                value={address}
                onChange={(e) => setaddress(e.target.value)}
                placeholder="Address"
              />
            </div>
            <div className="in">
              <a href>
                <button
                  className="btn Submit_btn"
                  type="submit"
                  id="Signin_submit"
                >
                  Register
                </button>
              </a>
            </div>
          </form>
        </div>
      </Layout>
    </>
  );
}

export default Register;
