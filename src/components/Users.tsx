import { useUsers } from "../Hooks/useUsers"
import { User } from "../interfaces/reqRes"

export const Users = () => {

    const { users, nextPage, prevPage } = useUsers()



    const renderItem = (user: User) => {
        return (
            <tr  key={user.id}>
                <td><img
                 src={user.avatar} 
                 alt={user.first_name}
                 style={{
                     width: 50,
                     borderRadius: 100
                 }}/></td>
                <td>{user.first_name}</td>
                <td>{user.email}</td>
            </tr>
        )
    }
    

  return (
    <>
        <h1>Users</h1>
        <hr />
        <table className="table">
            <thead>
                <tr>
                    <th>Avatar</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {users.map(renderItem)}
            </tbody>
        </table>
        <button id="btn_next" className="btn btn-primary" onClick={nextPage}>
            Next
        </button>
        &nbsp;
        <button  className="btn btn-primary" onClick={prevPage}>
            Prev
        </button>
    </>
  )
}