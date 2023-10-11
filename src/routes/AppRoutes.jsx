import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'


const AppRoutes = ({ setIsAtHomePage }) => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage />} />
            {/* <Route path={'*'} element={<NotFoundPage />} /> */}
        </Routes>
    )
}

export default AppRoutes