import React, { useState } from 'react';
import axios from 'axios';

const AddUser = () => {

    const [data_name, setDataName] = useState("");
    const [data_prenom, setDataPrenom] = useState("");
    const [data_date, setDataDate] = useState("");

    var config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/users', {
            nom : data_name,
            prenom : data_prenom,
            date : data_date,

        }, config).then(() => {
            setDataName("");
            setDataPrenom("");
            setDataDate("");
        })
    }
    return (
        <div>
            <br />
            <div className="AddUsr">
                <form onSubmit={ (e) => handleSubmit(e)} className="FormUsr">
                    Nom
                    <br />
                    <input value={data_name} onChange={ (e) => setDataName(e.target.value)} type="text" placeholder="Entrez le nom du nouvel utilisateur" name="nom"></input>
                    <br/>
                    <br/>
                    Prénom
                    <br />
                    <input value={data_prenom} onChange={ (e) => setDataPrenom(e.target.value)} type="text" placeholder="Entrez le prénom du nouvel utilisateur" name="prenom"></input>
                    <br/>
                    <br/>
                    Date de naissance
                    <br />
                    <input value={data_date} onChange={ (e) => setDataDate(e.target.value)} type="date" name="birthday"></input>
                    <br/>
                    <br/>
                    <button type="submit">Ajouter</button>
                </form>
            </div>
        </div>
    );
};

export default AddUser;