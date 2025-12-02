import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function FFmpegImagesAdd() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>FFmpeg Images - Add</h1>
                <p></p>
            </header>  
            <hr />          
            <h2>How to Overlay an Image on a Video Using FFmpeg</h2>
  <p>FFmpeg is a powerful command-line tool for working with multimedia files. <br />
  You can use it to overlay an image—like a logo or watermark—on top of a video. Here's how.</p>

  <h3>Basic Command</h3>
  <code>ffmpeg -i input.mp4 -i overlay.png -filter_complex "overlay=10:10" output.mp4</code>

  <p style={{marginTop:'10px', marginLeft:'20px'}}>
    <code>-i input.mp4</code> – your original video file<br />
    <code>-i overlay.png</code> – the image you want to place on the video<br />
    <code>-filter_complex "overlay=10:10"</code> – places the image at 10px from the top-left corner<br />
    <code>output.mp4</code> – the final rendered video with the overlay</p>

  <h3>Customizing Position</h3>
  <p>You can change the position of the overlay by modifying the coordinates in the <code>overlay=x:y</code> filter:</p>
  <p style={{marginTop:'10px', marginLeft:'20px'}}>
    <code>overlay=W-w-10:H-h-10</code> – bottom-right corner<br />
    <code>overlay=(W-w)/2:(H-h)/2</code> – centered<br />
    <code>overlay=0:H-h</code> – bottom-left corner
  </p>

  <h3>Tips</h3>
  <p>
  • Use PNG images with transparency to create non-obtrusive watermarks.<br />
  • Make sure the overlay image has a resolution that fits your video dimensions.<br />
  • Test small snippets first using <code>-t 5</code> to trim the input to 5 seconds.
  </p>

  <h3>Example with Bottom-Right Overlay</h3>
  <p>
    This command places the overlay 20px away from the bottom-right edge:</p>
    <p style={{marginTop:'10px', marginLeft:'20px'}}>
  <code>ffmpeg -i input.mp4 -i logo.png -filter_complex "overlay=W-w-20:H-h-20" output.mp4</code>
  </p>


<hr />          
<h2>How to Overlay an Image on a Video Using FFmpeg</h2>

<pre style={{fontSize: '0.9em'}}>
<p>&nbsp;</p>
Write-Host "===="<br />
Write-Host "==== Begin Test"<br />
Write-Host "===="<br />
<br />
$run_path = "C:\B\AIProjects\Video"<br />
$mp4_in   = "ImgStoryLine.mp4"    # Video: Images  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Created prior with Clipchamp)<br />
$ass_in   = "HowToStoryLine.ass"  # Captions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Edited prior)<br />
$mp4_mid  = "mid_a.mp4"           # Video: Images + Captions &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Created below)<br />
$mp3_in   = "ImgTTS.mp3"          # Audio: Captions -&gt; TTS &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Created prior)<br />
$mp4_out  = "outc.mp4"            # Video: Images + Captions + TTS &nbsp;(Created below)<br />
$mp4_jpgs = "outJpgs_2.mp4"       # Video: Jpgs &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Created below)<br />
<br />
# Need: input the image files in place of ImgStoryLine.mp4<br />
# Need: Soundtrack?<br />
<br />
cd $run_path<br />
Write-Host "===="<br />
Write-Host "Path: $run_path"<br />
Write-Host "===="<br />
<br />
Write-Host "===="<br />
Write-Host "STEP 1: Create an mp4 from Images"<br />
Write-Host "===="<br />
<code>ffmpeg -r 1 -i AllPngs\out%0d.jpg -c:v libx264 -pix_fmt yuv420p $mp4_jpgs</code><br /><br />
Write-Host "===="<br />
Write-Host "STEP 2: Add Captions: Specified in the .ass file<br />
Write-Host "===="<br />
# <code>ffmpeg -i $mp4_jpgs -vf "ass=$ass_in" -c:a copy $mp4_mid</code><br /><br />
# PROBLEM: Either the number of jpgs is wrong or the rate is wrong.<br />
<br />
<code>ffmpeg -i $mp4_in -vf "ass=$ass_in" -c:a copy $mp4_mid</code><br /><br />
Write-Host "===="<br />
Write-Host "STEP 3: Add Audio: Ceated from a separate TTS program<br />
Write-Host "===="<br />
<code>ffmpeg -i $mp4_mid -i $mp3_in -c:v copy -c:a aac -map 0:v:0 -map 1:a:0 $mp4_out</code><br />
<span>&nbsp;</span>
</pre>


