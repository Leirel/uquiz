import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

export default function App() {
    return (
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/quiz/:nickname" element={<Quiz />} />
                <Route path="/results/:nickname" element={<Results />} />
                <Route path="*" element={<NotFound />} />
            </Routes> 
    );
}
