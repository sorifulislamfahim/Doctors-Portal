import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const [signupError, setSignupError] = useState('');

    const handleSignUp = data => {
        console.log(data);
        setSignupError('')
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user)
                toast('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => { })
                    .catch(error => console.error(error));
            })
            .catch(error => {
                console.error(error)
                setSignupError(error.message)
            })
    }
    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='p-9 w-96 border-2'>
                <h2 className='text-4xl text-center font-semibold mb-10'>SignUp !</h2>
                <form onSubmit={handleSubmit(handleSignUp)}>

                    <div className="form-control w-full max-w-xs">
                        <label className="label"><span className="label-text text-xl">Full Name</span></label>
                        <input type="text"
                            {...register("name", {
                                required: true
                            })}
                            className="input input-bordered w-full max-w-xs" />
                    </div>

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
                                minLength: { value: 6, message: 'Password must be 6 carecters' }
                            })}
                            className="input input-bordered w-full max-w-xs" />
                        {errors.password && <p className='text-red-600 font-semibold' role="alert">{errors.password?.message}</p>}
                    </div>
                    {signupError && <p className='text-red-600 text-center'>{setSignupError}</p>}
                    <input type="submit" className='btn w-full my-5' value='Signup' />
                </form>
                <p className='text-center'>Alredy have an acount <Link to='/signup' className='font-semibold text-primary'>Please login</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>Continew With Google</button>
            </div>
        </div>
    );
};

export default SignUp;