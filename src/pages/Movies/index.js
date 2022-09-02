import './Movies.css';
import {Header} from './layout/Header'
import {Footer} from './layout/Footer'
import {Content} from './layout/Content'
import React from 'react';

export const Movies = () => {
    return (
        <div className='wrapper'>
            <Header />
            <Content />
            <Footer />
        </div>
    )
}
