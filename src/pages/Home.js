import React from 'react';
import FadeIn from 'react-fade-in';

function Home() {
    return (
        <FadeIn>
            <div className="container">
                <img src="./home.jpg" class="img-fluid" alt="Cyber World"></img>
            </div>
        </FadeIn>
    )
}

export default Home;