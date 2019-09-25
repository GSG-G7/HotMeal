import React from 'react';
import './style.css';

export default () => (
  <div className="slide_container">
    <div id="imgOne" className="mySlides fade">
      <img
        src="https://cdn.pixabay.com/photo/2019/02/25/17/51/kittens-4020199_960_720.jpg"
        className="img"
        alt="s"
      />
      <div className="textCap">
        <p>img one</p>
      </div>
    </div>
    <div className="mySlides fade">
      <img
        className="img"
        alt="f"
        src="https://cdn.pixabay.com/photo/2018/11/17/16/33/forest-3821416_960_720.jpg"
      />
      <div className="textCap">
        <p>building</p>
      </div>
    </div>
    <div className="mySlides fade">
      <img
        className="img"
        alt="f"
        src="https://cdn.pixabay.com/photo/2019/05/04/22/41/atomium-4179270_960_720.jpg"
      />
      <div className="textCap">
        <p>cats</p>
      </div>
    </div>
    <button type="submit" className="backDrowing" onClick="plusSlide(-1)">
      &#10094;
    </button>
    <button type="submit" className="nextButton" onClick="plusSlide(+1)">
      &#10095;
    </button>

    <br />
  </div>
);
