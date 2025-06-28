import './Components/CSS/App.css';
//import SignIn                      from './Components/SignIn';
//import './Components/Documentation/Readme3Architecture.md';
import Home                        from './Components/TomEnglish/Home';
import About                       from './Components/TomEnglish/About';
import HowAIEvolved                from './Components/TomEnglish/HowAIEvolved';
import TomEnglishAIResume          from './Components/TomEnglish/TomEnglishAIResume';
import AWSDictionary               from './Components/TomEnglish/AWSDictionary';
import TestPage                    from './Components/TomEnglish/TestPage';

import SignUp                      from './Components/TomEnglish/Signup';

import AIStocksCandlesticks        from './Components/AIStocks/AIStocksCandlesticks';
import AIStocks5MinCandlesticks    from './Components/AIStocks/AIStocks5MinCandlesticks';
import AIStocksPrimitiveAlgorithms from './Components/AIStocks/AIStocksPrimitiveAlgorithms';

import AIStocksIndexes             from './Components/AIStocks/AIStocksIndexes';
import AIStocksTimeFrames          from './Components/AIStocks/AIStocksTimeFrames';
import AIStocksExternalFactors     from './Components/AIStocks/AIStocksExternalFactors';
import AIStocksScreenScrapers      from './Components/AIStocks/AIStocksScreenScrapers';

import AIStocksAPIs                from './Components/AIStocks/AIStocksAPIs';

import AIGetStkHist                from './Components/AIConsoleApps/AIGetStkHist';
import AIConsoleApps               from './Components/AIConsoleApps/AIConsoleApps';

import Todo                        from './Components/AIArchitecture/Todo';
import AIHowTo                     from './Components/AIArchitecture/AIHowTo';
import AIArchitecture              from './Components/AIArchitecture/AIArchitecture';

import AIConsultant                from './Components/AIConsultant/AIConsultant';
import AIGPTs                      from './Components/AIConsultant/AIGPTs';
import Prompts                     from './Components/AIConsultant/Prompts';
import AICustomGPTs                from './Components/AIConsultant/AICustomGPTs';
import AIChatbots                  from './Components/AIConsultant/AIChatbots';
import AIAgents                    from './Components/AIConsultant/AIAgents';
import AIVoiceAgents               from './Components/AIConsultant/AIVoiceAgents';
import N8N                         from './Components/AIConsultant/N8N';
import Make                        from './Components/AIConsultant/Make';
import AIWebsite                   from './Components/AIConsultant/AIWebsite';
import AIWebsiteHTTrack            from './Components/AIConsultant/AIWebsiteHTTrack';
import AIWebsiteHuggingFace        from './Components/AIConsultant/AIWebsiteHuggingFace';
import AIStocksMachineLearning     from './Components/AIConsultant/AIStocksMachineLearning';
import AITechnologies              from './Components/AIConsultant/AITechnologies';
import Telegram                    from './Components/AIConsultant/Telegram';

import AIVideos                    from './Components/AIVideos/AIVideos';
import AIVideoCapCut               from './Components/AIVideos/AIVideoCapCut';
import AIVideoClipchamp            from './Components/AIVideos/AIVideoClipchamp';
import FFmpeg                      from './Components/AIVideos/FFmpeg';
import FFmpegImagesAdd             from './Components/AIVideos/FFmpegImagesAdd';
import FFmpegImagesExtract         from './Components/AIVideos/FFmpegImagesExtract';
import FFmpegImagesTransitions     from './Components/AIVideos/FFmpegImagesTransitions';
import FFmpegSoundtracksAdd        from './Components/AIVideos/FFmpegSoundtracksAdd';
import FFmpegSoundtracksRemove     from './Components/AIVideos/FFmpegSoundtracksRemove';
import FFmpegTextAddCaptions       from './Components/AIVideos/FFmpegTextAddCaptions';
import FFmpegTextTTS               from './Components/AIVideos/FFmpegTextTTS';
import FFmpegTextVideoInside       from './Components/AIVideos/FFmpegTextVideoInside';

