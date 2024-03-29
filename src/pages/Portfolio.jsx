import { useLoaderData, json } from "react-router-dom";
import PortfolioList from "../components/PortfolioList";

const PortfolioPage = () => {
	const data = useLoaderData();
	const mappedProjects = Object.entries(data).map(([key, value]) => ({
		id: key,
		...value,
	}));
	return (
		<>
			<PortfolioList projects={mappedProjects} />
		</>
	);
};
export default PortfolioPage;

export async function projectsLoader() {
	const response = await fetch(
		"https://portfolio-app-30612-default-rtdb.firebaseio.com/portfolio.json"
	);

	if (!response.ok) {
		throw json({ message: "Could not fetch projects." }, { status: 500 });
	} else {
		return response;
	}
}
