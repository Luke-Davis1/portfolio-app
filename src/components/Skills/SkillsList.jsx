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
		description:
			"Proficiency in SQL for relational Databases like MySQL and SQL server. Experience with NoSQL databases like MongoDB.",
	},
	{
		id: "s5",
		name: "Version Control",
		description:
			"Experience in using Git for version control, including branching, merging, and pull requests.",
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
