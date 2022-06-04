import { useEffect, useRef, useState } from "react"
import { reqResApi } from "../api/reqRes"
import { ReqResponseList, User } from "../interfaces/reqRes"



export const useUsers = () => {
    const [users, setUsers] = useState<User[]>([]);


    const pageRef = useRef(1);


    useEffect(() => {
       fetchUsers()
    }, [])


    const fetchUsers = async() => {
        const { data } = await reqResApi.get<ReqResponseList>("/users", {
            params: {
                page: pageRef.current
            }
        })
        
        
        if(data.data.length > 0) {
            setUsers(data.data)
        } else {
            pageRef.current--
            alert("No hay mas usuarios")
        }
    }

    const nextPage = () => {
       
            pageRef.current++
        fetchUsers();
        
    }

    const prevPage = () => {
       if(pageRef.current < 1) {
           alert("No hay mas usuarios")
       } else {
           pageRef.current--
       fetchUsers();
       }
    }
 
     

     return {
            users,
            nextPage,
            prevPage
     }
}
