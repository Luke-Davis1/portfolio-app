import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PortfolioPage from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import { newContactAction } from "./components/ContactForm";

// Create the router
const router = createBrowserRouter([
	{
		path: "",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{ path: "portfolio", element: <PortfolioPage /> },
			{ path: "contact", element: <ContactPage />, action: newContactAction },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
