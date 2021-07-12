import React from 'react';

const TheUser = (props) => {
    const user = props.user;
    return (
        <li>
            <div>
                <ul>
                    <br/>
                    <li>Prénom : {user.nom}</li>
                    <li>Nom : {user.prenom}</li>
                    <li>Date de naissance : {user.date}</li>
                    <br/>
                </ul>
            </div>
        </li>
    );
};

export default TheUser;