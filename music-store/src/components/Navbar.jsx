import {useState} from 'react'
import {Link,Outlet} from "react-router-dom";
import icons8menusquared from "../assets/icons8menusquared.png";
import icons8closewindow from "../assets/icons8closewindow.png"; 
// import logores from "../assets/logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    let Links=[
        {name:"CREATE",link:"add",id:1},
    {name:"LIST",link:"list",id:2}
    ]
    const [active,setActive]=useState('CREATE');
  const [toggle, setToggle] = useState(false);
  const logo = () => {
    let p = `/`;
        navigate(p);
  }

  return (
    <>
    <div className="flex justify-center">
        <p>welcome , $name</p>
    </div>
    <nav className='w-full flex p-4 justify-between items-center bg-black z-10 font-mono'>
         {/* <img src={logores} alt="gat-logo" className="h-12 md:h-20 cursor-pointer" onClick={logo} /> */}
        <ul className='list-none sm:flex hidden justify-around items-center flex-1'>
            {Links.map((link) =>(
                
                <li key={link.id}
            >

                <Link to={`${link.link}`} className={`text-white font-montserrat font-medium cursor-pointer text-[20px]${
                active===(link.name)?"text-blue-600":"text-white"
            }`}
            onClick={()=>setActive(link.name)}>{link.name}</Link>
{/* console.log(link.name) */}
            </li>
            ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
            <img src={toggle?icons8closewindow:icons8menusquared} alt="menu"
            className='w-[28px] h-[28px] object-contain'
            onClick={()=>setToggle(!toggle)}
            />
        <div 
        className={`${
            !toggle?"hidden":"flex"
            
        }
        p-6 bg-black text-white absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar
        `}
        >
             <ul className='list-none flex justify-end items-start flex-1 flex-col'>
            {Links.map((link) =>(

            <li key={link.id}
            
            >

                <Link to={`${link.link}`} className={`text-white text-center m-2 font-montserrat font-medium cursor-pointer text-[20px]${
                active===(link.name)?"text-white":"text-blue-500"
            }`}
            onClick={()=>setActive(link.name)}>{link.name}</Link>

            </li>
            ))}
        </ul>
        </div>

        </div>
        <Outlet/>
    </nav>
            </>
  )
}

export default Navbar