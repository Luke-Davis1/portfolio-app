import profImage from "../../assets/luke_davis_no_background.png";
import classes from "./HeadShot.module.css";
const HeadShot = () => {
	return (
		<div className={classes.container}>
			<div className={classes.content}>
				<div className={classes.imgContainer}>
					<img
						className={classes["image"]}
						src={profImage}
						alt="Luke Davis Head Shot"
					/>
				</div>
				<div className={classes.summary}>
					<h2>My Story</h2>
					<p>
						Hey there! I'm pursuing dual majors in Computer Science and
						Computational Statistics & Data Science at Weber State University,
						with a minor in Web Development. Passionate about learning new
						technologies and programming languages independently, my aim is to
						excel as a Software Engineer, integrating technical skills with
						innovative problem-solving. I actively engage in personal projects
						to apply and expand my knowledge, fostering continuous growth in
						this dynamic field.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeadShot;
