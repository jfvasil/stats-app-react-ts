import {Link} from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react"
import Login from './Login'

const Header = () => {


const {user, isAuthenticated} = useAuth0()

  return (
    <div className="navbar bg-primary text-primary-content fixed">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 bg-primary">
        <li><Link to='/'>Home</Link></li>
        <li>
          <a>Stats</a>
          <ul className="p-2">
            <li><Link to='/calculation'>Calculation</Link></li>
            <li><Link to='/results'>Results</Link></li>
          </ul>
        </li>
        <li><Link to='/profile'>Profile</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">Stats App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to='/'>Home</Link></li>
      <li tabIndex={0}>
        <details>
          <summary>Stats</summary>
          <ul className="p-2 bg-primary">
            <li><Link to='/calculation'>Calculation</Link></li>
            <li><Link to='/results'>Results</Link></li>
          </ul>
        </details>
      </li>
      <li><Link to='/profile'>Profile</Link></li>
    </ul>
  </div>
  <div className="navbar-end">
   {
    isAuthenticated ? (
      <h2 className='text-xl '> Hello, {user?.name}</h2>
    ) : (
      
      <span className='btn'>
      <Login />
      </span>
      
    )
   }

    
  </div>
</div>
  )
}

export default Header