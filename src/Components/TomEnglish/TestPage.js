import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TestPage() {

    return (
<div>
    <TopBar/>
    <div className='homeTable'>
        <div style={{opacity: 1.0 }}>
            <header>
                <h1>Welcome to My Stylish Webpage</h1>
                <p>Your one-stop destination for stunning designs!</p>
            </header>
            
            <main>
                <section class="highlight-box">
                    <h2>About Us</h2>
                    <p>We are passionate about web design and strive to create beautiful and functional websites.</p>
                </section>
                
                <section class="highlight-box">
                    <h2>Services</h2>
                    <p>We offer a variety of web design services, including UI/UX design, 
                    responsive design, and branding.</p>
                </section>
                
                <section class="highlight-box">
                    <h2>Contact Us</h2>
                    <p>If you're interested in our services or have any questions, feel free to reach out!</p>
                </section>
            </main>
            
            <footer>
                <p>&copy; 2023 Stylish Webpage. All rights reserved.</p>
            </footer>
            </div>
        </div>
    </div>
    )
}
