import { Link } from "react-router";
import logo from "../assets/img/logo.svg"

function Navbar() {
  return (
    <>
      <nav className="flex justify-around items-center p-5">
        <div className="flex justify-center">
          <img src={logo} alt="logo" />
        </div>
        <div>
          <ul className=" flex gap-10">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/movie"}>Movie</Link>
            </li>
            <li>
              <Link to={"/buyTiket"}>Buy Tiket</Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-4">
          <button type="button" className="py-3 px-6 bg-white rounded-md ">
            SignIn
          </button>
          <button
            type="button"
            className=" py-3 px-6 bg-blue-500 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
