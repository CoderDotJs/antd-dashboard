import 'antd/dist/reset.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './assets/styles/main.css';
import './assets/styles/responsive.css';
import Main from './components/layout/Main';
import Billing from './pages/Billing';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Rtl from './pages/Rtl';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Tables from './pages/Tables';

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
      { index: true, element: <Home /> },
      { index: true, path: 'dashboard', element: <Home /> },
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
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
