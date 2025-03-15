import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import ScreenScrape    from '../../Images/ArchImages/ScreenScrape.jpg';
import ScreenScrape2   from '../../Images/ArchImages/ScreenScrape2.jpg';

export default function AIStocksScreenScrapers() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>Sentiment by Screen Scraping</h1>
            </header>            
            <main>
<h3>Analyze a stock’s sentiment by screen scraping</h3>
                    <p>&nbsp;</p>
                    <p>By following these steps &amp; best practices,<br /> you can develop a robust sentiment analysis system to analyze stock sentiment through screen scraping.</p>
                    <p>&nbsp;</p>

                    <p>Extract & process large amounts of online data:<br />
                    - Financial news websites<br />
                    - Social media platforms<br />
                    - Forums </p>

                    <p>&nbsp;</p>
                    <center>
                        <img src={ScreenScrape} alt="ScreenScrape" border="0" width="350" height="200" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={ScreenScrape2} alt="ScreenScrape" border="0" width="350" height="200" />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        </center>

                    <p>&nbsp;</p>
                    <p>Guide:</p>                           

                    <p>&nbsp;</p>
                    <p><strong># Pre-Requisites</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Programming skills:</strong></td><td>[<b>Python</b>, R, JavaScript].</td></tr> 
                            <tr><td><strong>Web scraping tools &amp; libraries:</strong></td><td>[<b>Beautiful Soup</b>, Scrapy, Selenium].</td></tr> 
                            <tr><td><strong>Natural Language Processing skills:</strong></td><td>Understanding of NLP concepts &amp; libraries like NLTK, spaCy, or Stanford CoreNLP.</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p><strong># Screen Scraping Steps:</strong></p> 
                    <p>&nbsp;</p>
                    <p><strong>1: Identify Data Sources</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Financial news websites:</strong></td><td>[Bloomberg, CNBC, Reuters, Yahoo Finance]. Some require prescriptions or use anti-scraping techniques.</td></tr> 
                            <tr><td><strong>Forums, discussion boards:</strong></td><td>[Seeking Alpha, Investor Village].</td></tr> 
                            <tr><td><strong>Social media platforms:</strong></td><td>[Twitter, StockTwits, Reddit (r/stockmarket, r/investing)].</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p><strong>2: Extract Relevant Data</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                        <tr><td><strong>Use web scraping tools:</strong></td><td>Use [<b>Beautiful Soup</b>, Scrapy, Selenium] to extract HTML content from websites.</td></tr> 
                        <tr><td><strong>Further HTML cleanup:</strong></td><td>The HTML is not extraction-friendly. Analyzing &amp; parsing is very site-specific.</td></tr> 
                        <tr><td><strong>Parse HTML content:</strong></td><td>Extract relevant data [article headlines, text, <b>sentiment indicators (likes, dislikes)</b>].</td></tr> 
                            <tr><td><strong>Handle anti-scraping measures:</strong></td><td>Consider not tackling these sites without ample manpower!</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p><strong>3: Preprocess &amp; Clean Data</strong> - <b>If you got here, be thankful you have found a parsable data source!</b></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Tokenize text data:</strong></td><td>Break down text into individual words or tokens.</td></tr> 
                            <tr><td><strong>Remove stop words &amp; punctuation:</strong></td><td>Eliminate common words ["the," "and"] &amp; punctuation marks.</td></tr> 
                            <tr><td><strong>Handle special chars &amp; emojis:</strong></td><td>Convert or remove special characters &amp; emojis.</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p><strong>4: Analyze Sentiment</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Use NLP libraries:</strong></td><td>Analyze sentiment with existing libraries: [NLTK, spaCy, Stanford CoreNLP].</td></tr> 
                            <tr><td><strong>Apply sentiment analysis:</strong></td><td>Use techniques like [<b>ML</b>, rule-based, deep learning].</td></tr> 
                            <tr><td><strong>Calculate sentiment scores:</strong></td><td>Assign a sentiment score (e.g., positive, negative, neutral) to each piece of text.</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p><strong>5: Visualize, Interpret Results</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Create visualizations:</strong></td><td>Create visualizations [bar charts, word clouds] with [<b>Matplotlib</b>, <b>Plotly</b>, Seaborn] libraries. </td></tr> 
                            <tr><td><strong>Analyze sentiment trends:</strong></td><td>Identify patterns &amp; trends in sentiment over time.</td></tr> 
                            <tr><td><strong>Correlate sentiment with stock perf:</strong></td><td>Investigate the relationship between sentiment &amp; stock price movements.</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p><strong># Challenges &amp; Limitations</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Data quality &amp; noise:</strong></td><td>Web scraping may introduce noise &amp; errors into the data.</td></tr> 
                            <tr><td><strong>Sentiment analysis challenges:</strong></td><td>Sarcasm, irony &amp; figurative language can be difficult to interpret.</td></tr> 
                            <tr><td><strong>Contextual understanding:</strong></td><td>Sentiment analysis may not always capture the nuances of human language &amp; context.</td></tr> 
                        </tbody>
                    </table>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <p><strong># Best Practices</strong></p> 
                    <table style={{width:'100%', marginLeft:'24px'}}>
                        <colgroup>
                            <col span="1" style={{width:'24%'}} />
                            <col span="1" />
                        </colgroup>
                        <tbody>
                            <tr><td><strong>Use reliable data sources:</strong></td><td>Focus on reputable websites &amp; sources.</td></tr> 
                            <tr><td><strong>Handle missing data:</strong></td><td>Develop strategies to handle missing or incomplete data.</td></tr> 
                            <tr><td><strong>Continuously monitor &amp; update:</strong></td><td>Regularly update your sentiment analysis model to adapt to changing market conditions &amp; language usage.</td></tr> 
                        </tbody>
                    </table>

<p>&nbsp;</p>
<p>By following these steps and best practices, you can develop a robust sentiment analysis system to analyze stock sentiment through screen scraping.</p>
</main>
        </div>
    )
}