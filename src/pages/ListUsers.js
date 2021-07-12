import React from 'react';
import Navigation from '../components/Navigation';
import Users from '../components/Users';

const ListUsers = () => {
    return (
        <div>
            <Navigation />
            <h1>Listes des utilisateurs</h1>
            <Users />
        </div>
    );
};

export default ListUsers;