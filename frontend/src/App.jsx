import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import HabitList from './components/HabitList.jsx';

const App = () => {
    return (
        <Router>
            <Header />
                <Route path="/" exact component={HabitList} />
                {/* Other routes can be added here */}
            </Router>
    );
};

export default App;