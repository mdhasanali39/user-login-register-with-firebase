import { NavLink } from "react-router-dom";

const Navbar = () => {

  return (
    <nav>
      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500 font-semibold underline"
                : ""
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/signIn"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500 font-semibold underline"
                : ""
            }
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/signUp"}
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-green-500 font-semibold underline"
                : ""
            }
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
