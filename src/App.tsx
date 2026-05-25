import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import { Register } from './pages/Register/Register'
import { Login } from './pages/Login/Login'


const router = createBrowserRouter([
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
])


function App() {
    return <RouterProvider router={router} />;
}

export default App
