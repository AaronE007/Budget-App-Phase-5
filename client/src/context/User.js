import React, {useState, useEffect} from "react";

const UserContext = React.createContext();


const UserProvider = ({children}) => {

  const[user, setUser ] = useState({});
  const[loggeddIn, setLoggedIN] = useState([])

 

  return (
    <div>
      
    </div>
  )
}

export default User
