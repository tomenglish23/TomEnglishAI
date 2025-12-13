import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TEAIVideoMaker() {

  const leftCellStyle  = { verticalAlign: 'top', padding: '10px 0px 0px 0px', width: '50%' };
  const rightCellStyle = { verticalAlign: 'top', padding: '10px 0px 0px 20px' };
  const videoStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };
  const indent         = { paddingLeft: '27px' };

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
                          <p>Tom English AI created the TEAIVideoMaker in 2025.</p>

                          <div style={{ height: '18px' }} />
                          <p>The process can start in one of two ways:</p>

                          <p style={{paddingTop: '4px', fontSize: '20px', color: '#1234c7' }}><b>1. Create a list of talking points</b></p>
                          <p style={indent}>ChatGPT creates great talking points!</p>
                          <p style={indent}>Tell it the topic, number of talking points and the maximum length.</p>
                          <p style={indent}>Use as is or as a starting point for the intended conversation.</p>

                          <p style={{paddingTop: '4px', fontSize: '20px', color: '#1234c7' }}><b>2. Gather content as talking points from a client website.</b></p>
                          <p style={indent}>Many webpages contain too much data and the HTTP process errors.</p>
                          <p style={indent}>When successful, results can be a good starting point to gather talking points.</p>
                          <p style={indent}>Then, the talking points can be culled for a more satisfying list.</p>

                          <div style={{ height: '18px' }} />
                          <p>TEAIVideoMaker does the rest with a caveat for images:</p>
                          <p style={indent}>The video maker can open browser tabs for to search for images 
                              and the user can download one image per talking point. 
                              <div style={{ height: '8px' }} />
                              Or the user can use pre-selected images. 
                              <div style={{ height: '8px' }} />
                              After the downloads, for easy reference, rename the images to start with 01, 02, etc. 
                              <div style={{ height: '8px' }} />
                              Copy the images into the project Image folder and TEAIVideoMaker will 
                              update the image list on the next run. 
                              <div style={{ height: '8px' }} /></p>
                           <p style={{paddingTop: '4px', fontSize: '20px', color: '#1234c7' }}><b>Voila! You have a new video!</b></p>
                      </td>
                    </tr>
                    <tr>
                      <td style={rightCellStyle}>
                        <center>
                          <video  width="630" height="400" controls style={videoStyle}>
                          <source src={process.env.PUBLIC_URL + "/Videos/TEAIChatbotLI01.mp4"} type="video/mp4" />
                          </video>
                        </center>
                      </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </main>
    </div>
  );
}