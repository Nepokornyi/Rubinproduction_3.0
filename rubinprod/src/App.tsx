import { Route, Routes, useLocation } from 'react-router-dom'
import { AppMainLanding } from './pages/AppMainLanding/AppMainLanding'
import { AppScootyLanding } from './pages/AppScootyCase/AppScootyLanding'
import { AnimatePresence } from 'framer-motion'
import { AppGameChangerLanding } from './pages/AppGameChangerCase/AppGameChangerLanding'
import { AppEliteVoyageLanding } from './pages/AppEliteVoyageCase/AppEliteVoyageLanding'
import { ScrollToTop } from './components/ScrollToTop'

export const App = () => {
    const location = useLocation()

    return (
        <>
            <ScrollToTop />
            <AnimatePresence mode="wait">
                <Routes location={location} key={location.pathname}>
                    <Route index element={<AppMainLanding />} />
                    <Route path={'/scooty'} element={<AppScootyLanding />} />
                    <Route
                        path={'/gamechanger'}
                        element={<AppGameChangerLanding />}
                    />
                    <Route
                        path={'/elitevoyage'}
                        element={<AppEliteVoyageLanding />}
                    />
                </Routes>
            </AnimatePresence>
        </>
    )
}
