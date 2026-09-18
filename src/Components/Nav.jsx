// import React, { useState } from 'react'
// import { Link, useLocation, useNavigate } from 'react-router-dom';

// const Nav = () => {

//     const [isLoggedIn, setIsLoggedIn] = useState(false);

//     const location = useLocation();

//     const navigate = useNavigate();

//     const handleLoggedIn = () => {

//         setIsLoggedIn(true);

//         navigate("/user")
//     }

//     const handleLoggedOut = () => {

//         setIsLoggedIn(false);

//         navigate("/home")
//     }

//     return (
//         <div>

//             <ul>

//                 <li>

//                     <Link to="/">Home</Link>
//                 </li>
//                 {isLoggedIn && (
//                     <>
//                         <li>

//                             <Link to="/user">User</Link>
//                         </li>

//                          <li>
//                             <button onClick={handleLoggedOut}> Logout</button>
//                         </li>

                        

//                     </>
//                 )}

//                 {!isLoggedIn && (
//                     <>
//                         <li>

//                             <Link to="/about">About</Link>
//                         </li>

//                         <li>

//                             <Link to="/contact">Contact Us</Link>
//                         </li>

//                         <li>
//                             <button onClick={handleLoggedIn}> Login</button>
//                         </li>

//                     </>
//                 )}

//             </ul>
//         </div>
//     )
// }

// export default Nav
