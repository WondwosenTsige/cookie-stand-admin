import React, { useState } from 'react';

function LoginForm() {
  const [formItems, setFormItems] = useState({});
  console.log('FormItems: ', formItems);

  const handleChange = (e) => {
    const newFormItems = {
      ...formItems,
      [e.target.name]: e.target.value,
    };
    setFormItems(newFormItems);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('this was clicked');
  };

  return (
    <form onSubmit={handleSubmit} className='w-1/2 p-8 mx-auto my-16 text-center bg-gray-200 rounded-md'>
      <h3>Email</h3>
      <input name='email' type='email' className='w-3/4 p-2 mt-2 rounded-md' onChange={handleChange} />
      <h3 className='pt-8'>Password</h3>
      <input name='password' type='password' className='w-3/4 p-2 mt-2 rounded-md' onChange={handleChange} />
      <button className='w-3/4 p-3 mt-10 bg-gray-600 rounded-md'>Sign In</button>
    </form>
  );
}

export default LoginForm;