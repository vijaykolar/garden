import React from 'react';

export const Card = (props) => {
    return(
        <div>
            <div className="card">
                <img src={props.src} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    
                </div>
            </div>
        </div>
    );
}