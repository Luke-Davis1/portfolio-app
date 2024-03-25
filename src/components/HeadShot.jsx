import profImage from "../assets/luke_davis_headshot.jpg";
import classes from "./HeadShot.module.css";
const HeadShot = () => {
	return (
		<div className={classes.content}>
			<div className={classes.imgContainer}>
				<img
					className={classes["circle-image"]}
					src={profImage}
					alt="Luke Davis Head Shot"
				/>
			</div>
			<div className={classes.summary}>
				<h2>Luke Davis</h2>
				<p>Aspiring Software Engineer</p>
				<p>
					I am a Computer and Data Science student at Weber State University
					with an interest in Machine Learning and Artificial Intelligence. I
					have taken classes in Statistics, Computer Science and Web
					Development.
				</p>
			</div>
		</div>
	);
};

export default HeadShot;
