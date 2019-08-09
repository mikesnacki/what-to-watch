import React, { useState } from 'react';

function Signup() {
    return (
        <form >
            <h2>Let's get you signed up</h2>
            <input className="modal-input align-center"
                placeholder="email address"
                type="email"
            />
            <input
                className="modal-input align-center"
                placeholder="password"
                type="current-password"
            />
            <button className="button-modal">submit</button>
        </form>
    )
}

function Signin() {
    return (
        <form >
            <h2>Let's get you signed in</h2>
            <input className="modal-input align-center"
                placeholder="email address"
                type="email"
            />
            <input
                className="modal-input align-center"
                placeholder="password"
                type="current-password"
            />
            <button className="button-modal">submit</button>
        </form>
    )
}


export default function Auth({ hideAuthModal, auth }) {

    const displayed = auth === true ? "modal display-block" : "modal display-none";

    const [signup, showSignup] = useState(false)
    const [signin, showSignin] = useState(false)

    const removeCurrent = () => {
        showSignin(false)
        showSignup(false)
        hideAuthModal()
    }


    return (
        <div
            className={displayed}
        >
            <section
                className="modal-main align-center">
                <button
                    className="button-clear button-right"
                    onClick={removeCurrent}
                >
                    ✖
                 </button>
                {signup === false && signin === false &&
                    <div>
                        <button
                            onClick={() => showSignup(true)}
                            className="button-clear button-modal modal-link">
                            Sign Up
                        </button>

                        <button
                            onClick={() => showSignin(true)}
                            className="button-clear button-modal modal-link">
                            Sign In
                        </button>
                    </div>
                }
                {
                    signup === true && <Signup />
                }
                {
                    signin === true && <Signin />
                }

            </section>
        </div >
    )
};


