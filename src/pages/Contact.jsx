import React, { useContext } from 'react'
import { Context } from '../contexts/AppContext'

const Contact = () => {
    const { store } = useContext(Context)
    
    return (
        <>
            <div className="container">
                <h3>Users List</h3>
                <hr className='border-2' />
                <ul className="list-group">
                    {
                        store.users.length > 0 &&
                        store.users.map((user, i) => {
                            return (
                                <li className="list-group-item" key={i}>{user.name} / {user.email}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Contact