import CourseItem from "./CourseItem";
import classes from "./CourseList.module.css";

const DUMMY_COURSES = [
	{
		id: "c1",
		name: "Data Structures and Algorithms",
	},
	{
		id: "c2",
		name: "Object-Oriented Programming (C++)",
	},
	{
		id: "c3",
		name: "Software Engineering",
	},
	{
		id: "c4",
		name: "Database programming",
	},
	{
		id: "c5",
		name: "Networking Fundamentals/Design",
	},
	{
		id: "c6",
		name: "Client Side Web Development/Frameworks",
	},
	{
		id: "c7",
		name: "Applied Statistics",
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
