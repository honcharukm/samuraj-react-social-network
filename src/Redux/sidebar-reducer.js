const ava = 'https://images.unsplash.com/photo-1537815749002-de6a533c64db?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=845&q=80';

const initial = {
    friends: [
        {id: 1, ava, name: 'Lika'},
        {id: 2, ava, name: 'Andre'},
        {id: 3, ava, name: 'Nike'}
    ]
};
const sidebarReducer = (state = initial, action) => {
    return state;
}

export default sidebarReducer;