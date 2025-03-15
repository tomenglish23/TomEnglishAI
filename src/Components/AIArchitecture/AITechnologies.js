import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';

export default function AITechnologies() {
      
    return (
        <div style={{opacity: 1.0 }}>
            <TopBar/>
            <header>
                <h1>AI Technologies</h1>
                <p>Underpinning technologies</p>
            </header>            
            <main>
                    <h2>Python</h2> 

                    <p>&nbsp;</p>
                    <h3>Scikit-Learn</h3>
                    <table style={{width:'100%'}}>
                        <colgroup>
                            <col span="1" style={{width:'14%'}} />
                            <col span="1" style={{width:'5%'}} />
                            <col span="1" style={{width:'40%'}} />
                            <col span="1" style={{width:'25%'}} />
                            <col span="1" />
                        </colgroup>
                        <tr>
                            <td><a target="blank" href="https://scikit-learn.org/stable/index.html">Scikit-Learn</a></td>
                            <td></td>
                            <td>Csfn:Classification  Clus:Clustering  Regr:Regression<br />Anot:Annotation  Supv:Supervised  FCst:Forecasting</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://scikit-learn.org/stable/index.html">scikit-learn</a></td>
                            <td>ML/Py</td>
                            <td>Docs</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                    <p>&nbsp;</p>
                    <h3>PyPi</h3>
                    <table style={{width:'100%'}}>
                        <colgroup>
                            <col span="1" style={{width:'14%'}} />
                            <col span="1" style={{width:'5%'}} />
                            <col span="1" style={{width:'40%'}} />
                            <col span="1" style={{width:'25%'}} />
                            <col span="1" />
                        </colgroup>
                        <tr>
                            <td><a target="blank" href="https://pypi.org/">pypi.org</a></td>
                            <td></td>
                            <td><a target="blank" href="https://pypi.org/">PyPI: Py Package Index</a></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                    <p>&nbsp;</p>
                    <h3>mlens</h3>
                    <table style={{width:'100%'}}>
                        <colgroup>
                            <col span="1" style={{width:'14%'}} />
                            <col span="1" style={{width:'5%'}} />
                            <col span="1" style={{width:'40%'}} />
                            <col span="1" style={{width:'25%'}} />
                            <col span="1" />
                        </colgroup>
                        <tr>
                            <td><a target="blank" href="https://mlens.readthedocs.io/en/0.1.x/">ML-Ensemble</a></td>
                            <td></td>
                            <td>Generalized ensemble learning<br />(stacking, blending, subsemble, deep ensembles, etc)</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>

                    <p>&nbsp;</p>
                    <h3>GitHub</h3>
                    <table style={{width:'100%'}}>
                        <colgroup>
                            <col span="1" style={{width:'14%'}} />
                            <col span="1" style={{width:'5%'}} />
                            <col span="1" style={{width:'40%'}} />
                            <col span="1" style={{width:'25%'}} />
                            <col span="1" />
                        </colgroup>
                        <tr>
                            <td><a target="blank" href="https://github.com/sktime/sktime">sktime</a></td>
                            <td>ML/Py</td>
                            <td>Time-series lrning-tsks-intf</td>
                            <td>[Anal/Forecast] [Tools/Algs]<br />[Csfn/Regr/Clus/Anot/Supv/Panel]</td>
                            <td>Sk-lrn-compat</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/skforecast/skforecast">skforecast</a></td>
                            <td>ML</td>
                            <td>Py n-step forecasters</td>
                            <td>[Regr]</td>
                            <td>Sk-lrn-compat</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/tslearn-team/tslearn">tslearn</a></td>
                            <td>ML</td>
                            <td>Time-series</td>
                            <td>[tools] [pre-proc, feature-extract]<br />[Csfn/Regr/Clus]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/ibayer/fastFM">fastFM</a></td>
                            <td></td>
                            <td>Fast factorization machine impl</td>
                            <td></td>
                            <td>Sk-lrn-compat</td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/scikit-learn-contrib/lightning">lightning</a></td>
                            <td></td>
                            <td>Fast, state-of-art linear model solvers<br />(SDCA, AdaGrad, SVRG, SAG, etc)</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/scikit-learn-contrib/py-earth">py-earth</a></td>
                            <td></td>
                            <td>Multivariate adaptive [Regr] splines</td>
                            <td>[Regr]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/trevorstephens/gplearn">gplearn</a></td>
                            <td></td>
                            <td>Genetic Programming for symbolic [Regr] tasks.</td>
                            <td>[Regr]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/scikit-multilearn/scikit-multilearn">scikit-multilearn</a></td>
                            <td></td>
                            <td>Multi-label [Csfn] w/focus on label space manipulation.</td>
                            <td>[Csfn]</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td><a target="blank" href="https://github.com/dmbee/seglearn">seglearn</a></td>
                            <td></td>
                            <td>Time-series & sequence learning<br />- using sliding window segmentation.</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </table>
                    
                    <p>&nbsp;</p>
                    <h3>SkiLearn Data</h3> 
                    <p><a target="blank" href="https://scikit-learn.org/stable/auto_examples/applications/plot_stock_market.html#sphx-glr-download-auto-examples-applications-plot-stock-market-py">plot_stock_market</a></p>
                    <p><a target="blank" href="https://raw.githubusercontent.com/scikit-learn/examples-data/master/financial-data/TXN.csv">financial-data/TXN.csv</a></p>
                 
                    <p>&nbsp;</p>
                    <h3>Py: NumPy,Pandas,Jupyter</h3> 

                    <p>
NumPy: <br />
&nbsp;&nbsp;&nbsp;Py lib that provides fn-ality like MATLAB & R.  <br />
&nbsp;&nbsp;&nbsp;NumPy simplifies the UX. <br />
 <br />
Pandas:  <br />
&nbsp;&nbsp;&nbsp;Py lib for data analysis & manipulation.  <br />
&nbsp;&nbsp;&nbsp;Pandas is like a spreadsheet app for Py. Datatable fn-ality. <br />
 <br />
Jupyter notebooks:  <br />
&nbsp;&nbsp;&nbsp;Run basic scripts in single browser webpage w/ text-sections & code-sections.  <br />
&nbsp;&nbsp;&nbsp;Sections are exe-d on the svr, not your local mach.  <br />
&nbsp;&nbsp;&nbsp;Py is installed on the server. <br />
 <br />
Testing hypotheses <br />
&nbsp;&nbsp;&nbsp;Data exploration & analysis is an iterative process.  <br />
&nbsp;&nbsp;&nbsp;Take a sample of data & perform the tasks to analyze it & test hypotheses: <br />
 <br />
&nbsp;&nbsp;&nbsp;- Clean data:        to handle errors, missing values, & other issues. <br />
&nbsp;&nbsp;&nbsp;- Apply stats techs: on data. How the sample may represent real-world data.  <br />
&nbsp;&nbsp;&nbsp;                        Allows for random variation. <br />
   - Visualize data:    Determine relationships between variables.  <br />
&nbsp;&nbsp;&nbsp;                        In ML projects, id features that are predictive of the label. <br />
   - Revise hypothesis <br />
&nbsp;&nbsp;&nbsp;   - Repeat process
</p>

<p>&nbsp;</p>
<h3>Py.exe, Jupyter Lab, Notebooks, Contoso</h3> 


                    <h4>Installs</h4>
<p><br />
&gt; cd C:\ML\PyLearn<br />
<br />
pip install jupyterlab --user<br />
jupyter lab<br />
<br />
pip install notebook --user<br />
jupyter notebook<br />
<br />
<br />
Q: &gt;&gt;&gt; is due to ???<br />
<br />
&gt;&gt;&gt; first_number = int(input('Type the first number: ')) ;\<br />
... second_number = int(input('Type the second number: ')) ;\<br />
... print("The sum is: ", first_number + second_number)<br />
Type the first number: 5<br />
Type the second number: 6<br />
The sum is:  11<br />
<br />
<br />
<a target="blank" href="https://learn.microsoft.com/en-us/training/modules/python-install-vscode/">Python Install VSCode</a><br />
<br />
C:\ML\PyLearn>python --version<br />
Python 3.11.5<br />
<br />
</p>

<h4>python.exe</h4>
<p>
<br />
&gt; "C:\Python311\python.exe" -m pip install --user "jupyter>=1.0.0" "notebook==6.5.6" "ipykernel==5.5.5"<br />
&nbsp;&nbsp;&nbsp;Successfully installed   entrypoints-0.4             widgetsnbextension-4.0.9<br />
&nbsp;&nbsp;&nbsp;pyzmq-24.0.1                nbclassic-1.0.0 <br />
&nbsp;&nbsp;&nbsp;ipykernel-5.5.5             notebook-6.5.6 <br />
&nbsp;&nbsp;&nbsp;ipython-genutils-0.2.0      jupyter-1.0.0 <br />
&nbsp;&nbsp;&nbsp;ipywidgets-8.1.1            jupyter-client-7.4.9 <br />
&nbsp;&nbsp;&nbsp;qtpy-2.4.1                  jupyter-console-6.4.4 <br />
&nbsp;&nbsp;&nbsp;qtconsole-5.5.1             jupyterlab-widgets-3.0.9 <br />
&nbsp;&nbsp;&nbsp;... Starting Notebook server<br />
&nbsp;&nbsp;&nbsp;&gt; "C:\Python311\python.exe" <br />
&nbsp;&nbsp;&nbsp;"c:\PF\Azure Data Studio\resources\app\extensions\notebook\resources\pythonScripts\startNotebook.py" <br />
&nbsp;&nbsp;&nbsp;--no-browser --ip=127.0.0.1  --no-mathjax --notebook-dir "c:\Users\tomen" <br />
&nbsp;&nbsp;&nbsp;--NotebookApp.token=af8058f11d150c2d4417e80c73887ff3a10cdaa181954bfd<br />
&nbsp;&nbsp;&nbsp;... Jupyter is running at http://localhost:8888/?token=af8058f11d150c2d4417e80c73887ff3a10cdaa181954bfd<br />
<br />
<br />
&nbsp;&nbsp;&nbsp;Python 3.9.2 (tags/v3.9.2:1a79785, Feb 19 2021, 13:44:55) [MSC v.1928 64 bit (AMD64)] on win32<br />
&nbsp;&nbsp;&nbsp;Type "help", "copyright", "credits" or "license" for more information.<br />
<br />
Py types, print
</p>

<table style={{width:'95%'}}>
                        <colgroup>
                            <col span="1" style={{width:'5%'}} />
                            <col span="1" style={{width:'13%'}} />
                            <col span="1" style={{width:'15%'}} />
                            <col span="1" style={{width:'26%'}} />
                            <col span="1" />
                        </colgroup>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; 1+1</td>       <td>2</td>    <td>&gt;&gt;&gt; x = 1</td>                        <td></td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; PI = 3.14</td> <td></td>     <td>&gt;&gt;&gt; print(type(x))</td>               <td>&lt;class 'int'&gt;</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; PI</td>        <td>3.14</td> <td>&gt;&gt;&gt; x = 1.0</td>                      <td></td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; x = 1</td>     <td></td>     <td>&gt;&gt;&gt; print(type(x))</td>               <td>&lt;class 'float'&gt;</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; y = x + 5</td> <td></td>     <td>&gt;&gt;&gt; type(x)</td>                      <td>&lt;class 'float'&gt;</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; z = y</td>     <td></td>     <td>&gt;&gt;&gt; x = True</td>                     <td></td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; x</td>         <td>1</td>    <td>&gt;&gt;&gt; print(type(x))</td>               <td>&lt;class 'bool'&gt;</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; y</td>         <td></td>     <td>&gt;&gt;&gt; type(x)</td>                      <td>&lt;class 'bool'&gt;</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; z</td>         <td>6</td>    <td>&gt;&gt;&gt; x = 'This is a string'</td>       <td></td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; x = 1</td>     <td></td>     <td>&gt;&gt;&gt; print(x)</td>                     <td>This is a string</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; x = 1.0</td>   <td></td>     <td>&gt;&gt;&gt; print(type(x))</td>               <td>&lt;class 'str'&gt;</td></tr>
<tr><td>&nbsp;</td> <td>&gt;&gt;&gt; x</td>         <td>1.0</td>  <td>&gt;&gt;&gt; y = "This is also a string"</td>  <td></td></tr>
<tr><td>&nbsp;</td> <td></td>                       <td></td>     <td>&gt;&gt;&gt; print(y)</td>                     <td>This is also a string</td></tr>
<tr><td>&nbsp;</td> <td></td>                       <td></td>     <td>&gt;&gt;&gt; x = 'Hello' + ' ' + 'World!'</td> <td></td></tr>
<tr><td>&nbsp;</td> <td></td>                       <td></td>     <td>&gt;&gt;&gt; print(x)</td>                     <td>Hello World!</td></tr>
<tr><td>&nbsp;</td> <td></td>                       <td></td>     <td>&gt;&gt;&gt; print('Hello World!')</td>        <td>Hello World!</td></tr>
</table>


<h4>Contoso</h4>
<p>
Microsoft.learn: <a target="blank" href="https://learn.microsoft.com/en-us/training/paths/python-language/">Build real world applications with Python [4 modules]</a> <br />
</p>
<br />

<p>thomas [ ~ ]$ ls</p>
<p>BestBikeApp  clouddrive  venv</p>
<p>thomas [ ~ ]$ cd BestBikeApp/</p>
<p>thomas [ ~/BestBikeApp ]$ az webapp up<br />
&nbsp;&nbsp;&nbsp;--name te23webapp1<br />
&nbsp;&nbsp;&nbsp;--resource-group rgCreateWebApp<br />
&nbsp;&nbsp;&nbsp;--plan asp-te23-eastus-dev-01<br />
&nbsp;&nbsp;&nbsp;--sku F1 --location EastUS</p>
<p>Webapp 'te23webapp1' already exists. The command will deploy contents to the existing app.<br />
Unable to retrieve details of the existing app 'te23webapp1'. <br />
Please check that the app is a part of the current subscription if updating an existing app. <br />
If creating a new app, app names must be globally unique. <br />
Please try a more unique name or leave unspecified to receive a randomly generated name.
</p>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>Py.exe</h3>
                    <p>Later ...</p>

                    <h3>Jupyter Lab</h3>
                    <p>Later ...</p>

                    <h3>Notebooks</h3>
                    <p>Later ...</p>

                    <h3>Contoso</h3>
                    <p>Later ...</p>

                    <h3>Anaconda</h3> 
                    <p>Later ...</p>

                    <h4>Anaconda - Jupyter</h4>
                    <p>Later ...</p>

                    <h4>Anaconda - tvdatafeed</h4>
                    <p>Later ...</p>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>Python stock programs</h3> 
                    <p>&nbsp;</p>
                    <h4>TVDataFeedPY\...&gt; py tme_main.py</h4>
                    <p>Later ...</p>
                    <h4>Py_DataReader&gt; py finnhubapi2.py</h4>
                    <p>Later ...</p>
                    <h4>tme_main.py</h4>
                    <p>Later ...</p>
                    <h4>FinnhubAPI2.py</h4>
                    <p>Later ...</p>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>README Folders</h3>
                    <p>&nbsp;</p>
                    <p>Later ...</p>

                    <p>&nbsp;</p>
                    <p>&nbsp;</p>
                    <h3>News</h3> 

                    <p>&nbsp;</p>
                    <h4>Cathy Woods</h4>

                    <p>&nbsp;</p>
                    <h5>12/13/24 Cathie Wood buys $30 million of under-the-radar AI stock</h5>
                    <p>&nbsp;</p>
                    <p>Cathie Wood bought 676,000 shares of AI health-care company this week</p>
                    <p>	• AI/gen AI in diags - Physicians/researchers: data-driven decisions.</p>
                    <p>	• AI adv's: cloud comp, imaging techs, LLMs & molecular profiling, healthcare data digitization. </p>
                    <p>	•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'15: Tempus AI health tech company (TEM). AI for precise diags.</p>
                    <p>	•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'22: -$290M</p>
                    <p>	•&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'23: -$214M</p>
                    <p>	• 09&nbsp;&nbsp;/24: $37/share IPO.</p>
                    <p>	• 09&nbsp;&nbsp;/24: 305K shares, $9.25M</p>
                    <p>	• 09&nbsp;&nbsp;/24: &nbsp;61K shares</p>
                    <p>	• 10&nbsp;&nbsp;/24: 171K shares</p>
                    <p>	• 12/06-11/24:       677M shares, $29.2M </p> 
                    <p>	• Guggenheim analyst Subbu Nambi beg coverage: Buy rating. $74 target, per thefly.com, Dec 9.</p>
                    <p>	• 12/12/24: $41.99</p>

                    <p>&nbsp;</p>
                    <h4>TEM</h4>
                    <p>&nbsp;</p>
                    <p> <a target="blank" href="https://robinhood.com/stocks/TEM?source=search">TEM</a> </p>
            </main>
        </div>
    )
}
