import { useState } from 'react';
import './App.css';

const images = [
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
];

function App() {
  const [currentInd, setCurrentInd] = useState(0);

  const handleClick = (val) => {
    if(val == 'prev'){
      setCurrentInd(currentInd === 0 ? images.length - 1 : currentInd - 1);
    }else if(val == 'next'){
      setCurrentInd(currentInd === images.length - 1 ? 0 : currentInd + 1);
    }
  }

  return (
    <div className="App">
      <div className="container">
        <div className="arrow leftArrow" onClick={() => handleClick('prev')}>Prev</div>
        <div className="imgsBx">
          <div className='img'>
            {images.map((img, ind) => 
              currentInd === ind && (
                <img key={ind} src={img} />
              )
            )}
          </div>
        </div>
        <div className="arrow righttArrow" onClick={() => handleClick('next')}>Next</div>
      </div>
    </div>
  );
}

export default App;
