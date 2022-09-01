import React ,{ useState } from 'react';
import "./Main.css";

const Main = () => {
  const [timeoutID, updateTimeoutID] = useState();
  

  const fetchData = async (searchString) => {
   
  }

  const onTextChange = (event) => {
    clearTimeout(timeoutID);
    //UpdateSearchQuery(event.target.value);
    const timeout = setTimeout(() => fetchData(event.target.value), 500);
    updateTimeoutID(timeout);
    
  };
    return(
        <div className="App">
      <div className="container">
        <header className="header">Get Your Dog</header>


        <p>Dogs for every HyperText Transfer Protocol response status code.</p>
        <div className='searchBox'>
          <div>
            <input
              className='searchInput'
              placeholder="               ENTER  YOUR  NUMBER  HERE"

              onChange={onTextChange}
              // value={}
              
              >
            </input>
            <image src=''></image>
          </div>
          
        </div>
      </div>
    </div>
    )
}
export default Main;
