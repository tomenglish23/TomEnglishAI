import './Components/CSS/App.css';
//import SignIn                      from './Components/SignIn';
//import './Components/Documentation/Readme3Architecture.md';
import Home                        from './Components/TomEnglish/Home';
import About                       from './Components/TomEnglish/About';
import HowAIEvolved                from './Components/TomEnglish/HowAIEvolved';
import TomEnglishAIResume          from './Components/TomEnglish/TomEnglishAIResume';
import AWSDictionary               from './Components/TomEnglish/AWSDictionary';

import SignUp                      from './Components/TomEnglish/Signup';

import AIStocksCandlesticks        from './Components/AIStocks/AIStocksCandlesticks';
import AIStocks5MinCandlesticks    from './Components/AIStocks/AIStocks5MinCandlesticks';
import AIStocksPrimitiveAlgorithms from './Components/AIStocks/AIStocksPrimitiveAlgorithms';

import AIStocksIndexes             from './Components/AIStocks/AIStocksIndexes';
import AIStocksTimeFrames          from './Components/AIStocks/AIStocksTimeFrames';
import AIStocksExternalFactors     from './Components/AIStocks/AIStocksExternalFactors';
import AIStocksMachineLearning     from './Components/AIStocks/AIStocksMachineLearning';
import AIStocksScreenScrapers      from './Components/AIStocks/AIStocksScreenScrapers';

import AIStocksAPIs                from './Components/AIStocks/AIStocksAPIs';

import AIGetStkHist                from './Components/AIConsoleApps/AIGetStkHist';
import AIConsoleApps               from './Components/AIConsoleApps/AIConsoleApps';

import Todo                        from './Components/AIArchitecture/Todo';
import AIHowTo                     from './Components/AIArchitecture/AIHowTo';
import AIArchitecture              from './Components/AIArchitecture/AIArchitecture';
import AITechnologies              from './Components/AIArchitecture/AITechnologies';

import AITools                     from './Components/AITools/AITools';
import AIToolsAIToolEnabled        from './Components/AITools/AIToolsAIToolEnabled';
import AIToolsAddExtension         from './Components/AITools/AIToolsAddExtension';
import TomEnglishAIChatBot         from './Components/AITools/TomEnglishAIChatBot';
import ChatBots                    from './Components/AITools/ChatBots';
import AIGPTs                      from './Components/AITools/AIGPTs';
import AITTS                       from './Components/AITools/AITTS';
import AIBusinessTypes             from './Components/AITools/AIBusinessTypes';

import Private                     from './Components/Presence/Private';
import BusinessPlan                from './Components/Presence/BusinessPlan';
import Presence1                   from './Components/Presence/Presence1';
import Funding                     from './Components/Presence/Funding';
import VentureCapitalists          from './Components/Presence/VentureCapitalists';
import PlansProposalsDecks         from './Components/Presence/PlansProposalsDecks';

import React                       from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory({ basename: process.env.PUBLIC_URL });

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
    <div>
        <Routes>
        {/* <Route exact path="/"                  element={<SignIn />} /> */}
        <Route exact path="/"                  element={<Home />} />

          {/* <Route path="Documentation/Readme3Architecture.md"  element={<Readme3Architecture />} /> */}

          <Route path="/TomEnglish/Home"                      element={<Home />} />
          <Route path="/TomEnglish/About"                     element={<About />} />
          <Route path="/TomEnglish/TomEnglishAIResume"        element={<TomEnglishAIResume />} />
          <Route path="/TomEnglish/HowAIEvolved"              element={<HowAIEvolved />} />
          <Route path="/TomEnglish/AWSDictionary"             element={<AWSDictionary />} />

          <Route path="/TomEnglish/SignUp"                    element={<SignUp />} />

          <Route path="/AIStocks/AIStocksCandlesticks"        element={<AIStocksCandlesticks />} />
          <Route path="/AIStocks/AIStocks5MinCandlesticks"    element={<AIStocks5MinCandlesticks />} />
          <Route path="/AIStocks/AIStocksPrimitiveAlgorithms" element={<AIStocksPrimitiveAlgorithms />} />

          <Route path="/AIStocks/AIStocksIndexes"             element={<AIStocksIndexes />} />
          <Route path="/AIStocks/AIStocksTimeFrames"          element={<AIStocksTimeFrames />} />
          <Route path="/AIStocks/AIStocksExternalFactors"     element={<AIStocksExternalFactors />} />
          <Route path="/AIStocks/AIStocksMachineLearning"     element={<AIStocksMachineLearning />} />
          <Route path="/AIStocks/AIStocksScreenScrapers"      element={<AIStocksScreenScrapers />} />
 
          <Route path="/AIStocks/AIStocksAPIs"                element={<AIStocksAPIs />} />
          <Route path="/AIConsoleApps/AIConsoleApps"          element={<AIConsoleApps />} />
          <Route path="/AIConsoleApps/GetStkHist"             element={<AIGetStkHist />} />

          <Route path="/AIArchitecture/AIArchitecture"        element={<AIArchitecture />} />
          <Route path="/AIArchitecture/AIHowTo"               element={<AIHowTo />} />
          <Route path="/AIArchitecture/AITechnologies"        element={<AITechnologies />} />
          <Route path="/AIArchitecture/Todo"                  element={<Todo />} />

          <Route path="/AITools/AITools"                      element={<AITools />} />
          <Route path="/AITools/AIToolsAIToolEnabled"         element={<AIToolsAIToolEnabled />} />
          <Route path="/AITools/AIToolsAddExtension"          element={<AIToolsAddExtension />} />
          <Route path="/AITools/TomEnglishAIChatBot"          element={<TomEnglishAIChatBot />} />
          <Route path="/AITools/ChatBots"                     element={<ChatBots />} />
          <Route path="/AITools/AIGPTs"                       element={<AIGPTs />} />
          <Route path="/AITools/AITTS"                        element={<AITTS />} />
          <Route path="/AITools/AIBusinessTypes"              element={<AIBusinessTypes />} />

          <Route path="/Presence/Private"                     element={<Private />} />
          <Route path="/Presence/BusinessPlan"                element={<BusinessPlan />} />
          <Route path="/Presence/Presence1"                   element={<Presence1 />} />
          <Route path="/Presence/Funding"                     element={<Funding />} />
          <Route path="/Presence/VentureCapitalists"          element={<VentureCapitalists />} />
          <Route path="/Presence/PlansProposalsDecks"         element={<PlansProposalsDecks />} />

       </Routes>
      </div>
    </Router>
  );
}

export default App;
