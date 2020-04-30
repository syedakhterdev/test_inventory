
const users = (users = [], action) => {

    switch (action.type) {
        case 'ADD_USER':
            return [
                ...users,
                action.user
            ]
        case 'EDIT_USER':
            return users.map(user =>
                user.id === action.id ? { ...user } : user
            )
        case 'DELETE_USER':
            const u = users.filter( user => user.id !== action.id)
            return u;
        case 'LOAD_USERS':
            return action.users
        default:
            return users
    }
}

export default users;
