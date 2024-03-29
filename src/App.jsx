import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages/Root";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import PortfolioPage, { projectsLoader } from "./pages/Portfolio";
import ContactPage from "./pages/Contact";
import ErrorPage from "./pages/Error";
import { newContactAction } from "./components/ContactForm";
import PortfolioRootLayout from "./pages/PortfolioRootLayout";
import PortfolioDetail, { projectDetailLoader } from "./pages/PortfolioDetail";

// Create the router
const router = createBrowserRouter([
	{
		path: "",
		element: <RootLayout />,
		errorElement: <ErrorPage />,
		children: [
			{ index: true, element: <HomePage /> },
			{ path: "about", element: <AboutPage /> },
			{
				path: "portfolio",
				element: <PortfolioRootLayout />,
				children: [
					{ index: true, element: <PortfolioPage />, loader: projectsLoader },
					{
						path: ":projectId",
						id: "project-detail",
						loader: projectDetailLoader,
						children: [
							{
								index: true,
								element: <PortfolioDetail />,
							},
						],
					},
				],
			},
			{ path: "contact", element: <ContactPage />, action: newContactAction },
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
