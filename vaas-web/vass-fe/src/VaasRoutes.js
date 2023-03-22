import { createBrowserRouter } from "react-router-dom";
import App from './App';
import ErrorPage from "./ErrorPage";
import Home from './components/Home/Home.js';
import UserProfile from './components/Profile/UserProfile.js';

export const router = createBrowserRouter([
    {
	path: "/",
	element: <App />,
	errorElement: <ErrorPage />,
	children: [
	    {
		path: "home/",
		element: <Home />,
	    },
	    {
		path: "profile",
		element: <UserProfile />,
	    },
	],
    },
]);
