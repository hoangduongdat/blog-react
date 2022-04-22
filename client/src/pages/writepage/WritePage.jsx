import React from 'react';

import './writepage.scss'
import SideBar from './../../components/sidebar/SideBar';

import Write from './../../components/write/Write';

const WritePage = () => {
    return (
        <div className="writepage">        
            <Write/>
        </div>
    );
};

export default WritePage;