<hr />          
<h3>HowToStoryLine.ass</h3>

<pre style={{fontSize: '0.8em'}}>
<span style={{ display: "inline-block", width: "6px" }}></span>
; Filename:    CapCutFirstAuto\\250622_Clipchamp\\HowToStoryLine.ass <br />
; Apply to:    CapCutFirstAuto\\250622_Clipchamp\\250622Clipchamp.mp4<br />
; .ass:        Advanced SubStation Alpha. Subtitles file created w/Aegisub.<br />
; Aegisub:     X-platf app to gen custom subtitles.<br />
; ffmpeg docs: http://www.tcax.org/docs/ass-specs.htm<br />
<br />
[Script Info]<br />
ScriptType: v4.00+<br />
PlayResX: 384               ;PlayResY: Screen height<br />
PlayResY: 288               ;PlayResX: Screen width<br />
ScaledBorderAndShadow: yes<br />
YCbCr Matrix: None<br />
<br />
[V4+ Styles]<br />
Format: Name,Fontname,Fontsize, PrimaryColour,SecondaryColour,OutlineColour,BackColour, Bold, <br />
ScaleX,ScaleY, Spacing,BorderStyle,Outline, Alignment,MarginL MarginR,MarginV, Encoding<br />
Style: Default,Segoe UI,10, &H0,&H0,&H0FFFFC5,&H0, 0, 100,100, 1,3,1, 8,10,10,0, 1<br />
<br />
[Events]<br />
Format: Layer, Start, End, Style, MarginL,MarginR,MarginV, Effect, Text<br />
Dialogue: 0, 0:00:00.00, 0:00:07.00, Default, 0,0,60, ,How to Create a Storyline<br />
Dialogue: 0, 0:00:07.00, 0:00:14.00, Default, 0,0,60, ,Use ChatGPT \N to find video editing tools.<br />
Dialogue: 0, 0:00:14.00, 0:00:21.00, Default, 0,0,60, ,Open Clipchamp. \N Create a project \N and load the images.<br />
Dialogue: 0, 0:00:21.00, 0:00:28.00, Default, 0,0,60, ,In Clipchamp, add images timed \N to match a voice narration.<br />
Dialogue: 0, 0:00:28.00, 0:00:35.00, Default, 0,0,60, ,In Clipchamp, export an mp4 \N containing the images.<br />
Dialogue: 0, 0:00:35.00, 0:00:42.00, Default, 0,0,60, ,Create a .ass file. \N Add captions timed to match \N the .mp4 image timings.<br />
Dialogue: 0, 0:00:42.00, 0:00:49.00, Default, 0,0,60, ,Run ffmpeg. \N Input the captions file \N and create an .mp4 \N with images and captions.<br />
Dialogue: 0, 0:00:49.00, 0:00:56.00, Default, 0,0,60, ,Run the Text-to-Speech app \N to create a voice track \N for each caption.<br />
Dialogue: 0, 0:00:56.00, 0:01:05.00, Default, 0,0,60, ,Run ffmpeg. \N Input the mp4 & voice tracks \N and create a final .mp4 \N with captions & voice.<br />
Dialogue: 0, 0:01:05.00, 0:01:12.00, Default, 0,0,60, ,Use any video player \N to play the .mp4.<br />
</pre>

            <main>
            </main>
        </div>
    )
}
