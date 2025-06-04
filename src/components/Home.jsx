import React, { useState } from 'react'

const Home = () => {
    const {title, setTitle} = useState('');
    const {value, setValue} = useState('');

  return (
    <div>
        <input
        className='p-2 rounded-2xl border-2 border-black mt-4'
        type='text'
        placeholder='Enter title here'
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        
        />
        <button>
            Create My paste
        </button>
    </div>
  )
}

export default Home