export default ( state = {}, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {
               uid: action.type
        };
        case 'LOGOUT':
            return {}
        default:
            return state;
}
}