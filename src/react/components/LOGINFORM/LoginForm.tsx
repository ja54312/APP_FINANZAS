import React, { useState, useEffect } from 'react'

const LoginForm = () => {
  const initialForm = {
    email: "",
    password: ""
  }

  const [form, setForm] = useState(initialForm);

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('click submit')
    setForm(initialForm)
  }
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className='section-LoginForm'>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Correo:</label>
        <input
          type='text'
          name="email"
          id='email'
          placeholder='email@.com'
          onChange={handleChange}
          value={form.email}
        />
        <label htmlFor="password">Password:</label>
        <input
          type='password'
          name="password"
          id='password'
          placeholder='password'
          onChange={handleChange}
          value={form.password}
        />
        <input type='submit' value="Enviar" />
      </form>
    </section>
  )
}

export default LoginForm