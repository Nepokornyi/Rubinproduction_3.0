import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { AppMainLanding } from './pages/AppMainLanding/AppMainLanding'

export const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<AppMainLanding />} />
                </Routes>
            </Router>
        </>
    )
}
