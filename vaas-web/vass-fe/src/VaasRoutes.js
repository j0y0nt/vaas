import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ErrorPage from "./ErrorPage";
import Home from './components/Home/Home.js';
import UserProfile from './components/Profile/UserProfile.js';
import Signup from './components/Signup/SignUpComponent.js';
import VspDashboard from './components/Vsp/VspDashboard.js';

export const router = createBrowserRouter([
    {
	path: "/",
	element: <App />,
	errorElement: <ErrorPage />,
	children: [
	    {
		path: "home/",
		element: <Home />,
		children: [
		    {
			index: true,
			element: <VspDashboard />,
		    },
		],
	    },
	    {
		path: "signup",
		element: <Signup />,
	    },
	    {
		path: "profile",
		element: <UserProfile />,
	    },
	],
    },
]);
