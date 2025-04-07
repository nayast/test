import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Bye from './Bye';

function App() {
    return (
        <Router basename="/hello">
            <Routes>
                <Route path="/" element={
                    <div className="container">
                        <h1>Привет!</h1>
                        <Link to="/bye" className="button">Перейти на страницу "Пока"</Link>
                    </div>
                } />
                <Route path="/bye" element={<Bye />} />
            </Routes>
        </Router>
    );
}

export default App;