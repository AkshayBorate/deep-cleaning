// import React, { useState } from 'react';
// import './Login.css';

// const Login = () => {
//   const [isSignup, setIsSignup] = useState(false);
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     mobile: '',
//     password: '',
//     signinEmail: '',
//     signinPassword: '',
//   });

//   const [errors, setErrors] = useState({});

//   const toggleForm = () => {
//     setIsSignup(!isSignup);
//     setErrors({});
//   };

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const validateSignup = () => {
//     const newErrors = {};

//     // Name (First and Last) Validation
//     if (!/^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/.test(formData.name)) {
//       newErrors.name = 'Please enter your first and last name (at least 2 characters each)';
//     }

//     // Email Validation
//     if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     // Mobile Number Validation
//     if (!/^\d{10}$/.test(formData.mobile)) {
//       newErrors.mobile = 'Mobile number must be exactly 10 digits';
//     }

//     // Password Validation
//     if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(formData.password)) {
//       newErrors.password = 'Password must be at least 8 characters long and include at least one letter and one number';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const validateSignin = () => {
//     const newErrors = {};

//     // Email Validation
//     if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.signinEmail)) {
//       newErrors.signinEmail = 'Please enter a valid email address';
//     }

//     // Password Validation
//     if (formData.signinPassword.length < 8) {
//       newErrors.signinPassword = 'Password must be at least 8 characters long';
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleSignup = () => {
//     if (validateSignup()) {
//       alert('Signup successful!');
//     }
//   };

//   const handleSignin = () => {
//     if (validateSignin()) {
//       alert('Signin successful!');
//     }
//   };

//   return (
//     <div className="container login-body mt-5">
//       <div className={`login-container ${isSignup ? 'show-signup' : ''}`}>

//         {/* Sign In Form */}
//         <div className="login-form sign-in-form">
//           <h2 className='h2-stl mt-5'>Welcome</h2>
//           <label className='label-stl'>
//             <span className='span-stl'>Email</span>
//             <input
//               type="email"
//               name="signinEmail"
//               className='input-taking'
//               value={formData.signinEmail}
//               onChange={handleInputChange}
//             />
//             {errors.signinEmail && <p className="error-text">{errors.signinEmail}</p>}
//           </label>
//           <label className='label-stl'>
//             <span className='span-stl'>Password</span>
//             <input
//               type="password"
//               name="signinPassword"
//               className='input-taking'
//               value={formData.signinPassword}
//               onChange={handleInputChange}
//             />
//             {errors.signinPassword && <p className="error-text">{errors.signinPassword}</p>}
//           </label>
//           <p className="forgot-password">Forgot password?</p>
//           <button type="button" className="submit-btns stl-btns" onClick={handleSignin}>Sign In</button>
//         </div>

//         {/* Sign Up Form */}
//         <div className="form-toggle-section">
//           <div className="form-toggle-image">
//             <div className="form-toggle-text show-signup-text">
//               <h3 className='h3-stl'>Don't have an account? Please Sign up!</h3>
//             </div>
//             <div className="form-toggle-text show-signin-text">
//               <h3 className='h3-stl'>If you already have an account, just sign in.</h3>
//             </div>
//             <div className="form-toggle-btn" onClick={toggleForm}>
//               <span className="signup-label span-stl">Sign Up</span>
//               <span className="signin-label span-stl">Sign In</span>
//             </div>
//           </div>

//           <div className="signup-form">
//             <h2 className='h2-stl mt-lg-5'>Create your Account</h2>
//             <label className='label-stl'>
//               <span className='span-stl'>Full Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 className='input-taking'
//                 value={formData.name}
//                 onChange={handleInputChange}
//               />
//               {errors.name && <p className="error-text">{errors.name}</p>}
//             </label>
//             <label className='label-stl'>
//               <span className='span-stl'>Email</span>
//               <input
//                 type="email"
//                 name="email"
//                 className='input-taking'
//                 value={formData.email}
//                 onChange={handleInputChange}
//               />
//               {errors.email && <p className="error-text">{errors.email}</p>}
//             </label>
//             <label className='label-stl'>
//               <span className='span-stl'>Mobile No</span>
//               <input
//                 type="text"
//                 name="mobile"
//                 className='input-taking'
//                 value={formData.mobile}
//                 onChange={handleInputChange}
//               />
//               {errors.mobile && <p className="error-text">{errors.mobile}</p>}
//             </label>
//             <label className='label-stl'>
//               <span className='span-stl'>Password</span>
//               <input
//                 type="password"
//                 name="password"
//                 className='input-taking'
//                 value={formData.password}
//                 onChange={handleInputChange}
//               />
//               {errors.password && <p className="error-text">{errors.password}</p>}
//             </label>
//             <button type="button" className="submit-btns stl-btns" onClick={handleSignup}>Sign Up</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import "./Login.css";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    password: "",
    signinEmail: "",
    signinPassword: "",
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setErrors({});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateSignup = () => {
    const newErrors = {};

    // Name (First and Last) Validation
    if (!/^[A-Za-z]{2,}(?: [A-Za-z]{2,})+$/.test(formData.name)) {
      newErrors.name =
        "Please enter your first and last name (at least 2 characters each)";
    }

    // Email Validation
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    // Mobile Number Validation
    if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = "Mobile number must be exactly 10 digits";
    }

    // Password Validation
    if (!/^(?=.*[A-Za-z])(?=.*\d).{8,}$/.test(formData.password)) {
      newErrors.password =
        "Password must be at least 8 characters long and include at least one letter and one number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateSignin = () => {
    const newErrors = {};

    // Email Validation
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.signinEmail)) {
      newErrors.signinEmail = "Please enter a valid email address";
    }

    // Password Validation
    if (formData.signinPassword.length < 8) {
      newErrors.signinPassword = "Password must be at least 8 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignup = async () => {
    if (validateSignup()) {
      try {
        const response = await fetch(
          "http://localhost:7001/api/auth/register",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name,
              email: formData.email,
              mobile: formData.mobile,
              password: formData.password,
            }),
          }
        );
        const result = await response.json();

        if (response.ok) {
          alert(result.message || "Signup successful!");
          toggleForm(); // Switch to sign-in form
          setFormData((prev) => ({
            ...prev,
            name: "",
            email: "",
            mobile: "",
            password: "",
          }));
        } else {
          alert(result.message || "Signup failed.");
        }
      } catch (error) {
        alert("Something went wrong during signup.");
        console.error(error);
      }
    }
  };
  // const handleSignin = async () => {
  //   if (validateSignin()) {
  //     try {
  //       // const response = await fetch("http://localhost:7001/api/auth/login", {
  //       //   method: "POST",
  //       //   headers: { "Content-Type": "application/json" },
  //       //   body: JSON.stringify({
  //       //     signinEmail: formData.signinEmail,
  //       //     signinPassword: formData.signinPassword,
  //       //   }),
  //       // });
  //       // const result = await response.json();
  //       if (
  //         formData.signinEmail === "abhijeetshitole@21gmail.com" &&
  //         formData.signinPassword === "Abhis@21"
  //       ) {
  //         alert("Signin successful!");
  //         // localStorage.setItem("token", result.token || "hardcoded-token"); // Optional token save
  //         Navigate("/getdetails");
  //         return;
  //       }
  //       // if (response.ok) {
  //       //   alert("Signin successful!");
  //       //   localStorage.setItem("token", result.token);
  //       //   // Redirect or update UI after successful login
  //       // } else {
  //       //   alert(result.message || "Signin failed.");
  //       // }
  //     } catch (error) {
  //       alert("Something went wrong during signin.");
  //       console.error(error);
  //     }
  //   }
  // };

  const handleSignin = async () => {
    if (validateSignin()) {
      try {
        if (
          formData.signinEmail === "abhijeetshitole@21gmail.com" &&
          formData.signinPassword === "Abhis@21"
        ) {
          alert("Signin successful!");
          // Navigate using the navigate function
          navigate("/getdetails");
          return;
        } else {
          alert("Invalid email or password.");
        }
      } catch (error) {
        alert("Something went wrong during signin.");
        console.error(error);
      }
    }
  };
  return (
    <div className="container login-body mt-5">
      <div className={`login-container ${isSignup ? "show-signup" : ""}`}>
        {/* Sign In Form */}
        <div className="login-form sign-in-form">
          <h2 className="h2-stl mt-5">Welcome</h2>
          <label className="label-stl">
            <span className="span-stl">Email</span>
            <input
              type="email"
              name="signinEmail"
              className="input-taking"
              value={formData.signinEmail}
              onChange={handleInputChange}
            />
            {errors.signinEmail && (
              <p className="error-text">{errors.signinEmail}</p>
            )}
          </label>
          <label className="label-stl">
            <span className="span-stl">Password</span>
            <input
              type="password"
              name="signinPassword"
              className="input-taking"
              value={formData.signinPassword}
              onChange={handleInputChange}
            />
            {errors.signinPassword && (
              <p className="error-text">{errors.signinPassword}</p>
            )}
          </label>
          <p className="forgot-password">Forgot password?</p>
          <button
            type="button"
            className="submit-btns stl-btns"
            onClick={handleSignin}
          >
            Sign In
          </button>
        </div>

        {/* Sign Up Form */}
        <div className="form-toggle-section">
          <div className="form-toggle-image">
            <div className="form-toggle-text show-signup-text">
              <h3 className="h3-stl">Don't have an account? Please Sign up!</h3>
            </div>
            <div className="form-toggle-text show-signin-text">
              <h3 className="h3-stl">
                If you already have an account, just sign in.
              </h3>
            </div>
            <div className="form-toggle-btn" onClick={toggleForm}>
              <span className="signup-label span-stl">Sign Up</span>
              <span className="signin-label span-stl">Sign In</span>
            </div>
          </div>

          <div className="signup-form">
            <h2 className="h2-stl mt-lg-5">Create your Account</h2>
            <label className="label-stl">
              <span className="span-stl">Full Name</span>
              <input
                type="text"
                name="name"
                className="input-taking"
                value={formData.name}
                onChange={handleInputChange}
              />
              {errors.name && <p className="error-text">{errors.name}</p>}
            </label>
            <label className="label-stl">
              <span className="span-stl">Email</span>
              <input
                type="email"
                name="email"
                className="input-taking"
                value={formData.email}
                onChange={handleInputChange}
              />
              {errors.email && <p className="error-text">{errors.email}</p>}
            </label>
            <label className="label-stl">
              <span className="span-stl">Mobile No</span>
              <input
                type="text"
                name="mobile"
                className="input-taking"
                value={formData.mobile}
                onChange={handleInputChange}
              />
              {errors.mobile && <p className="error-text">{errors.mobile}</p>}
            </label>
            <label className="label-stl">
              <span className="span-stl">Password</span>
              <input
                type="password"
                name="password"
                className="input-taking"
                value={formData.password}
                onChange={handleInputChange}
              />
              {errors.password && (
                <p className="error-text">{errors.password}</p>
              )}
            </label>
            <button
              type="button"
              className="submit-btns stl-btns"
              onClick={handleSignup}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
