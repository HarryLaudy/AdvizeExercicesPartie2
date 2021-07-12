import React from 'react';
import AddUser from './AddUser';
import ModifyUser from './ModifyUser';

const Form = () => {
    return (
        <div>
            <br/>
            <u><h2>Ajouter un utilisateur</h2></u>
            <AddUser />
            <br/>
            <br />
            <u><h2>Modifier utilisateur</h2></u>
            <ModifyUser />
        </div>
    );
};

export default Form;