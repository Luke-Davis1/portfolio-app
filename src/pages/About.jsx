import CourseList from "../components/CourseList";
import Experience from "../components/Experience";
import HeadShot from "../components/Headshot";
import SkillsList from "../components/SkillsList";

const AboutPage = () => {
	return (
		<>
			<HeadShot />
			<SkillsList />
			<CourseList />
			<Experience />
		</>
	);
};

export default AboutPage;
