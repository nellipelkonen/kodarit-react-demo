import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <div>
      <nav className="nav">
        <ul className="navlist">
          <li className="navlink">
            <Link className="homelink" to="/">Home🏠 </Link>
          </li>
          <li className="navlink">
            <Link to="/button">Buttons</Link>
          </li>
          <li className="navlink">
            <Link to="/input">Input</Link>
          </li>
          <li className="navlink">
            <Link to="/timer">Timer</Link>
          </li>
        </ul>
      </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;