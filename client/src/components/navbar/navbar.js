import './navbar.css';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <nav class="navbar">
      <div class="container-fluid">
        <p class="navbar-brand">EMP</p>
        <form class="d-flex">

          <Link class="btn me-2" type="submit" to="/userlist">User List</Link>
          <Link class="btn me-3" type="submit" to="/form">Add</Link>
        </form>
      </div>
    </nav>
  );
}
export default Navbar;
