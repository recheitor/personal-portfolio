import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'

const AppRoutes = ({ language }) => {

    return (
        <Routes>
            <Route path={'/'} element={<HomePage language={language} />} />
            {/* <Route path="/robots.txt" render={() => (
                <pre>
                    {` User-agent: *
                        Allow: / `}
                </pre>
            )} /> */}
        </Routes>
    )
}

export default AppRoutes