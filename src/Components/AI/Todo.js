import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/tom_english_ai_logo.jpeg';

export default function Todo() {

    return (
        <div style={{ backgroundImage:    `url(${backgroundImage})`, 
                      backgroundSize:     '17%', 
                      backgroundPosition: 'right top', 
                      backgroundRepeat:   "no-repeat" }}>
            <TopBar/>
            <div className='homeTable'>
<h1>Todo</h1>

<h2>Urgent !!!</h2>
<p>
Fix the TV API!!!<br />
<br />
Find hosting. Azure?<br />
<br />
GitHub - Source Control<br />
</p>
<h2>Documentation</h2>
<p>
Docs: Architectural Diagram<br />
Docs: User Sequences<br />
Docs: Data Flow Diagram<br />
Docs: Data Model<br />
Docs: APIs<br />
<br />
Docs: Deploy scripts<br />
Docs: User Documentation<br />
Docs: Maintenance Documentation<br />
<br />
Docs: Usage Goals - For presentations<br />
<br />
Docs: Job Descriptions<br />
</p>


<pre style={{fontSize: '0.9em'}}>
C:\B\TomEnglishAI&gt;git commit -m "Revamped menu to show off Agents, etc."<br />
<br />
On branch main<br />
Your branch is ahead of 'origin/main' by 1 commit.<br />
  (use "git push" to publish your local commits)<br />
  <br />
  Changes not staged for commit:<br />
  (use "git add/rm &gt;file&lt;..." to update what will be committed)<br />
  (use "git restore &gt;file&lt;..." to discard changes in working directory)<br />
        modified:   src/App.js<br />
        deleted:    src/Components/AIArchitecture/AITechnologies.js<br />
        deleted:    src/Components/AIStocks/AIStocksMachineLearning.js<br />
        modified:   src/Components/AITools/AIBusinessTypes.js<br />
        deleted:    src/Components/AITools/AIGPTs.js<br />
        deleted:    src/Components/AITools/AIToolsAddExtension.js<br />
        modified:   src/Components/Menu/MenuSubmenu.js<br />
        modified:   src/Components/Menu/TopBar.css<br />
        modified:   src/Components/TomEnglish/Home.js<br />
        <br />
Untracked files:<br />
  (use "git add &gt;file&lt;..." to include in what will be committed)<br />
        ProjectManagement.txt<br />
        src/Components/AIConsultant/<br />
        src/Components/AIVideos/<br />
        src/Images/AITools/vapi_ai.png<br />
        src/Images/AITools/vapi_ex1.png<br />
        src/Images/AITools/vapi_ex2.png<br />
        src/Images/OldManInDingy - 640x360.jpg<br />
        ~$p_StartupTools_ai.docx<br />
        <br />
no changes added to commit (use "git add" and/or "git commit -a")<br />
<br />
C:\B\TomEnglishAI&gt;git add .<br />
<br />
warning: in the working copy of 'src/App.js', <br />
   LF will be replaced by CRLF the next time Git touches it<br />
<br />
C:\B\TomEnglishAI&gt;git commit -m "Revamped menu to show off Agents, etc."<br />
<br />
[main a6f0608] Revamped menu to show off Agents, etc.<br />
 41 files changed, 611 insertions(+), 148 deletions(-)<br />
 create mode 100644 ProjectManagement.txt<br />
 create mode 100644 src/Components/AIConsultant/AIAgents.js<br />
 etc.<br />

 
 {/* create mode 100644 src/Components/AIConsultant/AIChatbots.js<br />
 create mode 100644 src/Components/AIConsultant/AIConsultant.js<br />
 create mode 100644 src/Components/AIConsultant/AICustomGPTs.js<br />
  */}

 {/* rename src/Components/{AITools => AIConsultant}/AIGPTs.js (100%)
 rename src/Components/{AIStocks => AIConsultant}/AIStocksMachineLearning.js (100%)
 rename src/Components/{AIArchitecture => AIConsultant}/AITechnologies.js (100%) */}
{/*  create mode 100644 src/Components/AIConsultant/AIVoiceAgents.js<br />
 create mode 100644 src/Components/AIConsultant/AIWebsite.js<br />
 create mode 100644 src/Components/AIConsultant/AIWebsiteHTTrack.js<br />
 create mode 100644 src/Components/AIConsultant/AIWebsiteHuggingFace.js<br />
 create mode 100644 src/Components/AIConsultant/ChatBots.js
 create mode 100644 src/Components/AIConsultant/Make.js
 create mode 100644 src/Components/AIConsultant/N8N.js
 create mode 100644 src/Components/AIConsultant/Prompts.js
 create mode 100644 src/Components/AIConsultant/Telegram.js
 delete mode 100644 src/Components/AITools/AIToolsAddExtension.js
 create mode 100644 src/Components/AIVideos/AIVideoCapCut.js
 create mode 100644 src/Components/AIVideos/AIVideoClipchamp.js
 create mode 100644 src/Components/AIVideos/AIVideos.js
 create mode 100644 src/Components/AIVideos/ChatBots.js
 create mode 100644 src/Components/AIVideos/FFmpeg.js
 create mode 100644 src/Components/AIVideos/FFmpegImagesAdd.js
 create mode 100644 src/Components/AIVideos/FFmpegImagesExtract.js
 create mode 100644 src/Components/AIVideos/FFmpegImagesTransitions.js
 create mode 100644 src/Components/AIVideos/FFmpegSoundtracksAdd.js
 create mode 100644 src/Components/AIVideos/FFmpegSoundtracksRemove.js
 create mode 100644 src/Components/AIVideos/FFmpegTextAddCaptions.js
 create mode 100644 src/Components/AIVideos/FFmpegTextTTS.js
 create mode 100644 src/Components/AIVideos/FFmpegTextVideoInside.js
 create mode 100644 src/Images/AITools/vapi_ai.png
 create mode 100644 src/Images/AITools/vapi_ex1.png
 create mode 100644 src/Images/AITools/vapi_ex2.png
 create mode 100644 src/Images/OldManInDingy - 640x360.jpg
 create mode 100644 ~$p_StartupTools_ai.docx
 */}
C:\B\TomEnglishAI&gt;git push<br />
<br />
Enumerating objects: 101, done.<br />
Counting objects: 100% (101/101), done.<br />
Delta compression using up to 12 threads<br />
Compressing objects: 100% (83/83), done.<br />
Writing objects: 100% (83/83), 5.08 MiB | 369.00 KiB/s, done.<br />
Total 83 (delta 45), reused 0 (delta 0), pack-reused 0 (from 0)<br />
remote: Resolving deltas: 100% (45/45), completed with 16 local objects.<br />
To https://github.com/tomenglish23/TomEnglishAI.git<br />
   8ea140d..a6f0608  main -&gt; main<br />
   <br />
C:\B\TomEnglishAI&gt;<br />

</pre>

            </div>
        </div>
    )
}
