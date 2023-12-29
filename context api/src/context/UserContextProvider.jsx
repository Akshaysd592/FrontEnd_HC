import React from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children})=>{ // children to be send as it is got 
    const [user,setUser] = React.useState(null)
    return(
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContextProvider