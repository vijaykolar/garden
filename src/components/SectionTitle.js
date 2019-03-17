import React from 'react';

export const SectionTitle = (props) => {
    console.log(props)
    return(
        <h2 className="section-title"> {props.title} </h2>
    );
}