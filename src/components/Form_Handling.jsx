import React, { useState } from 'react'
import './Form_Handling.css'

const Form_Handling = () => {

  const [formData, setFormData] = useState({
    name : "",
    email : "",
    password : "",
    phone : ""

  });

  const onChangedHandler = (e) => {
    const {name, value} = e.target;
    setFormData({...formData,[name]: value});
  }

    const onSubmitHandler = (e) => {
      e.preventDefault();
      console.log(formData);

    }

  return (
    <>
    <form className="form-card" onSubmit={onSubmitHandler}>
      <h1 className="form-title">Sign Up</h1>

      <div className="form-field">
        <label htmlFor="name">Name</label>
        <input id="name" onChange={onChangedHandler} value={formData.name} name="name" type="text" placeholder="Enter your name" />
      </div>

      <div className="form-field">
        <label htmlFor="email">Email</label>
        <input id="email" onChange={onChangedHandler} value={formData.email} name="email" type="email" placeholder="you@example.com" />
      </div>

      <div className="form-field">
        <label htmlFor="password">Password</label>
        <input id="password" onChange={onChangedHandler} value={formData.password} name="password" type="password" placeholder="Enter a password" />
      </div>

      <div className="form-field">
        <label htmlFor="phone">Phone</label>
        <input id="phone" onChange={onChangedHandler} value={formData.phone} name="phone" type="number" placeholder="Enter your phone number" />
      </div>

      <button className="form-submit" type="submit">Submit</button>
    </form>
    </>
  )
}

export default Form_Handling
