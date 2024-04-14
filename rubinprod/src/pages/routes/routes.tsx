import { createBrowserRouter } from 'react-router-dom'
import { App } from '../../App'

import { AppScootyLanding } from '../AppScootyCase/AppScootyLanding'
import { AppGameChangerLanding } from '../AppGameChangerCase/AppGameChangerLanding'
import { AppEliteVoyageLanding } from '../AppEliteVoyageCase/AppEliteVoyageLanding'

export const router = createBrowserRouter([
    { path: '/*', element: <App /> },
    { path: '/scooty', element: <AppScootyLanding /> },
    { path: '/gamechanger', element: <AppGameChangerLanding /> },
    { path: '/elitevoyage', element: <AppEliteVoyageLanding /> },
])
