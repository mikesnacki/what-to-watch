import React, { useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { auth, provider } from "../../src/components/firebase"

export default function Auth({ showAuth, authenticated, user, userInfo }) {

    const displayed = authenticated === true ? "modal display-block" : "modal display-none";
    const [signin, showSignin] = useState(false)

    const removeCurrent = () => {
        showSignin(false)
        hideAuthModal()
    }

    const hideAuthModal = () => {
        showAuth(false)
    }

    const signInWithProvider = () => {
        auth.signInWithPopup(provider)
            .then((result) => {
                const userEmail = result.user.email;
                userInfo({ user: userEmail })
            });
        showAuth(false)
    }

    const signOut = () => {
        userInfo({ user: null })
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
                {(user === null) ?
                    <div>
                        <h2>Let's get you signed in</h2>
                        <button
                            className="button-clear">
                            <FaGoogle
                                onClick={signInWithProvider}
                            />
                        </button>
                    </div>
                    :
                    <div>
                        <button
                            onClick={signOut}
                            className="button-clear button-search">
                            Sign Out
                        </button>
                    </div>
                }
            </section>
        </div >
    )
};
