import React,  { useEffect, useState } from 'react';
import axios from 'axios';
import TheUser from './TheUser';

const Users = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const res = axios
        .get(
            '/users'
            )
        .then((res) => setData(res.data));
    }, [])
    return (
        <div className="users">
            <ul className="users-list">
                {data.map((user) => (
                    <TheUser user={user} key={user.nom}/>
                ))}
            </ul>
        </div>
    );
};

export default Users;
