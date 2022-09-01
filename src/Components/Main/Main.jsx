import React ,{ useState } from 'react';

import "./Main.css";

const Main = () => {
  const [number, setNumber] = useState(null)
  const [dogImage, setImage] = useState('');

  async function fetchImage() {
    if (!number) {
      alert('Please enter the number first then hit the button')
      return
    }

    if (number < 100 || number > 599) {
      alert('Not a valid HTTP code')
      return
    }

    const response = await fetch(`https://http.dog/${number}.jpg`).catch(() => null)
    if (!response) {
      alert('Something went wrong, please check the number provided')
      return
    }

    const data = await response.blob();
    setImage(URL.createObjectURL(data))
  };
 
    return(
        <div className="App">
      <div className="container">
        <header className="header">Get Your Dog

      
      <a href='https://twitter.com/dog_feelings' target='_blank' >
  <button className="button-3" role="button">Follow US</button>
     </a>



        </header>  
        

        <p>Dogs for every HyperText Transfer Protocol response status code.</p>
        <div className='searchBox'>
          <div>
          <input
              className='searchInput'
              placeholder="               ENTER  YOUR  NUMBER  HERE"
              onChange={(event) => setNumber(event.target.value)}
              >
            </input>
           { dogImage.length > 0 && <image src={dogImage}></image> }
          </div>
          
        </div>
      </div>
    </div>
    )
};
export default Main;
