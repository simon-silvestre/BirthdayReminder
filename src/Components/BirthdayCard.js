import React from 'react'

function BirthdayCard({ nom, age, photo }) {
    return (
        <div className="birthdayCard">
            <div className="birthdayCardImg">
                <img src={photo} alt="profil" />
            </div>
            <div className="birthdayCardInfos">
                <p className="nom">{nom}</p>
                <small className="age">{age} years</small>
            </div>
        </div>
    )
}

export default BirthdayCard
