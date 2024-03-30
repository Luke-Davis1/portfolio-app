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
						Since 2021, I have been attending Weber State University pursuing
						two degrees. The first is in Computer Science with a minor in Web
						Development and the second is Computational Statistics and Data
						Science. I held a role as a Web Developer for Weber State from May
						2022 - February 2024. I helped create two websites using the Wix
						Content Management System with some Javascript programming mixed in
						to work with APIs and the DOM. During the summer of 2024, I will
						take on the role of a Quality Assurance Engineer where I will gain
						many practical skills in testing, automation, reporting and
						teamwork. After the internship has ended, I will return to Weber
						State in the fall where I will continue my studies.
					</p>
				</div>
			</div>
		</div>
	);
};

export default HeadShot;
