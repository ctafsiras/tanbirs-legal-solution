import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const SocialLogin = () => {
    const navigate=useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const googleSignIn = () => {
        signInWithGoogle()
    }
    if (user) {
        navigate(from, { replace: true });
    }

    return (
        <div>
            <div style={{ maxWidth: '350px' }} className='d-flex mx-auto align-items-center'>
                <div className='w-50 border-top border-primary '></div>
                <p className='pt-3 px-2'>Or</p>
                <div className='border-top border-primary w-50'></div>
            </div>
            {loading && <p className='text-primary'>Please Wait...</p>}
            {error && <p className='text-danger'>{error.message}</p>}
            <button onClick={googleSignIn} className='border-0 px-4 py-2 bg-success text-white rounded'>Sign In With Google</button>
        </div>
    );
};

export default SocialLogin;