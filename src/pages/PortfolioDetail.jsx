import { json, useRouteLoaderData } from "react-router-dom";
import PortfolioItem from "../components/Portfolio/PortfolioItem";
const PortfolioDetail = () => {
	const data = useRouteLoaderData("project-detail");
	return <PortfolioItem project={data} />;
};

export default PortfolioDetail;

export async function projectDetailLoader({ request, params }) {
	const id = params.projectId;
	const response = await fetch(
		"https://portfolio-app-30612-default-rtdb.firebaseio.com/portfolio/" +
			id +
			".json"
	);

	if (!response.ok) {
		throw json(
			{ message: "Could not fetch details for selected project." },
			{ status: 500 }
		);
	} else {
		return response;
	}
}
