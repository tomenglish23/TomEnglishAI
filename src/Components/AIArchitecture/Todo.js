import React from 'react';
import TopBar from '../Menu/TopBar';
import '../CSS/styles.css';
import backgroundImage from '../../Images/OldManInDingy.jpg';

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

            </div>
        </div>
    )
}
