import React/* , { useRef, useEffect } */ from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import video from '../../Videos/OutCapCut.mp4'

export default function AIVideoCapCut() {
    return (
        <div style={{ opacity: 1.0 }}>
            <TopBar />
            <header>
                <h1>AI Videos - CapCut</h1>
            </header>
            <main>

                <table>
                    <tbody>
                        <tr>
                            <td width="60%">
                                <p>&nbsp;</p>
                                <p>CapCut is a video editing tool for creating AI-generated videos.</p>
                                <p>It is available at <a href="https://www.capcut.com/">https://www.capcut.com/</a></p>
                                <p>CapCut can create videos from text, images and audio.</p>
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
    );
}