import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <div>
      <nav className="nav">
        <ul className="navlist">
          <li className="navlink">
            <Link to="/">Home</Link>
          </li>
          <li className="navlink">
            <Link to="/button">Buttons</Link>
          </li>
          <li className="navlink">
            <Link to="/input">Input</Link>
          </li>
        </ul>
      </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;