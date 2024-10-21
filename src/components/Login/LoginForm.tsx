import React from 'react';
import './LoginForm.css';

export const ID_MODAL_LOGIN = "modalLogin"

export interface LoginFormProps {
    visible: boolean;
    onClose?: any;
    onLogin?: any;
}

export const LoginForm = (props: LoginFormProps) => {

    const { visible, onClose, onLogin } = props;

    let modal = document.getElementById(ID_MODAL_LOGIN);

    const closeModal = () => {
        if (modal) {
            modal.style.display = 'none'
        }

        if (onClose) {
            onClose();
        }
    }

    const login = (e: React.FormEvent) => {
        const form = e.currentTarget;

        e.preventDefault();

        const formData = new FormData(form);

        if (onLogin) {
            onLogin(formData.get("uname"), formData.get("psw"));
        }
    }

    if (visible) {
        if (modal) {
            modal.style.display = 'block'
        }
    } else {
        if (modal) {
            modal.style.display = 'none'
        }
    }

    return (
        <div id={ID_MODAL_LOGIN} className="modal">

            <form className="modal-content animate" onSubmit={login}>
                <div className="imgcontainer">
                    <span onClick={closeModal} className="close" title="Close Modal">&times;</span>
                    <img src="img_avatar2.png" alt="Avatar" className="avatar" />
                </div>

                <div className="container">
                    <label htmlFor="uname"><b>Username</b></label>
                    <input className='inputLogin' type="text" placeholder="Enter Username" name="uname" required />

                    <label htmlFor="psw"><b>Password</b></label>
                    <input className='inputLogin' type="password" placeholder="Enter Password" name="psw" required />

                    <button className='buttonLogin' type="submit">Login</button>
                    <label>
                        <input type="checkbox" name="remember" /> Remember me
                    </label>
                </div>

                <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
                    <button type="button" onClick={closeModal} className="buttonLogin cancelbtn">Cancel</button>
                    <span className="spanLogin psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}