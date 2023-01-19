import React from 'react';
import Header from '../../components/Header/header.component';
import Slider from '../../components/Slider/slider.component';
function Home() {
    return (
        <div style={{maxWidth: "100vw"}}>
        <Header/>
        <Slider />
        </div>
    )
}

export default Home;