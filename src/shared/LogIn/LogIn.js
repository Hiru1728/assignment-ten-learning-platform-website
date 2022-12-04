import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import LoginDetails from './LoginDetails';
import useTitle from '../../hooks/useTitle';

const LogIn = () => {
    const { providerLogin, githubProviderLogin } = useContext(AuthContext);
    useTitle('Login');

    const googleProvider = new GoogleAuthProvider();

    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => { console.error(error) })

    }
    const handleGithubSignIn = () => {
        githubProviderLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='d-flex justify-content-center mt-3'>
            <div className='me-5'>
                <LoginDetails></LoginDetails>
            </div>
            <div>
                <ButtonGroup vertical>
                    <Button onClick={handleGoogleSignIn} className='mt-4' variant="outline-success"><FaGoogle></FaGoogle> Login with Google</Button>
                    <Button onClick={handleGithubSignIn} className='mt-4' variant="outline-primary"><FaGithub></FaGithub > Login with Github</Button>

                </ButtonGroup>
            </div>
        </div>
    );
};

export default LogIn;