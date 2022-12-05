import React, { useState } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const LogIn = () => {
    const { register,  formState: { errors }, handleSubmit  } = useForm();
    const {signIn} = useContext(AuthContext);
    const [loginErrror, setLoginError] = useState();
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleLogin = data => {
        console.log(data);
        setLoginError('')
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.error(error.message)
            setLoginError(error.message)
        })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='p-9 w-96 border-2'>
                <h2 className='text-4xl text-center font-semibold mb-10'>LogIn</h2>
                <form onSubmit={handleSubmit(handleLogin)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl">Email</span></label>
                        <input type="email"
                         {...register("email", {
                            required: "Email Address is required",   
                         })} 
                         className="input input-bordered w-full max-w-xs" />
                         {errors.email && <p className='text-red-600 font-semibold' role="alert">{errors.email?.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl">Password</span></label>
                        <input type="text"
                         {...register("password", {
                            required: "Password is required", 
                            minLength: {value: 6, message: 'Password must be 6 carecters'}
                         })}
                         className="input input-bordered w-full max-w-xs" />
                         {errors.password && <p className='text-red-600 font-semibold' role="alert">{errors.password?.message}</p>}
                        
                    </div>
                    <div className='text-center text-red-500'>
                        {loginErrror && <p>{loginErrror}</p>}
                    </div>
                    <label className="label"><span className="label-text text-xl underline">Forget Password</span></label>
                    <input type="submit" className='btn w-full my-5' value='Login'/>
                </form>
                <p className='text-center'>New to doctors portal <Link to='/signup' className='font-semibold text-primary'>Create a new acount</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continew With Google</button>
            </div>
        </div>
    );
};

export default LogIn;