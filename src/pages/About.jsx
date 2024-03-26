import AboutSummary from "../components/AboutSummary";
import CourseList from "../components/CourseList";
import HeadShot from "../components/Headshot";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
	return (
		<>
			<HeadShot />
			<AboutSummary />
			<SkillsList />
			<CourseList />
		</>
	);
};

export default AboutPage;
