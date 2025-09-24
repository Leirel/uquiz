import React from 'react';
import {routes, Route} from 'react-router-dom';
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Result";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:nickname" element={<Quiz />} />
            <Route path="/results/:nickname" element={<Results />} />
        </Routes>
    );
}

export default App;