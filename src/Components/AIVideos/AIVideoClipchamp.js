import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import video from '../../Videos/OutClipchamp.mp4'

export default function AIVideoClipchamp() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Video - Clipchamp</h1>
                <p></p>
            </header>            
            <main>

                <table>
                    <tbody>
                        <tr>
                            <td width="60%">
                                <p>&nbsp;</p>
                                <p>Clipchamp is a video editing tool for creating AI-generated videos.</p>
                                <p>Clipchamp ships with Windows.</p>
                                <p>Clipchamp can create videos from text, images and audio.</p>
                                <p>It can also be used to create videos from other videos.</p>
                                </td>
                            <td>
                                <center><video width="350" height="500" controls >
                                    <source src={video} type="video/mp4"/>
                                </video></center>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <p>&nbsp;</p>
                <p>&nbsp;</p>
            </main>
        </div>
    )
}
