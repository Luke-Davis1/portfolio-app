import SkillItem from "./SkillItem";
import classes from "./SkillsList.module.css";

// Create dummy skills
const DUMMY_SKILLS = [
	{
		id: "s1",
		name: "Programming Languages",
		description: "Java, Python, C++, C#, HTML5, CSS, JavaScript, SQL",
	},
	{
		id: "s2",
		name: "Computer Science Concepts",
		description:
			"Object-Oriented Programming, Software Engineering, Database Design",
	},
	{
		id: "s6",
		name: "Tech Stack",
		description: "Node, Git/GitHub, React, jQuery, MySQL, MongoDB",
	},
	{
		id: "s3",
		name: "Mathematics",
		description:
			"Proficiency in applying advanced mathematical concepts and techniques.",
	},
	{
		id: "s4",
		name: "Database Management",
		description: "SQL, MySQL, MongoDB",
	},
	{
		id: "s5",
		name: "Version Control",
		description: "Git & Github for branching, merging, and committing code",
	},
];

const SkillsList = () => {
	return (
		<div className={classes.container}>
			<h3>My Skills</h3>
			<ul className={classes.list}>
				{DUMMY_SKILLS.map((skill) => (
					<SkillItem
						key={skill.id}
						name={skill.name}
						description={skill.description}
					/>
				))}
			</ul>
		</div>
	);
};

export default SkillsList;
