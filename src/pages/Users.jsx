import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react"
import axios from "axios";
import { Link } from "react-router-dom";


function Users(){
    const {users} = useParams()

    const [user, setUsers] = useState({});


    async function fetchUser(){

      const {data} = await axios.get("https://jsonplaceholder.typicode.com/users/${id}");
        setUsers(data);
    }
    useEffect(()=> {
   
            fetchUser();

    },[])
    return( 
    <div>
    <Link to={`/`}> go back</Link>
    <h1>{user.id}</h1>
    <h2>{user.name}</h2>
    </div>)
}
export default Users