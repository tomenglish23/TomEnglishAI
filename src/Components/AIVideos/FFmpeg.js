import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function FFmpeg() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>FFmpeg</h1>
                <p>ffprobe</p>
                <p>https://www.youtube.com/watch?v=26Mayv5JPz0&t=52s</p>
            </header>            
            <main>
            <p></p>
                <pre style={{fontSize: '0.9em'}}>
<b>FFmpeg</b><br/>
<br/>
Create videos from inputs [images, audio, other video files] <br/>
<span class="tab" />•	Combine images w/ a specified framerate <br/>
<span class="tab" />•	Concatenate video clips <br/>
<span class="tab" />•	Encode video from scratch using virtual inputs <br/>
<br/>
<b>General tips</b>:<br/>
Install:&nbsp;&nbsp;&nbsp;&nbsp;Download FFmpeg from a trusted source like gyan.dev. <br/>
Env vars:&nbsp;&nbsp;&nbsp;Add the FFmpeg directory to your system's PATH for easier access. <br/>
Docs:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Refer to the FFmpeg documentation for detailed info on all available options. <br/>
Experiment:&nbsp;FFmpeg offers numerous customization options. Experiment for desired results. <br/>
<br/>
<br/>

<center>
<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/26Mayv5JPz0"
  title="FFmpeg in 100 Seconds from Fireship"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen
  style={{ display: 'block', margin: 0 }}
></iframe>
<br/>
Tutorial: <a href="https://www.youtube.com/watch?v=26Mayv5JPz0" target="blank">FFmpeg in 100 Seconds from Fireship</a>
</center>

<br/>
<br/>
<b>VIDEO CREATION:</b><br/>
<br/>
<b>Create a video - from scratch:</b><br/>
Virtual inputs:	FFmpeg can generate test videos w/ [colors, resolutions & durations].<br/>
<span class="tab" /><span style={{backgroundColor:'bisque'}}>ffmpeg -f lavfi -i color=c=blue:s=1280x720:d=5 -r 25 outNew.mp4</span><br/>
<br/>
<b>Create a video - from images:</b><br/>
Sequential images:	If you have images in a sequence [image1.ext, image2.ext, ...], <br/>
<span class="tab" />file	[-f image2] <br/>
<span class="tab" />frame rate	[-r or -framerate]<br/>
<span class="tab" /><span style={{backgroundColor:'bisque'}}>ffmpeg -framerate 24 -i out%0d.png -c:v libx264 -pix_fmt yuv420p out.mp4</span><br/>
<span class="tab" /><span style={{backgroundColor:'bisque'}}>ffmpeg -framerate 24 -i out1.png -i out2.png -i out3.png -c:v libx264 -pix_fmt yuv420p out.mp4</span><br/> 
<span class="tab" />&nbsp;&nbsp;where: [out1.png, ...] can be derived from the following command<br/>
<span class="tab" /><u>Needed</u>: ffmpeg command to extact images from a video.<br/>
<br/>
<b>Create a video - from an image & audio:</b><br/>
<span style={{backgroundColor:'bisque'}}>ffmpeg -loop 1 -i image.jpg -i audio.mp3 -c:v libx264 -tune stillimage -c:a copy -shortest out.mp4</span><br/>
<span class="tab" />-loop 1: loop an image indefinitely. <br/>
<br/>
<b>Create a video – by concatenating videos:</b><br/>
<span style={{backgroundColor:'bisque'}}>ffmpeg -f concat -safe 0 -i videos.txt -c copy out.mp4</span><br/>
<span class="tab" />videos.txt:	List video files in the appearance order, 1 file/line, using file ‘filename’.<br/>
<span class="tab" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file ‘video1.mp4’<br/>
<span class="tab" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;file ‘video2.mp4’<br/>
<span class="tab" />-f concat videos.txt is the concat demuxer<br/>
<span class="tab" />-c copy to concat w/o re-encoding <br/>
<br/>
<b>Create a video – by converting from another format:</b><br/>
<span style={{backgroundColor:'bisque'}}>ffmpeg -i input.avi output.mp4</span><br/>
<br/>
Specify codecs:  <br/>
<span style={{backgroundColor:'bisque'}}>ffmpeg -i input.mp4 -c:v libx264 -c:a aac output.mov</span><br/>
<span class="tab" />If needed:<br/>
<span class="tab" />&nbsp;&nbsp;-c:v for video codec<br/>
<span class="tab" />&nbsp;&nbsp;-c:a for audio codec<br/>
<br/>
<br/>
<b>VIDEO EXTRACTION:</b><br/>
<br/>
TBD<br/>

                </pre>
            </main>
        </div>
    )
}
