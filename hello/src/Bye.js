import React from 'react';
import { Link } from 'react-router-dom';

function Bye() {
    return (
        <div className="container">
            <h1>Пока!</h1>
            <Link to="/" className="button">Вернуться назад</Link>
        </div>
    );
}

export default Bye;