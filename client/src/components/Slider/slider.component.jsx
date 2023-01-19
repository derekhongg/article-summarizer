import React from "react";
import './slider.css'
import background from '../../images/logos.png'

export default function Slider() {
  return (
    <div class="scrolling-image-container">
      <h1>Trusted By</h1>
      <div class="scrolling-image" style={{ backgroundImage: `url(${background})` }}></div>
    </div>
  );
}
