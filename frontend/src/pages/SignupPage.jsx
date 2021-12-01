import React from "react"
import { Link, useHistory } from 'react-router-dom'
import '../styles/signup.scss'

const SignupPage = () => {
    const history = useHistory()

    const redirectHomeHandler = event => {
        history.push('/login')
        event.preventDefault()
    }

    return (
        <div className="signup_section">
            <div className="signup-form">
                <form>
                    <label htmlFor="name">Nume utilizator:</label>
                    <input type="text" placeholder="ex: Ion" />
                    <label htmlFor="email">Email:</label>
                    <input type="text" placeholder="ex: ion228@gmail.com" />
                    <label htmlFor="name">Parolă:</label>
                    <input type="password" placeholder="ex: 12345" />
                    <label htmlFor="name">Confirmă parolă:</label>
                    <input type="password" placeholder="ex: 12345" />
                    <p>Ești înregistrat? <Link to="/login">Intră în Ecatalog</Link></p>
                    <button className="signup-button" onClick={redirectHomeHandler}>Înregistrează-te</button>
                </form>
            </div>
        </div>
    )
}

export default SignupPage