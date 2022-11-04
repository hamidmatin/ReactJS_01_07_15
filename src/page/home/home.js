import React from 'react';
import cellPhoneImage from './cellphone.jpg'

const HomePage = () => {
  return (
    <div style={{backgroundImage: 'url(/images/bg.jfif)'}}>
      <h2>Welcome to React Case Study</h2>
      <p>
        <img src={cellPhoneImage} alt='cell phone' style={{width: '20%'}}/>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto vitae maxime atque ullam ab
        distinctio blanditiis debitis reprehenderit vero voluptatum, nobis molestiae animi, officiis
        id incidunt laborum? Tempora, aperiam tempore.
        <br />
        <img src="/images/coffeehouse2.jpg" alt="" style={{width: '20%'}}/>
      </p>
    </div>
  );
};

export default HomePage;
