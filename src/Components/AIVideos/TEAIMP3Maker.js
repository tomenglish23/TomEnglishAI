import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function TEAIMP3Maker() {

  const leftCellStyle  = { verticalAlign: 'top', padding: '10px 0px 0px 0px', width: '50%' };
  const rightCellStyle = { verticalAlign: 'top', padding: '10px 0px 0px 20px' };
  const audioStyle     = { verticalAlign: 'top', display: 'block', margin: 0 };
  const indent         = { paddingLeft: '27px' };
  const padTop         = { paddingTop:  '4px' };

  return (
    <div style={{ opacity: 1 }}>
      <TopBar />
      <header>
        <h1>AI Audio – TEAIMP3Maker</h1>
      </header>
      <main>
        <div style={{ display: 'table', width: '100%' }}>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <tbody>
                  <tr>
                    <td style={leftCellStyle}>
                        <p>Tom English AI created the TEAIMP3Maker in 2025 to make .mp3's on the fly.</p>
                        <p>Occasionally, a .mp3 file needs to be updated for a video</p>
                        <div style={{ height: '44px' }} />
                        <p style={padTop}><b>Use the TEAIMP3Maker</b></p>
                        <p style={indent}>Specify the talking point just like you do when creating a video.</p>
                        <p style={indent}>Specify the asset name and the .mp3 is placed in the Audio folder for that asset.</p>
                    </td>
                    </tr>
                    <tr>
                      <td style={rightCellStyle}>
                          <audio controls style={audioStyle}>
                              <source src={process.env.PUBLIC_URL + "/Audio/TPt_01_TTS.mp3"} type="audio/mpeg" />
                              Your browser does not support the audio element.
                          </audio>
                      </td>
                    </tr>
                    <tr>
                      <td style={leftCellStyle}>
                          <div style={{ height: '44px' }} />
                          <p style={padTop}><b>Occasionally, a slower .mp3 is required.</b></p>
                          <p style={indent}>Here, the same .mp3 is created at 85% speed.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style={rightCellStyle}>
                          <audio controls style={audioStyle}>
                              <source src={process.env.PUBLIC_URL + "/Audio/SlowTPt_01_TTS.mp3"} type="audio/mpeg" />
                              Your browser does not support the audio element.
                          </audio>
                      </td>
                    </tr>
                    <tr>
                      <td style={leftCellStyle}>
                          <div style={{ height: '44px' }} />
                          <p style={padTop}><b>Occasionally, a faster .mp3 is required.</b></p>
                          <p style={indent}>Here, the same .mp3 is created at 115% speed.</p>
                      </td>
                    </tr>
                    <tr>
                      <td style={rightCellStyle}>
                          <audio controls style={audioStyle}>
                              <source src={process.env.PUBLIC_URL + "/Audio/FastTPt_01_TTS.mp3"} type="audio/mpeg" />
                              Your browser does not support the audio element.
                          </audio>
                      </td>
                    </tr>
                  </tbody>
            </table>
        </div>
      </main>
    </div>
  );
}