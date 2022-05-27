import React from 'react';
import Service from '../Service/Service';
import Banner from './Banner/Banner';
import Info from './Info/Info';

const Home = () => {
    return (
        <div>
          <Banner></Banner>
          <Info></Info> 
          <Service></Service> 
        </div>
    );
};

export default Home;