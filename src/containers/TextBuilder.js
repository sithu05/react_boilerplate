import React, { useState } from "react";
import { connect } from "react-redux";
import { AUTH_CURRENT_USER } from "../store/modules/auth/types";

const TextBuilder = ({ dispatch, user }) => {
    const [text, setText] = useState(user);

    const saveInStorage = () => {
        if (text) {
            dispatch({ type: AUTH_CURRENT_USER, payload: text });
        }
    };

    return (
        <div>
            <input type="text" value={text} onChange={e => setText(e.target.value)} />
            <button onClick={saveInStorage} >Keep Me Safe</button>
        </div>
    );
};

const mapStateToProps = state => ({
    user: state.auth.currentUser
});

export default connect(mapStateToProps)(TextBuilder);