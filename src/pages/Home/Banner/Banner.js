import React from 'react';
import './Banner.css'
import icon from '../../../assets/images/chair.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen">
  <div class="hero-content flex-col lg:flex-row-reverse banner-img">
    <img src={icon} />
    <div>
      <h1 class="text-5xl font-bold">Box Office News!</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary font-bold text-white bg-gradient-to-r from-secondary to-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;