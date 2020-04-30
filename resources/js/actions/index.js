export const addUser = user => ({
    type: 'ADD_USER',
    user
});

export const editUser = user => ({
    type: 'EDIT_USER',
    user
});

export const deleteUser = id => ({
    type: 'DELETE_USER',
    id
});

export const loadUsers = users => ({
    type: 'LOAD_USERS',
    users
});


export const UserCrud = {
    ADD_USER: 'ADD_USER',
    EDIT_USER: 'EDIT_USER',
    DELETE_USER: 'DELETE_USER',
    LOAD_USERS: 'LOAD_USERS',
};
