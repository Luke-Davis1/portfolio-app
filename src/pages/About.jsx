import AboutSummary from "../components/AboutSummary";
import HeadShot from "../components/HeadShot";
import PageContent from "../components/PageContent";

const AboutPage = () => {
	return (
		<PageContent title="About">
			<HeadShot />
			<AboutSummary />
		</PageContent>
	);
};

export default AboutPage;
