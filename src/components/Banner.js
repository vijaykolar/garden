import React from 'react';
import './banner-img.css';

export const Banner = (props) => {
    console.log(props)
    return (
        <div className="position-relative">
            
            <div className="banner-img">
                <img className="img-fluid" src={props.src} alt={props.alt} />
            </div>

            <div className="banner-content">
                <h1 className="banner-heading"> { props.heading } </h1>
                <p className="banner-subheading"> { props.subHeading } </p> 
            </div>
        </div>
    );
}