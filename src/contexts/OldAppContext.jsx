import { createContext, useEffect, useState } from "react";

export const Context = createContext(null);

const AppContext = ({ children }) => {

    const [state, setState] = useState({
        username: 'john.doe@gmail.com',
        users: [],
        comments: []
    })

    useEffect(() => {
        getComments();
    }, [])


    const addUser = () => {
        const user = { id: 1, name: 'Jane Doe', email: 'jane.doe@gmail.com' };
        setState((prevState) => {
            return { ...prevState, users: [...prevState.users, user] }
        })
    }

    const getComments = () => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(dataJson => setState((prevState) => {
                return { ...prevState, comments: dataJson }
            }))
    }


    return (
        <Context.Provider value={{ store: state, actions: { addUser, getComments } }}>
            {children}
        </Context.Provider>
    )
}

export default AppContext;