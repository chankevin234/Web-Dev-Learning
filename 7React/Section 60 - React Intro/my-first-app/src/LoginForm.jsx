import React from "react";

function LoginForm() {
    return (
        // React Fragment
        <> 
            <label for="username">Enter User</label>
            <input type="text" id="username" />
            <br />
            <label for="password">Enter Password</label>
            <input type="password" id="password" />
        </>
    );
}

export default LoginForm;