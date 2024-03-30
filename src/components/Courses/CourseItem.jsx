import Card from "../UI/Card";
import classes from "./CourseItem.module.css";

const CourseItem = (props) => {
	return (
		<Card className={classes["course-item"]}>
			<h4>{props.name}</h4>
		</Card>
	);
};

export default CourseItem;
