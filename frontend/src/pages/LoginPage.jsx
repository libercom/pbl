import React from "react"
import { useDispatch } from "react-redux"
import { Link, useHistory } from 'react-router-dom'
import { toggleAuthStatus } from "../store/reducers/authSlice"
import '../styles/login.scss'

const LoginPage = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const redirectHomeHandler = event => {
        dispatch(toggleAuthStatus())
        history.push('/')
        event.preventDefault()
    }

    return (
        <div className="login_section">
            <div className="login-form">
                <form>
                    <label htmlFor="name">Nume utilizator:</label>
                    <input type="text" placeholder="ex: Ion" />
                    <label htmlFor="name">Parolă:</label>
                    <input type="password" placeholder="ex: 12345" />
                    <p>Nu ești înregistrat? <Link to="/signup">Înregistrează-te</Link></p>
                    <button className="login-button" onClick={redirectHomeHandler}>Intră</button>
                </form>
            </div>
        </div>
    )
}

export default LoginPage
