import { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
    const login = {
        email: "monsterhieupke@gmail.com",
        password: "12345678",
    };
    const [getItemLogin, setItemLogin] = useState({
        email: "",
        password: "",
    });
    const [itemErr, setItemErr] = useState({});
    const ktMail =
        /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    const navigate = useNavigate();

    function hanldeIn(e) {
        const nameIn = e.target.name;
        const value = e.target.value;
        setItemLogin((state) => ({ ...state, [nameIn]: value }));
    }

    function hanldeSubmit(e) {
        e.preventDefault();
        const errSubmit = {};
        let kt = true;

        if (getItemLogin.email === "") {
            kt = false;
            errSubmit.email = "Please enter your email address";
        } else {
            if (!ktMail.test(getItemLogin.email)) {
                kt = false;
                errSubmit.email = "Email is not format";
            } else {
                errSubmit.email = "";
            }
        }
        if (getItemLogin.password === "") {
            kt = false;
            errSubmit.password = "Please enter your password";
        } else {
            errSubmit.password = "";
        }

        if (!kt) {
            setItemErr(errSubmit);
        } else {
            setItemErr("");
            if (
                !getItemLogin.email.includes(login.email) ||
                !getItemLogin.password.includes(login.password)
            ) {
                kt = false;
                errSubmit.checkInclude =
                    "Email address or password is not exist or not correct";
            } else {
                errSubmit.checkInclude = "";
            }
            if (!kt) {
                setItemErr(errSubmit);
            } else {
                errSubmit.checkInclude = "";
                setItemErr("");
                const dataPost = {
                    email: getItemLogin.email,
                    password: getItemLogin.pass,
                };
                alert("Login is success");
                navigate("/Animal");
                localStorage.setItem(
                    "inforLogin",
                    JSON.stringify(getItemLogin)
                );
                localStorage.setItem("checkLogin", true);
            }
        }
    }

    return (
        <>
            <div className="login-page">
                <h1>Login</h1>
                <form className="form-login" onSubmit={hanldeSubmit}>
                    <div className="infor-login">
                        <label>Your email address:</label>
                        <input
                            type="text"
                            name="email"
                            onChange={hanldeIn}
                            placeholder=" Your email"
                        />
                        <span>{itemErr.email}</span>
                        <label>Your password:</label>
                        <input
                            type="password"
                            name="password"
                            onChange={hanldeIn}
                            placeholder=" Your password"
                        />
                        <span>{itemErr.password}</span>
                    </div>
                    <div className="other-login">
                        <label>
                            <input type="checkbox" /> Remember me
                        </label>
                        <Link to="/">Forgot password</Link>
                    </div>
                    <button type="submit">Login</button>
                    <span>{itemErr.checkInclude}</span>
                </form>
                <div className="option-login">
                    <ul>
                        <li>
                            <button>
                                <FaFacebookF />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaGoogle />
                            </button>
                        </li>
                        <li>
                            <button>
                                <FaTwitter />
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}
