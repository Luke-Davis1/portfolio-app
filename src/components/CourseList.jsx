import CourseItem from "./CourseItem";

const DUMMY_COURSES = [
	{
		id: "c1",
		name: "CS 1400 - Programming Fundamentals (Java)",
	},
	{
		id: "c2",
		name: "CS 1410 - Object-Oriented Programming (C++)",
	},
	{
		id: "c3",
		name: "CS 2130 - Client-Side Web Development (HTML, CSS, JS) ",
	},
	{
		id: "c4",
		name: "CS 2420 - Data Structures and Algorithms (C++)",
	},
	{
		id: "c5",
		name: "CS 2550 - Relational Database and SQL",
	},
	{
		id: "c6",
		name: "CS 3280 - Windows Programming (C#)",
	},
	{
		id: "c7",
		name: "CS 3550 - Advanced Database Programming",
	},
	{
		id: "c8",
		name: "MATH 1210 - Calculus I",
	},
	{
		id: "c9",
		name: "MATH 1220 - Calculus II",
	},
	{
		id: "c10",
		name: "MATH 2210 - Calculus III (Multi-variable Calculus)",
	},
];
const CourseList = () => {
	return (
		<>
			<h3>Related Courses</h3>
			<ul>
				{DUMMY_COURSES.map((course) => (
					<CourseItem key={course.id} name={course.name} />
				))}
			</ul>
		</>
	);
};

export default CourseList;
