export default ( state = {}, action) => {
    switch (action.type) {
        case 'LOGIN': 
            return {
               uid: action.uid,
               userPHOTO: action.photoURL,
               userDisplayName: action.displayName,
               userEmail: action.email
        };
        case 'LOGOUT':
            return {}
        default:
            return state;
}
}