import React from 'react';
import './Notifications.css';
<<<<<<< HEAD
=======
import { getLatestNotification } from './utils';
import close_icon from './close-icon.png';
>>>>>>> 2c345e581b7308b06f00d481fa66975f6fc948b4

const Notifications = () => {
    return (
        <div className='Notifications'>
            <p>Here is the list of Notifications</p>
<ul>
                <li data-priority="default">New course available</li>
                <li data-priority="urgent">New resume available</li>
                <li data-priority="urgent">
	    <div dangerouslySetInnerHTML={{ __html: `${getLatestNotification()}` }} ></div> 
	    </li>
            </ul>
            <button type="button" aria-label="close" onClick={() => console.log('Close button has been clicked')} style={{dislay: 'inline-block', position: 'absolute', top: '16px', right: '16px', right: '16px', background: 0, border: 0, outline: 'none', cursor: 'pointer',}}>
                <img src={close_icon} alt="" style={{ width: '8px', height: '8px' }} />
            </button>
        </div>
    );
};

export default Notifications;
