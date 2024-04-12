import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import image13 from "./assets/image 13.png"
import image16 from "./assets/image 16.png"
import { WelcomePage, Goals, Signup, Login, Tracker, Schedule } from "./pages/index.js"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const routes = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <WelcomePage
                    image={image13}
                    title='Track Your Goal'
                    description='Don’t worry if you have trouble determining your goals, We can help you determine your goals and track your goals'
                    to='/android2'
                />
            },
            {
                path: '/android2',
                element: <WelcomePage
                    image={image16}
                    title='Get Burn'
                    description='Let’s keep burning to achieve your goals, it hurts only temporarily, if you give up now you will be in pain forever'
                    to='/android4'
                />
            },
            {
                path: '/android4',
                element: <Signup />
            },
            {
                path: '/android5',
                element: <Login />
            },
            {
                path: '/android6',
                element: <Goals />
            },
            {
                path: '/android8',
                element: <Tracker />
            },
            {
                path: '/android9',
                element: <Schedule />
            },
            {
                path: '*',
                element: <h1>
                    404 No Page Found
                </h1>
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={routes} />
)
