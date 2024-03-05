import React from 'react'

const page = () => {
  return (
    <main>
      <h2 className="text-4xl uppercase font-semibold mb-8">Page 01</h2>
      <p className='mb-4'>Simple NextJs authentication using JWT</p>
      <p>Protected page route is <span className='font-bold'>`/profile`</span>, which can only be accessed after login.</p>
    </main>
  )
}

export default page