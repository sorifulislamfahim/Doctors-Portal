import React from 'react';

const InfoCard = ({ card }) => {
    const { title, description, icon, bgClass } = card;
    return (
        <div className={`card card-side shadow-xl p-6 text-white font-semibold ${bgClass}`}>
            <figure><img src={icon} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;