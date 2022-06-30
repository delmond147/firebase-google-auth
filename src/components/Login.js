import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Form, Button, Alert } from 'react-bootstrap'
import {useUserAuth} from '../context/UserAuthContext'
import GoogleButton from 'react-google-button'


const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signin, googleSignin } = useUserAuth()
    const naviagte = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signin(email, password)
            naviagte("/home")

        } catch (err) {
            setError(err.message)
        }
    }

    const handleGoogleSignin = async (e) => {
    e.preventDefault()

    try {
        await googleSignin()
        naviagte("/home")
    } catch (err) {
        setError(err.message)
    }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Login</h2>
                {error && <Alert variant="danger">{ error }</Alert>}
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="email" placeholder="Email address" onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                    </Form.Group>


                    <div className="d-grid gap-2">
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    
                </Form>

                <hr />
                <div>
                    <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignin} />
                </div>
                <div className="mt-3 p-4 box text-center">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    )
}


export default Login
