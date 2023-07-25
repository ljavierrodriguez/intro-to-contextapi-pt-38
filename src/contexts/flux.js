const getState = ({ getStore, getActions, setStore }) => {

    return {
        store: {
            username: 'john.doe@gmail.com',
            users: [],
            comments: []
        },
        actions: {
            addUser: () => {
                const store = getStore()
                const user = { id: 1, name: 'Jane Doe', email: 'jane.doe@gmail.com' };
                setStore({ users: [...store.users, user] })
            },
            getComments: () => {
                const actions = getActions();

                fetch('https://jsonplaceholder.typicode.com/comments')
                    .then(response => response.json())
                    .then(dataJson => {
                        setStore({ comments: dataJson })
                     })
            }

        }
    }
}

export default getState;