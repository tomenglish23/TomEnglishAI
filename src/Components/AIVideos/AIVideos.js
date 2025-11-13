import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AIVideos() {
      
    const SP = "\u00A0"; // Non-breaking space

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Videos</h1>
            </header>            
            <main>
            
            <h2>ATITUBO</h2>

            <table style={{width:'90%'}}>
                    <colgroup>
                        <col span="1" style={{width:'20%'}} />
                        <col />
                    </colgroup>
                    <tbody>
                        <tr>
                            <td><b><a target="blank" href="https://aitubo.ai/home/">AITUBO AI</a>{SP} $13/mo</b></td>
                            <td><b>AITUBO AI has realistic images and videos. Click and see!!!</b><br />
                            I played with it for minute &amp; the 30 FREE tokens expired.<br />
                            Basic plan: $13/mo for 8000 tokens = 2.5 hrs/mo.<br />
                            Learning it would have to span over a few months.<br />
                            2.5 hrs/mo might suffice once you are good at it.</td>
                        </tr>
                        <tr>
                            <td>{SP}{SP}{SP}<a target="blank" href="https://aitubo.ai/apps/ai-image-generator/">
                            <b>Image Generator</b></a></td><td>{SP}</td>
                        </tr>
                        <tr>
                            <td>{SP}{SP}{SP}<a target="blank" href="https://aitubo.ai/apps/ai-video-generator/">
                            <b>Video Generator</b></a></td><td>{SP}</td>
                        </tr>
                        <tr>
                            <td>{SP}{SP}{SP}<a target="blank" href="https://aitubo.ai/apps/ai-music-generator/">
                            <b>Music Generator</b></a></td><td>{SP}</td>
                        </tr>
                        <tr>
                            <td>{SP}{SP}{SP}<a target="blank" href="https://aitubo.ai/apps/ai-dance-generator/">
                            <b>Dance Generator</b></a></td><td>{SP}</td>
                        </tr>
                        <tr>
                            <td>{SP}{SP}{SP}<a target="blank" href="https://aitubo.ai/apps/image-face-swap/">
                            <b>Image Face Swap</b></a></td><td>{SP}</td>
                        </tr>
                        <tr>
                            <td>{SP}{SP}{SP}<a target="blank" href="https://aitubo.ai/apps/video-face-swap/">
                            <b>Video Face Swap</b></a></td><td>{SP}</td>
                        </tr>
 
                    </tbody>
                </table>

           
                <h2>More to come</h2>

            </main>
        </div>
    )
}
