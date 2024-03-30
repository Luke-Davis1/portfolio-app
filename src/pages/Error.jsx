import MainNavigation from "../components/Navigation/MainNavigation";

const ErrorPage = () => {
	return (
		<>
			<MainNavigation />
			<h1>Oops! Something went wrong</h1>
			<p>Cannot find the page or resources you are looking for</p>
		</>
	);
};

export default ErrorPage;
