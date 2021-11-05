import React, { useState } from 'react'
import BirthdayCard from './BirthdayCard'

function BirthdayContainer() {

    const [birthdays, setBirthdays] = useState([
        {
            nom: 'Bertie Yates',
            age: 29,
            photo: 'Images/Profil/profil1.jpeg'
        },
        {
            nom: 'Hester Hogan',
            age: 32,
            photo: 'Images/Profil/profil2.jpeg'
        },
        {
            nom: 'Larry Little',
            age: 36,
            photo: 'Images/Profil/profil3.jpeg'
        },
        {
            nom: 'Sean Walsh',
            age: 34,
            photo: 'Images/Profil/profil4.jpg'
        },
        {
            nom: 'Lola Gardner',
            age: 29,
            photo: 'Images/Profil/profil5.jpeg'
        }
    ]);

    let cards = birthdays.map((birthday, index) => {
        return (
            <BirthdayCard
                key={index}
                nom={birthday.nom}
                age={birthday.age}
                photo={birthday.photo}
                remove={() => removeBirthday(index)}
            />
        )
    });

    function clearButtonHandler() {
        let birthdaysCopie = [...birthdays]
        birthdaysCopie.splice(0, birthdaysCopie.length)
        setBirthdays(birthdaysCopie)
    }

    function removeBirthday(index) {
        let birthdaysCopie = [...birthdays]
        birthdaysCopie.splice(index, 1)
        setBirthdays(birthdaysCopie)
    }

    return (
        <div className="birthdayContainer">
            <h1>{ birthdays.length } Birthdays today</h1>
            {cards}
            <button onClick={clearButtonHandler}>Clear All</button>
        </div>
    )
}

export default BirthdayContainer