import AITools                     from './Components/AITools/AITools';
import AIToolsAIToolEnabled        from './Components/AITools/AIToolsAIToolEnabled';
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
        <Route exact path="/"                                 element={<Home />} />

          {/* <Route path="Documentation/Readme3Architecture.md"  element={<Readme3Architecture />} /> */}

          <Route path="/TomEnglish/Home"                      element={<Home />} />
          <Route path="/TomEnglish/About"                     element={<About />} />
          <Route path="/TomEnglish/TomEnglishAIResume"        element={<TomEnglishAIResume />} />
          <Route path="/TomEnglish/HowAIEvolved"              element={<HowAIEvolved />} />
          <Route path="/TomEnglish/AWSDictionary"             element={<AWSDictionary />} />
          <Route path="/TomEnglish/TestPage"                  element={<TestPage />} />
          
          <Route path="/TomEnglish/SignUp"                    element={<SignUp />} />

          <Route path="/AIConsultant/AIConsultant"            element={<AIConsultant />} />
          <Route path="/AIConsultant/AIGPTs"                  element={<AIGPTs />} />
          <Route path="/AIConsultant/Prompts"                 element={<Prompts />} />
          <Route path="/AIConsultant/AICustomGPTs"            element={<AICustomGPTs />} />
          <Route path="/AIConsultant/AIChatbots"              element={<AIChatbots />} />
          <Route path="/AIConsultant/AIAgents"                element={<AIAgents />} />
          <Route path="/AIConsultant/AIVoiceAgents"           element={<AIVoiceAgents />} />
          <Route path="/AIConsultant/N8N"                     element={<N8N />} />
          <Route path="/AIConsultant/Make"                    element={<Make />} />
          <Route path="/AIConsultant/AIWebsite"               element={<AIWebsite />} />
          <Route path="/AIConsultant/AIWebsiteHTTrack"        element={<AIWebsiteHTTrack />} />
          <Route path="/AIConsultant/AIWebsiteHuggingFace"    element={<AIWebsiteHuggingFace />} />
          <Route path="/AIConsultant/AIStocksMachineLearning" element={<AIStocksMachineLearning />} />
          <Route path="/AIConsultant/AITechnologies"          element={<AITechnologies />} />
          <Route path="/AIConsultant/Telegram"                element={<Telegram />} />

          <Route path="/AIVideos/AIVideos"                    element={<AIVideos />} />
          <Route path="/AIVideos/AIVideoCapCut"               element={<AIVideoCapCut />} />
          <Route path="/AIVideos/AIVideoClipchamp"            element={<AIVideoClipchamp />} />
          <Route path="/AIVideos/FFmpeg"                      element={<FFmpeg />} />
          <Route path="/AIVideos/FFmpegImagesAdd"             element={<FFmpegImagesAdd />} />
          <Route path="/AIVideos/FFmpegImagesExtract"         element={<FFmpegImagesExtract />} />
          <Route path="/AIVideos/FFmpegImagesTransitions"     element={<FFmpegImagesTransitions />} />
          <Route path="/AIVideos/FFmpegSoundtracksAdd"        element={<FFmpegSoundtracksAdd />} />
          <Route path="/AIVideos/FFmpegSoundtracksRemove"     element={<FFmpegSoundtracksRemove />} />
          <Route path="/AIVideos/FFmpegTextAddCaptions"       element={<FFmpegTextAddCaptions />} />
          <Route path="/AIVideos/FFmpegTextTTS"               element={<FFmpegTextTTS />} />
          <Route path="/AIVideos/FFmpegTextVideoInside"       element={<FFmpegTextVideoInside />} />

          <Route path="/AIStocks/AIStocksCandlesticks"        element={<AIStocksCandlesticks />} />
          <Route path="/AIStocks/AIStocks5MinCandlesticks"    element={<AIStocks5MinCandlesticks />} />
          <Route path="/AIStocks/AIStocksPrimitiveAlgorithms" element={<AIStocksPrimitiveAlgorithms />} />

          <Route path="/AIStocks/AIStocksIndexes"             element={<AIStocksIndexes />} />
          <Route path="/AIStocks/AIStocksTimeFrames"          element={<AIStocksTimeFrames />} />
          <Route path="/AIStocks/AIStocksExternalFactors"     element={<AIStocksExternalFactors />} />
          <Route path="/AIStocks/AIStocksScreenScrapers"      element={<AIStocksScreenScrapers />} />
 
          <Route path="/AIStocks/AIStocksAPIs"                element={<AIStocksAPIs />} />
          <Route path="/AIConsoleApps/AIConsoleApps"          element={<AIConsoleApps />} />
          <Route path="/AIConsoleApps/GetStkHist"             element={<AIGetStkHist />} />

          <Route path="/AIArchitecture/AIArchitecture"        element={<AIArchitecture />} />
          <Route path="/AIArchitecture/AIHowTo"               element={<AIHowTo />} />
          <Route path="/AIArchitecture/Todo"                  element={<Todo />} />

          <Route path="/AITools/AITools"                      element={<AITools />} />
          <Route path="/AITools/AIToolsAIToolEnabled"         element={<AIToolsAIToolEnabled />} />
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
