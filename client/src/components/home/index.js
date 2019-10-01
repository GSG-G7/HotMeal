import React from 'react';

import Slider from './slider/slider';
import './style.css';

export default () => (
  <div className="bage">
    <Slider />
    <div className="bage__buttons">
      <div>
        <input className="bage__buttons_button" type="button" value="menu" />
      </div>
      <div>
        <input className="bage__buttons_button" type="button" value="menu" />
      </div>
      <div>
        <input className="bage__buttons_button" type="button" value="menu" />
      </div>
    </div>
  </div>
);
