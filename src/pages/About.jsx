import CourseList from "../components/Courses/CourseList";
import Experience from "../components/Experience/Experience";
import HeadShot from "../components/HeadShot/Headshot";
import SkillsList from "../components/Skills/SkillsList";

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
