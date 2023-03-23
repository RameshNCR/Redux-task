import { Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <ul>
        <li>
          <Link to = 'Login'>Login</Link>
        </li>
        <li>
          <Link to = 'UserDetails'>UserDetail</Link>
        </li>
      </ul>
    </div>
  )
}
export default Layout;