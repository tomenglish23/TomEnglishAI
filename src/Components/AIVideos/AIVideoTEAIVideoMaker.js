import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import video from '../../Videos/Enterprise_Chatbots.mp4';

export default function AIVideoTEAIVideoMaker() {

  const leftCellStyle  = { verticalAlign: 'top', padding: '10px 0px 0px 0px', width: '66%' };
  const rightCellStyle = { verticalAlign: 'top', padding: '10px 0px 0px 20px' };
  const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };
  const indent         = { paddingLeft: '27px' };
  const padTop         = { paddingTop:  '4px' };

  return (
    <div style={{ opacity: 1 }}>
      <TopBar />
      <header>
        <h1>AI Videos – TEAIVideoMaker</h1>
      </header>
      <main>
        <div style={{ display: 'table', width: '100%' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                    <tr>
<td style={leftCellStyle}>
    <p>Tom English AI created TEAIVideoMaker in 2025.</p>
    <p>Version 1 allows us to make videos from Talking Points (TPs).</p>

    <div style={{ height: '18px' }} />
    <p>The process can start in one of two ways:</p>

    <p style={padTop}><b>1. Gather content as TPs from a client website.</b></p>
    <p style={indent}>Many webpages contain too much data and the HTTP process errors.</p>
    <p style={indent}>When successful, results can be a good starting point to gather TPs.</p>
    <p style={indent}>Then, the TPs can be culled for a more satisfying list.</p>

    <p style={padTop}><b>2. Create a TPs list</b></p>
    <p style={indent}>ChatGPT creates great TPs!</p>
    <p style={indent}>Tell it the topic, number of TPs and the maximum length.</p>
    <p style={indent}>Use as is or as a starting point for the intended conversation.</p>

    <div style={{ height: '18px' }} />
    <p>TEAIVideoMaker does the rest with a caveat for images:</p>
    <p style={indent}>It opens browser tabs for each TP with the TP as the search into Pexels.com which loads videos related to the TP. 
        <div style={{ height: '8px' }} />
        Then, the user reviews the image selection and downloads one image per TP. 
        <div style={{ height: '8px' }} />
        After the downloads, rename the videos to start with 01, 02, etc., for easy reference. 
        <div style={{ height: '8px' }} />
        Copy the images from your downloads folder into the project Image folder 
        and TEAIVideoMaker will update the image list on the next run. 
        <div style={{ height: '8px' }} /></p>
    <p>Voila! You have a new video!</p>
</td>

<td style={rightCellStyle}>
    <video width="300" height="222" controls style={videoStyle}>
    <source src={video} type="video/mp4" />
    </video>
</td>
                    </tr>
                </tbody>
            </table>
        </div>
      </main>
    </div>
  );
}