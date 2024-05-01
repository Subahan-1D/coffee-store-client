import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Users = () => {
    const lodadedUsers = useLoaderData();
    const [users,setUser] = useState(lodadedUsers);

    const handleDelete  = id =>{
        // make user is confirmed to delete
        fetch(`http://localhost:5000/user/${id}`,{
            method:'DELETE'
        })
        .then(res => res.json())
        .catch(data =>{
            if(data.deletedCount > 0){
                console.log('Deleted Successfully');
                // remove the user form the UI
                const remaining = users.filter(user => user._id !== id);
                setUser(remaining)
            }
        })




    }
    return (
        <div>
            <h2>This is Loder : {lodadedUsers.length}</h2>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Created At</th>
                            <th>Last Logged In</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                       {
                        users.map(user =>  <tr key={user._id}>
                            <th>1</th>
                            <td>{user.email}</td>
                            <td>{user.creatdAt}</td>
                            <td>{user.lastLoggedAt}</td>
                            <td>
                                <button onClick={()=>handleDelete(user._id)} className='btn'>X</button>
                            </td>
                        </tr>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;