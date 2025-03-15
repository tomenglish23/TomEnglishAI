import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AIStocksPrimitiveAlgorithms() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>Primitive Algorithms</h1>
            </header>            
            <main>

<h2> MA's, Moving Averages relative to CandleSticks</h2>

<p> MAs give insight  into the trend's direction &amp; strength. </p>
<p> They are used in  conjunction with Cs to smooth out price data &amp; create
    a clearer picture of  market movements.  </p>
<p> Calculate the  average price over a specific period,.  </p>
<p> MAs identify  potential support &amp; resistance levels and trend reversals.  </p>
<p> There are two  primary types of moving averages: the SMA &amp; EMA.  </p>
<p> SMA:  All prices get the same weight. Closing prices averaged over a set period.  </p>
<p> EMA:  Recent prices get more weight. Makes it more responsive to new info.  </p>
<p> When analyzing candlestick patterns, MAs can provide additional
    confirmation or signal  potential shifts in market sentiment.<br />
    For instance:<br />
    &nbsp;&nbsp;&nbsp;A bullish crossover occurs when a shorter-term moving average crosses above
    a longer-term moving average,<br />
    &nbsp;&nbsp;&nbsp;suggesting a potential uptrend.<br />
    &nbsp;&nbsp;&nbsp;A bearish crossover happens when a shorter-term moving average crosses below
    a longer-term moving average,<br />
    &nbsp;&nbsp;&nbsp;indicating a possible downtrend. </p>
<p> Combining moving averages with candlestick patterns, such as the Spinning
    Top or the Shooting Star,<br /> 
    can enhance a trader's ability to make informed decisions. </p>
<p> EX: if a Bullish C  pattern forms above a key MA, it may signal a strong
    buy.  </p>
<p> if a Bearish pattern appears below a key MA,  it may indicate a good sell.  </p>
<p> The interplay  between MAs &amp; Cs provides a comprehensive view of market
    conditions.  </p>

<h3> Weighted Moving  Average (WMA) Formula </h3>
<p> The WMA gives an average of recent price data points with greater weight
    given to more recent points.  </p>
<p> Good for identifying trends &amp; reversals.  </p>
<p> Calculation: </p>
<p>   1: Assign weights:  Determine the weights for each data point in the period being considered.<br />
    More recent data points should have higher weights.<br />
    For example, if you are calculating a WMA for a 5-day period,<br />
    you might assign weights of 5, 4, 3, 2, and 1, with 5 being the most recent day.  </p>
<p>   2: Multiply the data points by their weights - Multiply each closing
    price by its assigned weight.<br />
    For instance, if the  closing prices are 20,
    21, 22, 23, and 24, you would calculate the products as  follows:<br />
    24*5, 23*4, 22*3, 21*2, and 20*1.  </p>
<ul>
    <li> 3: Sum the products:  Add the weighted values calculated in step 2.  </li>
</ul>
<p> Using  the previous example: (24*5) + (23*4) + (22*3) + (21*2) + (20*1).  </p>
<ul>
    <li> 4: Sum the weights:  Add the weights assigned in step 1.  </li>
</ul>
<p> In  our 5-day example, it would be 5 + 4 + 3 + 2 + 1.  </p>
<p>   5: Divide the sum of the products by the sum of  the weights </p>
<p> Divide  the step 3 result by the step 4 result.  </p>
<p> For  our example: [(24*5) + (23*4) + (22*3) + (21*2) + (20*1)] / (5 + 4 + 3 + 2 +  1).  </p>
<p> WMA = (P1*W1 + P2*W2 + P3*W3 + ... + Pn*Wn)  / (W1 + W2 + W3 + ... + Wn) </p>
<p> P represents the price </p>
<p> W represents the weight assigned to that  price.  </p>
<p> Use the WMA to understand market trends.  </p>
<p> It gives a clearer picture of recent  movements by emphasizing more current data points.  </p>


<h2> RSI, Relative Strength Index</h2>

<p> The RSI is a  momentum oscillator that measures the speed &amp; change of
    price movements.  </p>
<p> IDs overbought or  oversold conditions.  </p>
<p> The RSI ranges from  0 to 100.  Indicates potential reversal  points.  </p>
<p> RSI calculation steps: </p>
<p>   Calculate the average gain and average loss over  a specified period,
    usually 14 days.  </p>
<p> The average gain is the sum of  all gains over the period divided by the
    number of periods.  </p>
<p> Similarly, the average loss is  the sum of all losses over the period
    divided by the number of periods.  </p>
<p>   Compute  the relative strength (RS) by dividing the average gain by the
    average loss.  </p>
<ul>
    <li> RSI = 100 - (100 / (1 + RS)) </li>
</ul>
<p> EX: if the average  gain over 14 days is 1.5 and the average loss is 0.5,
    the RS would be 3 (1.5 /  0.5).  </p>
<p> Plugging this into the RSI formula gives: </p>
<p> RSI = 100 - (100 / (1 + 3)) = 100 - (100  / 4) = 100 - 25 = 75 </p>
<p> RSI &gt; 70: overbought </p>
<p> RSI &lt; 30: oversold.  </p>
<p> Use for entry and  exit points.  </p>
<p> Use RSI with Spinning  Top or the Shooting Star.  </p>


<h2> MACD, Moving Average Convergence Divergence</h2>
<p> The MACD is a trend-following momentum indicator.</p>
<p> Shows the relationship between 2 Mas.  </p>
<p> IDs Trend changes: strength, direction,  momentum, duration.  </p>
<p> MACD Line = 12-period EMA - 26-period EMA </p>
<p> Signal Line: A 9-day EMA of the MACD line is  then plotted on top of the MACD line, </p>
<p> which can act as a trigger for buy and sell signals: </p>
<p> Signal Line = 9-period EMA of the MACD Line </p>
<p> Traders may buy the security when the MACD line crosses above the signal line<br />
    and sell (or short) the security when the MACD line crosses below the signal line.<br />
    The difference between the MACD line and the signal line is often plotted as a histogram,<br />
    which can provide a visual representation of the momentum of the stock. </p>
<p> EX: when the MACD is positive, and the histogram bars are above the zero line, it indicates upward momentum.  </p>
<p> EX: when the MACD is negative, and the histogram bars are below the zero line, it signals downward momentum.  </p>
<p> Integrating the MACD with C patterns.  </p>
<p> EX: if a Bullish pattern like the  "Three Outside Up" appears while the MACD
    line crosses above the  signal line,<br />
    it could signal a strong <u>buying</u> opportunity. </p>
<p> EX: if a Bearish pattern such as the "Three Outside Down Bearish" coincides
    with the MACD line crossing  below the signal line,<br />
    it may indicate a good time to <u>sell</u>. </p>
            </main>
        </div>
    )
}