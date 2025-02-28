import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingyNoBG.png';
import MLExample1   from '../../Images/MLExample1.jpg';

export default function AIStocksMachineLearning() {

    //const pages = require.context('./', true, /\.js$/).keys().map(file => file.replace('./', '').replace('.js', ''));

    return (
        <div style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: '16%', 
                      backgroundPosition: 'right top', backgroundRepeat: "no-repeat" }}>
            <div style={{opacity: 1.0 }}>
                <TopBar/>
                <div className='homeTable'>
                    <h1>AI Machine Learning: &nbsp;&nbsp;1. Train the Model &nbsp;2. Make Predictions</h1>
                    <p>&nbsp;</p>
                    <p>Example – This chart pattern is a frequent occurrence across all stocks: </p>
                    <p>&nbsp;</p>
                   
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <img src={MLExample1} alt="24 hours of SMR stock prices: 4th 8AM til 5th 8AM." border="0" width="400" height="500" /><br />
                    </p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <strong>SMR stock prices: Feb 04 8AM - Feb 05 8AM</strong>
                    </p>
                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p>Goal: &nbsp;Create an algorithm to find many occurrences in the database.<br /> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Train the <strong>Model</strong>.<br /> 
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Use the <strong>Model</strong> to <strong>Predict</strong> future occurrences.
                    </p>
                    <p>&nbsp;</p>
                    <p>Linear Regression in Machine Learning is described below.</p>
                    <p>&nbsp;</p>
                    <p>Add <strong>Features</strong> to the <strong>Model</strong> to increase the <strong>Model</strong>'s performance.</p>
                    <p>&nbsp;</p>
                    <p><strong>Features</strong> can include:</p>
                    <p>&nbsp;&nbsp;&nbsp;<strong>Bollinger Band</strong>:</p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Did the price rise above or below the bollinger band?<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- What percentage of the time was price above/below the bollinger center line?<br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Where & when did the bollinder band narrow?
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;<strong>MACD, RSI &amp; other Indicators</strong>:</p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Using different aspects of the MACD, RSI, etc.<br />
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;<strong>Price Action</strong>:</p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Was the price trend line increasing or decreasing?<br />
                    </p>
                    <p>&nbsp;&nbsp;&nbsp;<strong>External Events</strong>:</p>
                    <p>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;- Major Index Actions
                    </p>
                    
                    <p>&nbsp;</p>
                    <p>Record <strong>Features</strong> in the database and relate them to each stock's timeline.<br />
                    Then, <strong>Features</strong> are easily added to Machine Learning <strong>Models</strong>.</p>
                    <p>&nbsp;</p>

                    <h2>Train the model</h2>
                    <h3>Model Data: Selection</h3>
                    <p>
Description:<br />
Target: 	Sudden Price Changes<br />
Set Percent Used<br />
Percentage:	Use 70% of the data. <br />
Label:  Sudden Price Changes<br />
Label:	Record sudden price changes. <br />
Leading Patterns: Pre-Price Change <br />
Analyse:	Find multiple patterns<br />
</p>
<h3>Label:  Select Target Pattern (TP)</h3>
<p>
Target pattern (TP)<br />
TP Selection<br />
TPEntity:<br />
   Attributes:	List of similarities <br />
   Create:	Entity: Attributes ..<br />
LstTPEntity<br />
   100s of Rows:	Record 100s of occurrences <br />
                    <h3>Display Styles</h3>
- Scatter Graph : Display 100’s or 1000’s of dots on an XY axis.<br />
</p>
                    <h3>Training Methods</h3>
                    <h4>ML Linear Regression (LR) algorithms:</h4>
                    <p>&nbsp;</p>

                    <h2>Run Prediction tests:</h2>
<p>
Use the algorightms. The highest test score becomes a Prediction algorithm. <br />
Continuously, run it looking for matches:<br /><br />
Watch for the sudden increase in price.<br />
&nbsp;&nbsp;&nbsp;Buy the stock. <br /><br />
Machine Learning Model 2: When to Sell:<br />
&nbsp;&nbsp;&nbsp;Show when the price rise energy dissipates.<br />
&nbsp;&nbsp;&nbsp;Set a Sell alarm.<br />
</p>
      <h3>Predictions:</h3>
      <p>
Run on the 30% remaining data. <br />
&nbsp;&nbsp;&nbsp;Compare success rates & select the best algorithm.<br />
&nbsp;&nbsp;&nbsp;Continuously, run it for dozens of stocks. <br />

                    <h3>Profit/Risk ratio: ~3:1</h3>
Buy  $1000 of a stock. If the Prediction algorithm works at 60%: <br />
&nbsp;&nbsp;&nbsp;4 times in 10, Sell  at a small profit/loss.<br />
&nbsp;&nbsp;&nbsp;6 times in 10, Sell  at a large profit. 

                    <h3>Example Usage:</h3>
Buys:	$1000<br />
Shares:	$1000/23<br />
10 times:	Buy  $1000 of stock.<br /> 
Profit:	$2.50 x <br />
Profit:Loss Ratio	6:4  or  $230:$20<br />
	3:2  or  $115:$1000	Profits:	 6: 	Total Profit: $250<br /> 
Losses:	 4: 	Total Loss:   $ 20 <br />
Profit:	$230 = $250-$20<br />
Average Profit:	$230 profit per $1000 Buy = 23%<br />
Risk:Reward Ratio	1000:230<br /><br />
These metrics illustrate the effectiveness of the current trading strategy.<br /> 
The profit & loss figures indicate a strong performance with a favorable risk-to-reward ratio, 
offering promising potential for returns.<br /> 
Analyze & compare across time frames (monthly, weekly, daily) 
for further insights for informed investment decisions.
</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p>&nbsp;</p>

                </div>
            </div>
        </div>
    )
}
