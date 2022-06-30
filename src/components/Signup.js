import React, { useState} from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { Link, useNavigate} from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext'


const Signup = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")
    const { signup } = useUserAuth()
    const naviagte = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError("")
        try {
            await signup(email, password)
            naviagte("/")

        } catch (err) {
            setError(err.message)
        }
    }
    return (
        <>
            <div className="p-4 box">
                <h2 className="mb-3">Firebase Auth Signup</h2>
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
                            SignUp
                        </Button>
                    </div>
                </Form>

                <hr />
                <div className="mt-3 p-4 box text-center">
                    Already have an account? <Link to="/">Sign In</Link>
                </div>
            </div>
        </>
    )
}


export default Signup
