import { NavLink } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
export default function Navbar() {
  return (
    <nav>
      <div className='container flex justify-between py-4'>
        <div className='flex items-center gap-4'>
          <h2 className='font-bold text-2xl'>REACT-STARTER</h2>
          <NavLink
            to='/'
            className={({ isActive }) =>
              isActive ? "bg-cyan-600 p-2 rounded-md" : "p-2"
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              isActive ? "bg-cyan-600 p-2 rounded-md" : "p-2"
            }
          >
            About
          </NavLink>
        </div>
        <ModeToggle />
      </div>
    </nav>
  );
}
