import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Tables from './pages/Tables'
import Billing from './pages/Billing'
import Rtl from './pages/Rtl'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Main from './components/layout/Main'
import 'antd/dist/reset.css'
import './assets/styles/main.css'
import './assets/styles/responsive.css'

const router = createBrowserRouter([
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/',
        element: <Main />,
        // loader: rootLoader,
        children: [
            {
                path: 'dashboard',
                element: <Home />,
            },
            {
                path: 'tables',
                element: <Tables />,
            },
            {
                path: 'billing',
                element: <Billing />,
            },
            {
                path: 'rtl',
                element: <Rtl />,
            },
            {
                path: 'profile',
                element: <Profile />,
            },
        ],
    },
])

function App() {
    return (
        <div className="App">
            <RouterProvider router={router} />
        </div>
    )
}

export default App
