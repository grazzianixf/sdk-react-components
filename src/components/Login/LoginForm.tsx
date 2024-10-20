import React from 'react'
import './LoginForm.css'

export const LoginForm = () => {

    const closeModal = () => {
        let modal = document.getElementById('id01')

        if (modal) {
            modal.style.display = 'none'
        }
    }

    return (
        <div id="id01" className="modal">

            <form className="modal-content animate" action="/action_page.php" method="post">
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

                <div className="container" style={{backgroundColor: "#f1f1f1"}}>
                    <button type="button" onClick={closeModal} className="buttonLogin cancelbtn">Cancel</button>
                    <span className="spanLogin psw">Forgot <a href="#">password?</a></span>
                </div>
            </form>
        </div>
    )
}