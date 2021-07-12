import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className="navigation">
            <NavLink exact to="/" activeClassName="nav-active">
                Accueil
            </NavLink>
            <NavLink exact to="lists" activeClassName="nav-active">
                Voir liste des utilisateurs
            </NavLink>
            <NavLink exact to="edit" activeClassName="nav-active">
                Ajouter/Modifier un utilisateur
            </NavLink>
        </div>
    );
};

export default Navigation;