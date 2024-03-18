import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [passwordLength, setPasswordLength] = useState(8);
  const [isCharacterAllowed, setIsCharacterAllowed] = useState(false);
  const [isNumberAllowed, setIsNumberAllowed] = useState(false);
  const [password, setPassword] = useState('');

  const passwordRef = useRef();

  useEffect(()=>{
    passwordGenerator();
  },[passwordLength, isCharacterAllowed, isNumberAllowed])

  const passwordGenerator = useCallback(() => {
    console.log('passwordGenerator');
    let newPassword = ""
    let passwordTexts = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (isNumberAllowed) passwordTexts += '0123456789';
    if (isCharacterAllowed) passwordTexts += '!@#$%^&*()-_=+[]{}ljj';
    for (let i = 1; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * passwordTexts.length + 1);
      newPassword += passwordTexts.charAt(randomIndex);
    }
    setPassword(newPassword);
  }, [passwordLength, isNumberAllowed, isCharacterAllowed])

  const copyPasswordToClipBoard = () => {
     window.navigator.clipboard.writeText(password);
     passwordRef.current?.select();
  }

  return (
    <div className='w-full max-w-lg mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className=' Itext-white text-center my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='outline-nopne w-full py-1 px-3'
          readOnly
          placeholder='Password'
          ref= {passwordRef}
        />
        <button
          className='outline-none bg-blue-700 text-white px-3 jpy-0.5 shrink-0'
          onClick={copyPasswordToClipBoard}
          >
          Copy
        </button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input
            type='range'
            className='cursor-pointer'
            value={passwordLength}
            max={30}
            onChange={(e) => setPasswordLength(e.target.value)}
          />
          <label htmlFor='length'>Length: {passwordLength}</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            className='cursor-pointer'
            defaultChecked={isNumberAllowed}
            onChange={() => setIsNumberAllowed((prev) => !prev)}
          />
          <label htmlFor='number'>Number</label>
        </div>

        <div className='flex items-center gap-x-1'>
          <input
            type='checkbox'
            className='cursor-pointer'
            defaultChecked={isCharacterAllowed}
            onChange={() => setIsCharacterAllowed((prev) => !prev)}
          />
          <label htmlFor='character'>Character</label>
        </div>
      </div>
    </div>
  )
}

export default App
