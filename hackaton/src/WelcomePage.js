import React from 'react';
import { ReactComponent as MySVG } from 'C:/Users/pc/IdeaProjects/MHP_Hackaton_Backup/hackaton/src/Untitled.svg';

const WelcomePage = () => {
    return (
        <div>
            {/* Colored field with "Bookings" text */}
            <div style={{ backgroundColor: 'blue', color: 'white', padding: '20px', textAlign: 'center', fontSize: '24px', height: '15vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Bookings
            </div>
            {/* SVG content */}
            <div style={{ height: 'calc(90vh)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <MySVG />
            </div>
        </div>
    );
}

export default WelcomePage;
