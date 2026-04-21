import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { AppProvider } from "./context/Appcontext";
import Activities from "./pages/Activities";
import ActivityDetails from "./pages/ActivityDetails";
import Filter from "./pages/Filter";
import Stats from "./pages/Stats";

function App() {
    return (
        <Router>
            <AppProvider>
                <Routes>
                    <Route path="/" element={<Navigate to="/activities" />} />
                    <Route path="/activities" element={<Activities />} />
                    <Route path="/activities/:id" element={<ActivityDetails />} />
                    <Route path="/filter" element={<Filter />} />
                    <Route path="/stats" element={<Stats />} />
                </Routes>
            </AppProvider>
        </Router>
    );
}

export default App;