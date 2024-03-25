import Card from "./UI/Card";
import classes from "./SkillItem.module.css";
const SkillItem = (props) => {
	return (
		<Card className={classes.item}>
			<h4>{props.name}</h4>
			<p>{props.description}</p>
		</Card>
	);
};

export default SkillItem;
