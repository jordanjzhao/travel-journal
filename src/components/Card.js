import React from 'react';
import pinIcon from '../images/pin.png';

export default function Card(props) {
    return (
        <div className="card">  
            <img src={`../images/${props.item.imageUrl}`} className="card--image" />
            <div className="card--deck">
                <p className="card--info">
                    <img  src={pinIcon}/>{" "}{props.item.title}
                    <a className="card--link" href={props.item.googleMapsLink}>View on Google Maps</a>
                </p>
        
                <h3 className="card--location">{props.item.location}</h3>
                <h4 className="card--dates">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="card--text">{props.item.description}</p>
            </div>
        </div>
    )
}