import React from 'react';
import './TopBar.css';
import { GetSessionStorage } from '../ReactComponents/SessionStorage';
import MenuSubmenu from './MenuSubmenu';

export default function TopBar() {

    const currUser = GetSessionStorage('CurrentUser')

    return (
<div className='mainTop'>
    <table className='topBarTable'>
        <tbody>
            <tr>
                <td className='topBarLeft'><label className="username">&nbsp;</label></td>
                <td className='topBarCenter'><MenuSubmenu /></td>
                <td className='topBarRight'><label className="username">Welcome {currUser}</label></td>
            </tr>
        </tbody>
    </table>
</div> 
    )
}
