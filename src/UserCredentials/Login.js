import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../connection_to_blockchain/Abiaddress';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const { MyFinalweb3, MyFinalContract, MyCurrAccount } = useContext(AppContext);
    const navigate = useNavigate();

    const [Id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false); // State to track loading status

    const handleInputChange1 = (event) => {
        setId(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setPassword(event.target.value);
    };

    const submitdata = async (e) => {
        e.preventDefault();
        setIsLoading(true); // Start loading

        try {
            console.log(Id, password);
            var trueorfalse = await MyFinalContract.methods.login(Id, password).call();
            if (trueorfalse) {
                console.log('Log in successfully');
                sessionStorage.setItem('verifieduseridsession', Id);
                // sessionStorage.setItem('verifieduserpasswordsession',password);
                navigate('/Dashboard/NestedUpload');
            } else {
                document.getElementById('ifloginfailed').innerHTML = 'User Credentials does not exist';
            }
            console.log(trueorfalse);
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setIsLoading(false); // Stop loading
        }
    };

    return (
        <div>
            <form action="POST">
                <div className="row mt-5 d-flex justify-content-center p-5">
                    <div className="p-4 col col-lg-5 mt-1 p-md-5 border rounded-3 bg-body-tertiary text-truncate">
                        <h1>Login</h1>
                        <div className="p-4 p-md-5 rounded-3 bg-body-tertiary">
                            <div className="form-floating mb-3">
                                <input
                                    className="form-control"
                                    id="f1"
                                    placeholder=" ID"
                                    onChange={handleInputChange1}
                                />
                                <label for="floatingInput"> ID</label>
                            </div>

                            <div className="form-floating mb-3">
                                <input
                                    type="password"
                                    className="form-control"
                                    id="f3"
                                    placeholder="Password"
                                    onChange={handleInputChange2}
                                />
                                <label for="floatingPassword">Password</label>
                            </div>
                            {isLoading ? ( // Conditional rendering for spinner or login button
                                <button className="w-100 mt-3 btn btn-lg btn-primary" disabled>
                                    <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                    Loading...
                                </button>
                            ) : (
                                <button className="w-100 mt-3 btn btn-lg btn-primary" onClick={submitdata}>
                                    Login
                                </button>
                            )}
                            <hr className="my-4" />
                            <p className="text-secondary" id="ifloginfailed"></p>
                            <div className="d-flex">
                                <div>
                                    <small className="text-body-secondary">If you dont have an account </small>
                                </div>
                                <div className="ms-1">
                                    <Link to={`/Register`} className="nav-link text-primary " aria-current="page">
                                        Register
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}
