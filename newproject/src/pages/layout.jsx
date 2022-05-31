import { Outlet, Link } from "react-router-dom";

export const Layout = () => {
  return (
    <>
    <div>
      <nav className="nav">
        <ul className="navlist">
          <li className="navlink">
            <Link to="/">Home🏠 </Link>
          </li>
          <li className="navlink">
            <Link to="/Button">Buttons🖲️</Link>
          </li>
          <li className="navlink">
            <Link to="/Input">Input📝</Link>
          </li>
          <li className="navlink">
            <Link to="/Timer">Timer⌛</Link>
          </li>
          <li className="navlink">
            <Link to="/Items">Items📄</Link>
          </li>
          <li className="navlink">
            <Link to="/TicTacToe">❌/⭕</Link>
          </li>
        </ul>
      </nav>
    </div>

      <Outlet />
    </>
  )
};

export default Layout;