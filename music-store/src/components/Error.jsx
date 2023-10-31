import React from 'react'
import { useNavigate } from "react-router-dom";


const Error = () => {
    let navigate = useNavigate();
    const routeChange = () =>{
        let pathtwo = `/`;
        navigate(pathtwo);
    }
  return (
    
    <div>
        <h1 className="text-center text-2xl font-mono font-bold m-5 border-4 rounded-sm p-4">404 Page Not Found</h1>
        <button className="m-auto p-auto text-white "
            onClick={routeChange}
              >
              Back
            </button>
    </div>
  )
}

export default Error