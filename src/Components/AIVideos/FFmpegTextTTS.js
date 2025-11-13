import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import video from '../../Videos/ImgTTS.mp4'

export default function FFmpegTextTTS() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>FFmpeg Text - TTS</h1>
                <p></p>
            </header>            
            <main>

                <table>
                    <tbody>
<tr>
    <td>
        <p>&nbsp;</p>
        <p>This component displays a video created using 
            FFmpeg Text-to-Speech (TTS) functionality.</p>
        <p>The video is displayed in a centered video player with controls.</p>
        <p>&nbsp;</p>
        <p>The ffmpeg command is:</p>
        <code>ffmpeg -i ImgCaptions.mp4 -i ImgTTS.mp3 -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 ImgTTS.mp4</code>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><b>Text-to-Speech</b></p>
        <p>ImgTTS.mp3 was created as follows to obtain the speech from the text in the captions file:</p>
        <code>Website is TBD</code>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
        <p><b>Images</b></p>
        <p>The images were added to the video as follows:</p>
        <code>Need the ffmpeg statement.</code>
        <p>&nbsp;</p>
        <p>&nbsp;</p>
    </td>
</tr>
<tr>
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
