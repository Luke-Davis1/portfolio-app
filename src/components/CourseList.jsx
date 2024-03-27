import CourseItem from "./CourseItem";
import classes from "./CourseList.module.css";

const DUMMY_COURSES = [
	{
		id: "c1",
		name: "Programming Fundamentals",
	},
	{
		id: "c2",
		name: "Object-Oriented Programming",
	},
	{
		id: "c3",
		name: "Client-Side Web Development",
	},
	{
		id: "c4",
		name: "Data Structures and Algorithms",
	},
	{
		id: "c5",
		name: "Relational Database and SQL",
	},
	{
		id: "c6",
		name: "Windows Programming",
	},
	{
		id: "c7",
		name: "Advanced Database Programming",
	},
	{
		id: "c8",
		name: "Calculus I",
	},
	{
		id: "c9",
		name: "Calculus II",
	},
	{
		id: "c10",
		name: "Calculus III",
	},
];
const CourseList = () => {
	return (
		<div className={classes.container}>
			<h3>Related Courses</h3>
			<div className={classes.list}>
				{DUMMY_COURSES.map((course) => (
					<CourseItem key={course.id} name={course.name} />
				))}
			</div>
		</div>
	);
};

export default CourseList;
