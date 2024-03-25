import AboutSummary from "../components/AboutSummary";
import HeadShot from "../components/Headshot";
import PageContent from "../components/PageContent";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
	return (
		<PageContent title="About">
			<HeadShot />
			<AboutSummary />
			<SkillsList />
		</PageContent>
	);
};

export default AboutPage;
