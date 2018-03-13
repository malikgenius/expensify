import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({startLogin}) => {
    return (
        <React.Fragment>
            <button onClick={startLogin}>Login with Google</button>
        </React.Fragment>
    )
};

const mapDispatchtoProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchtoProps)(LoginPage)