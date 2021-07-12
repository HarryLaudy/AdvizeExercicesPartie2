import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ModifyUser = () => {
    const [old_data_usr, setOldDataUsr] = useState([]);
    const [data_old_name, setDataOldName] = useState("");
    const [data_old_prenom, setDataOldPrenom] = useState("");
    const [data_new_name, setDataNewName] = useState("");
    const [data_new_prenom, setDataNewPrenom] = useState("");
    const [data_date, setDataDate] = useState("");

    var config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const param = {
            nom : data_old_name,
            prenom : data_old_prenom
        };
        axios.get('/users', { param })
        .then((res) => setOldDataUsr(res.data));
    }
    return (
        <div>
            <br />
            <h1>{old_data_usr}</h1>
            <div className="ModifyUsr">
                <form className="FormUsr" onSubmit={ (e) => handleSubmit(e)}>
                    <h3>Veuillez entrez le nom et prénom de l'utilisateur à modifier</h3>
                    <br />
                    Nom
                    <br />
                    <input value={data_old_name} onChange={ (e) => setDataOldName(e.target.value)} type="text" placeholder="Entrez le nom du nouvel utilisateur" name="nom"></input>
                    <br/>
                    <br/>
                    Prénom
                    <br />
                    <input value={data_old_prenom} onChange={ (e) => setDataOldPrenom(e.target.value)} type="text" placeholder="Entrez le prénom du nouvel utilisateur" name="prenom"></input>
                    <br/>
                    <br/>
                    <br />
                    <h3>Veuillez entrez le nouveau nom, prénom et date de l'utilisateur</h3>
                    <br />
                    Nom
                    <br />
                    <input value={data_new_name} onChange={ (e) => setDataNewName(e.target.value)} type="text" placeholder="Entrez le nom du nouvel utilisateur" name="nom"></input>
                    <br/>
                    <br/>
                    Prénom
                    <br />
                    <input value={data_new_prenom} onChange={ (e) => setDataNewPrenom(e.target.value)} type="text" placeholder="Entrez le prénom du nouvel utilisateur" name="prenom"></input>
                    <br/>
                    Date de naissance
                    <br />
                    <input value={data_date} onChange={ (e) => setDataDate(e.target.value)} type="date" name="birthday"></input>
                    <br/>
                    <br/>
                    <button type="submit">Valider</button>
                </form>
            </div>
        </div>
    );
};

export default ModifyUser;