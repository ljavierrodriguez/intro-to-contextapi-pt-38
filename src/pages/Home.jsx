import React, { useContext, useEffect } from 'react'
import { Context } from '../contexts/AppContext'

const Home = () => {
    const { store, actions } = useContext(Context)

    useEffect(() => {
        //actions.getComments()
    }, [])

    return (
        <>
            <div className="container">
                <h3>Home</h3>
                <hr className="border-2" />
                <button className="btn btn-primary btn-sm" onClick={actions.addUser}>Add User</button>
            </div>
            <div className="container">
                <ul className="list-group">
                    {
                        store.comments.length > 0 &&
                        store.comments.map((comment, i) => {
                            return (
                                <li className="list-group-item" key={i}>{comment.body}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </>
    )
}

export default Home