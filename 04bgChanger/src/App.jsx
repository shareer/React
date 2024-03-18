import { useState } from 'react'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState('olive');

  const colorArray = ["red", "green", "blue", "purple", "orange", "yellow", "gray", "pink", "cyan", "orchid", "violet", "indigo", "magenta"];

  const colorData =[
    { "colorName": "red", "colorQuote": "Red is the color of fire and blood." },
    { "colorName": "green", "colorQuote": "Green is the color of nature and life." },
    { "colorName": "blue", "colorQuote": "Blue is the color of the sky and sea." },
    { "colorName": "purple", "colorQuote": "Purple represents royalty, luxury, and ambition." },
    { "colorName": "orange", "colorQuote": "Orange is the color of joy, creativity, and enthusiasm." },
    { "colorName": "yellow", "colorQuote": "Yellow is the color of sunshine and happiness." },
    { "colorName": "gray", "colorQuote": "Gray is the color of neutrality and balance." },
    { "colorName": "pink", "colorQuote": "Pink represents femininity, romance, and sweetness." },
    { "colorName": "cyan", "colorQuote": "Cyan is a calming color that promotes relaxation." },
    { "colorName": "orchid", "colorQuote": "Orchid is a vibrant and exotic color." },
    { "colorName": "violet", "colorQuote": "Violet is associated with spirituality and imagination." },
    { "colorName": "indigo", "colorQuote": "Indigo represents intuition and perception." },
    { "colorName": "magenta", "colorQuote": "Magenta is a bold and energetic color." }
  ]
  
  return (
    <>
    {bgColor !== 'olive' && (
        <p className='text-lg mb-10' style={{ color: bgColor }}>
          {colorData.find(color => color.colorName === bgColor)?.colorQuote}
        </p>
      )}
      <div className='w-full h-screen duration-500 rounded-md' style={{ background: bgColor }}>
        
      </div>
      <div className='w-half'>
        {colorData.map((color) => (
          <><button
            key={color.colorName}
            className={`bg-${color.colorName}-500 text-black px-4 py-2 rounded-lg m-2`}
            style={{ backgroundColor: color.colorName }} // Dynamically set the background color using inline styles
            onClick={()=>setBgColor(color.colorName)}
          >
            {color.colorName}
          </button>
          </>
        ))}
      </div>
    </>
  );
}

export default App
