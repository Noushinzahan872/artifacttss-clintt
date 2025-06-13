import Swal from 'sweetalert2';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from "react-icons/fa";

import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';

import { FcGoogle } from "react-icons/fc";
import Footer from '../components/Footer';
import { AuthContext } from '../contexts/AuthProvider';

const Register = () => {

const {createUser,setUser,updateUser,handleGoogleLogin}=use(AuthContext);
const [showPassword,setShowPassword]=useState(false);
 const [nameError,setNameError]=useState("");
//  const [error,setError] = useState("")
 const navigate=useNavigate();

  const handleRegister=(e)=>{
   e.preventDefault();
  //  console.log(e.target);
   const form=e.target;
   const name=form.name.value;

   if(name.length<5){
    setNameError('Name should be 5 character');
    return;
   }            
   else{
    setNameError("");
   }

   const photo=form.photo.value;
   const email=form.email.value;
   const password=form.password.value;

   if(password.length < 6){
    toast.error("Password must contain at least 6 characters")
    return
}

   if(!/[a-z]/.test(password)){
    toast.error("Password must contain at least one lowercase letter")
    return;
}
if(!/[A-Z]/.test(password)){
    toast.error("Password must contain at least one uppercase letter")
    return;
}

  console.log({name,photo,email,password});

createUser(email,password)
.then(result=>{
  const user=result.user;
//    console.log(user);
  //  setUser(user);

   updateUser({displayName:name,photoURL:photo})
   .then(()=>{
     setUser({...user,displayName:name,photoURL:photo});
     navigate('/');
     Swal.fire({
      icon: 'success',
      title: 'Success!',
      text: 'User registered successfully'
    });
    //  toast.success('user register success')
   })
   .catch((error)=>{
    // console.log(error);
    setUser(user);
   });


})
.catch(
  error=>{
    console.log(error);
    setUser
    // alert('error');

  })
  }

  const googleLogingHandler = () =>{
    handleGoogleLogin()
    .then(res=>{
      navigate(location.state.from)
    })
  }


    return (
        <div>
       
            <div className='flex justify-center min-h-screen items-center'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <h2 className='text-2xl font-semibold text-center'>Register your account</h2>
      <form onSubmit={handleRegister} className="card-body">
        <fieldset className="fieldset">
             {/* name */}
        <label className="label">Name</label>
        <input type="text"
         name='name'
          className="input" 
          placeholder="Name" 
          required
          />
            
              {nameError && <p className='text-red-500'>{nameError}</p>}

        {/* photo url */}
        <label className="label">Photo url</label>
        <input type="text"
        name="photo"
         className="input" 
         placeholder="photo url" 
         required/>

            {/* email */}
          <label className="label">Email</label>
          <input type="email"
          name='email'
           className="input"
            placeholder="Email"
            required />
          {/* password */}
          <label className="label">Password</label>
          <div className='relative'>
          <input type={showPassword?'text':'password'}
          name='password'
           className="input"
            placeholder="Password" 
            required/>
            <button onClick={()=>{setShowPassword(!showPassword)}} className='btn btn-xs absolute top-2 right-6'>
              {
                showPassword?<FaEyeSlash></FaEyeSlash>:<FaEye />
              }
              </button>
          </div>
          
          <button type='submit' className="btn btn-secondary rounded-full mt-4">Register</button>
          <p className='font-semibold text-center'>Already  have An Account?<Link className='text-secondary' to='/login'>Login</Link></p>
        </fieldset>
      </form>
      <button onClick={googleLogingHandler} className='btn btn-secondary'> <FcGoogle />Google login</button>
    </div>
    
        </div>
        <ToastContainer position="top-right" />
        <Footer></Footer>
        </div>
    );
};

export default Register;