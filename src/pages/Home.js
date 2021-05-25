import React from 'react';
import FadeIn from 'react-fade-in';

function Home() {
    return (
        <FadeIn>
            <img src={process.env.PUBLIC_URL + "/home.jpg"} class="img-fluid" alt="Cyber World"></img>
        </FadeIn>
    )
}

export default Home;