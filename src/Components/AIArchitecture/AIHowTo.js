import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AIHowTo() {

    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI How-To</h1>
                <p>Miscellaneous technical support steps for our underlying technologies</p>
            </header>            
            <main>
<h2>Tools to add to the website that will read the page aloud upon clicking it</h2>
<p>Text-to-Speech (TTS):</p>
<p>&nbsp;</p>
<p>1. Google TTS API:<br />&nbsp;&nbsp;&nbsp;Not entirely free (standard rate applies after 4 million characters), 
but, is a reliable option.</p>
<p>&nbsp;</p>
<p>2. ResponsiveVoice.js:<br />&nbsp;&nbsp;&nbsp;JavaScript library: Simple to add TTS. Free with optional paid upgrades.</p>
<p>&nbsp;</p>
<p>3. Read Aloud:<br />&nbsp;&nbsp;&nbsp;A Chrome &amp; Firefox extension: 
Can integrate into the website with a JavaScript API.</p>
<p>&nbsp;</p>
<p>4. SpeakIt!:<br />&nbsp;&nbsp;&nbsp;Free JavaScript library: TTS functionality.</p>
<p>&nbsp;</p>
<p>General steps to implement any of these:</p>
<p>&nbsp;</p>
<p>1. Choose a tool and sign up for an API key if required.</p>
<p>2. Add the necessary JavaScript code to the website HTML.</p>
<p>3. Configure TTS settings.</p>
<p>4. Add a button to activate the TTS functionality.</p>
<p>&nbsp;</p>
<p>Some tools have limitations, such as commercial use restrictions or the number of daily requests.</p>



<h1>React</h1>

<h2>React: Create the App</h2>
<p>
Create pages in the Components folder:<br/>
&nbsp;&nbsp;&nbsp;- When importing React from 'react', don't put brackets around React.<br/>
<br/>
App.js component example (HowTo.js):<br/>
&nbsp;&nbsp;&nbsp;- import HowTo from './Components/HowTo';<br/>
&nbsp;&nbsp;&nbsp;- Add a Route with the path &amp; element. <br/>
<br/>
MenuSubmenu.js:<br/>
&nbsp;&nbsp;&nbsp;- Add a list item with href = HowTo &amp; Body = How To<br/>
</p>

<h3>React: Installs</h3>
<p>
&gt;npm install winston<br/>
&gt;npm install pandas-js<br/>
&nbsp;&nbsp;&nbsp;... many more<br/>
<h3>Start the React app</h3>
&gt;npm start<br/>
<br/>
&nbsp;&nbsp;&nbsp;The Login Page will open in your browser
</p>

<h2>React & Services: Start Order</h2>
<p>Start the two servers before starting the React website.</p>
<table style={{width:'100%'}}>
    <colgroup>
    <col span="1" style={{width:'2%'}} />
    <col span="1" style={{width:'6%'}} />
    <col span="1" style={{width:'7%'}} />
    <col span="1" style={{width:'10%'}} />
    <col span="1" style={{width:'15%'}} />
        <col span="1"  />
    </colgroup>
    <tr>
        <td>&nbsp;</td>
        <td>Server:</td>
        <td>DbServer</td>
        <td>on port 3002</td>
        <td>Node.js</td>
        <td>Accesses MySQL for user authentication</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>Server:</td>
        <td>PyServer</td>
        <td>on port 8765</td>
        <td>Python</td>
        <td>Accesses MySQL for financial data</td>
    </tr>
    <tr>
        <td>&nbsp;</td>
        <td>React:</td>
        <td>React app</td>
        <td>on port 3000</td>
        <td>HTML, CSS, node.js</td>
        <td>Communicates with the DbServer &amp; PyServer</td>
    </tr>
</table>

<h2>Start the node.js Server - DB Login</h2>
<h3>Cmd Window for the DBServer</h3>
<p>
cd C:\B\server_db<br/>
node DBTE23Server3002.js 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
(PORT 3002)<br/>
</p>

<h2>Start the Python Server - TV & DB Access</h2>
<h3>Cmd Window for the PyServer</h3>
<p>
cd C:\B\<br/>
(envB) C:\B&gt;<br/>
(envB) C:\B&gt;py PyServer.py<br/>
<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Starting server<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
Hosting server on port 8765 
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
(PORT 8765)
</p>





<h1>ASCII</h1>
<p>
<pre>
<h3>ASCII Common Symbols</h3>
<b>HTML         Description</b><br />
<b>----         ---------------------------------------</b><br />
 & nbsp;      non-breaking space<br />
 & amp;       ampersand<br />
 <br />
 & quot;      double quotes<br />
 & laquo;     left double angle quotes<br />
 & raquo;     right double angle quotes<br />
 <br />
 & sup1;      superscript one<br />
 & sup2;      superscript two - squared<br />
 & sup3;      superscript three - cubed<br />
 <br />
 & frac14;    fraction one quarter<br />
 & frac12;    fraction one half<br />
 & frac34;    fraction three quarters<br />
 <h3>ASCII Signs</h3>
<b>HTML         Description</b><br />
<b>----         ---------------------------------------</b><br />
 & copy;      copyright sign<br />
 & lt;        less than sign<br />
 & gt;        greater than sign<br />
 & plusmn;    plus-or-minus sign<br />
 & times;     multiplication sign<br />
 & divide;    division sign<br />
 <br />
 & cent;      cent sign<br />
 & pound;     pound sign<br />
 & curren;    currency sign<br />
 & yen;       yen sign<br />
 <h3>ASCII Other Symbols</h3>
 <b>HTML         Description</b><br />
<b>----         ---------------------------------------</b><br />
 & iexcl;     inverted exclamation mark<br />
 & brvbar;    broken vertical bar<br />
 & sect;      section sign<br />
 & uml;       spacing diaeresis - umlaut<br />
 & ordf;      feminine ordinal indicator<br />
 & not;       not sign<br />
 & shy;       soft hyphen<br />
 & reg;       registered trade mark sign<br />
 & macr;      spacing macron - overline<br />
 & deg;       degree sign<br />
 & acute;     acute accent - spacing acute<br />
 & micro;     micro sign<br />
 & para;      pilcrow sign - paragraph sign<br />
 & middot;    middle dot - Georgian comma<br />
 & cedil;     spacing cedilla<br />
 & ordm;      masculine ordinal indicator<br />
 & iquest;    inverted question mark<br />
 <h3>ASCII Capital Letters</h3>
 <b>HTML         Description</b><br />
<b>----         ---------------------------------------</b><br />
& Agrave;    latin capital letter A with grave      <br />
 & Aacute;    latin capital letter A with acute      <br />
 & Acirc;     latin capital letter A with circumflex <br />
 & Atilde;    latin capital letter A with tilde      <br />
 & Auml;      latin capital letter A with diaeresis  <br />
 & Aring;     latin capital letter A with ring above <br />
 & AElig;     latin capital letter AE<br />
 & Ccedil;    latin capital letter C with cedilla    <br />
 & Egrave;    latin capital letter E with grave      <br />
 & Eacute;    latin capital letter E with acute      <br />
 & Ecirc;     latin capital letter E with circumflex <br />
 & Euml;      latin capital letter E with diaeresis  <br />
 & Igrave;    latin capital letter I with grave      <br />
 & Iacute;    latin capital letter I with acute      <br />
 & Icirc;     latin capital letter I with circumflex <br />
 & Iuml;      latin capital letter I with diaeresis  <br />
 & ETH;       latin capital letter ETH<br />
 & Ntilde;    latin capital letter N with tilde      <br />
 & Ograve;    latin capital letter O with grave      <br />
 & Oacute;    latin capital letter O with acute      <br />
 & Ocirc;     latin capital letter O with circumflex <br />
 & Otilde;    latin capital letter O with tilde      <br />
 & Ouml;      latin capital letter O with diaeresis  <br />
 & Oslash;    latin capital letter O with slash      <br />
 & Ugrave;    latin capital letter U with grave      <br />
 & Uacute;    latin capital letter U with acute      <br />
 & Ucirc;     latin capital letter U with circumflex <br />
 & Uuml;      latin capital letter U with diaeresis  <br />
 & Yacute;    latin capital letter Y with acute      <br />
 & THORN;     latin capital letter THORN<br />
 <h3>ASCII Small Letters</h3>
 <b>HTML         Description</b><br />
<b>----         ---------------------------------------</b><br />
 & szlig;     latin small letter sharp s - ess-zed   <br />
 & agrave;    latin small letter a with grave        <br />
 & aacute;    latin small letter a with acute        <br />
 & acirc;     latin small letter a with circumflex   <br />
 & atilde;    latin small letter a with tilde        <br />
 & auml;      latin small letter a with diaeresis    <br />
 & aring;     latin small letter a with ring above   <br />
 & aelig;     latin small letter ae<br />
 & ccedil;    latin small letter c with cedilla      <br />
 & egrave;    latin small letter e with grave        <br />
 & eacute;    latin small letter e with acute        <br />
 & ecirc;     latin small letter e with circumflex   <br />
 & euml;      latin small letter e with diaeresis    <br />
 & igrave;    latin small letter i with grave        <br />
 & iacute;    latin small letter i with acute        <br />
 & icirc;     latin small letter i with circumflex   <br />
 & iuml;      latin small letter i with diaeresis    <br />
 & eth;       latin small letter eth<br />
 & ntilde;    latin small letter n with tilde        <br />
 & ograve;    latin small letter o with grave        <br />
 & oacute;    latin small letter o with acute        <br />
 & ocirc;     latin small letter o with circumflex   <br />
 & otilde;    latin small letter o with tilde        <br />
 & ouml;      latin small letter o with diaeresis    <br />
 & oslash;    latin small letter o with slash        <br />
 & ugrave;    latin small letter u with grave        <br />
 & uacute;    latin small letter u with acute        <br />
 & ucirc;     latin small letter u with circumflex   <br />
 & uuml;      latin small letter u with diaeresis    <br />
 & yacute;    latin small letter y with acute        <br />
 & thorn;     latin small letter thorn<br />
 & yuml;      latin small letter y with diaeresis 
</pre>
</p>




<h1>Command Windows</h1>


<h2>CMD: DOS Commands </h2>
<p>History: doskey /history</p>


<h2>CMD: Start Python </h2>
<h3>Cmd Window 1:</h3>
<p>
py PyServer.py<br/>
</p>
<h4>To kill:</h4>
<h3>Cmd Window 2:</h3>
<p>
netstat -aon | find "127." | find "LISTENING" | find "8765"<br/>
- TCP    127.0.0.1:8765         0.0.0.0:0              LISTENING       58360<br/>
<br/>
taskkill /F /PID 58360<br/>
- SUCCESS: The process with PID 58360 has been terminated.<br/>
</p>
<h3>Cmd Window 1:</h3>
<p>
py PyServer.py<br/>
- Starting server<br/>
- Hosting server on port 8765<br/>
</p>

<h1>SQL, etc.</h1>

<h2>SQL</h2>
<p>
MySQL Workbench
</p>

<h1>Projects</h1>

<h2>Fullstack Project:</h2>

<table className='block12'>
    <colgroup>
        <col span="1" style={{width:'13%'}} />
        <col span="1" style={{width:'17%'}} />
        <col span="1"  />
    </colgroup>
    <tr>
        <td>React.js:</td>
        <td>React\App.js </td>
        <td>npm start</td>
    </tr>
    <tr>
        <td>Node.js:</td>
        <td>React\server\</td>
        <td>node index.js &nbsp;&nbsp;(PORT: 3002)</td>
    </tr>
    <tr>
        <td>Database:</td>
        <td>MySQL</td>
        <td>MySQL Workbench</td>
    </tr>
</table>

<h2>Python Projects:</h2>
<table className='block12'>
    <colgroup>
        <col span="1" style={{width:'25%'}} />
        <col span="1" style={{width:'25%'}} />
        <col span="1"  />
    </colgroup>
    <tr>
        <td>WebSockets: &nbsp;&nbsp;Chat App:</td>
        <td>Py_WebSockets\inforkgodara</td>
        <td>server.py &nbsp;&nbsp;(PORT: 8765) - client.py 1&2</td>
    </tr>
    <tr>
        <td>WebSockets: &nbsp;&nbsp;Send commands:</td>
        <td>Py_WebSockets\WebSocketTx</td>
        <td>Ciient sends command. &nbsp;&nbsp;Server responds to command.</td>
    </tr>
</table>

<h2>Stocks:</h2>
<table className='block12'>
    <colgroup>
        <col span="1" style={{width:'25%'}} />
        <col span="1" style={{width:'25%'}} />
        <col span="1"  />
    </colgroup>
    <tr>
        <td>AI:</td>
        <td>AI-related projects</td>
        <td></td>
    </tr>
    <tr>
        <td>API calls:</td>
        <td></td>
        <td></td>
    </tr>
</table>

<h2>Page Scraping:</h2>
<table className='block12'>
    <colgroup>
        <col span="1" style={{width:'25%'}} />
        <col span="1" style={{width:'25%'}} />
        <col span="1"  />
    </colgroup>
    <tr>
        <td>Cs_Scraping</td>
        <td>Cs_Scraping\scraper1</td>
        <td>.Net Project</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<h2>More Node.js:</h2>
<table className='block12'>
    <colgroup>
        <col span="1" style={{width:'25%'}} />
        <col span="1" style={{width:'25%'}} />
        <col span="1"  />
    </colgroup>
    <tr>
        <td>Chat App</td>
        <td>NodeJS\chat-app</td>
        <td>server.js - Not working</td>
    </tr>
    <tr>
        <td></td>
        <td></td>
        <td></td>
    </tr>
</table>

<h1>Machine Learning</h1>
<h2>Visual Studio</h2>
<h3>Database Access</h3>
<h3>ML.NET Library</h3>
<h4>Training</h4>
<h4>Predictions</h4>
<h4>Ranking and Saving Predictions to the Database</h4>
<h4>Implement my AI Progressions from 35 years ago</h4>
<h3>Display Options</h3>
            </main>
        </div>
    )
}
