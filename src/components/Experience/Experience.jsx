import classes from "./Experience.module.css";
const Experience = () => {
	return (
		<div className={classes.wrapper}>
			<h3>Experience</h3>
			<div className={classes.container}>
				<div className={classes["experience-item"]}>
					<h4>WEB DEVELOPER (2 years)</h4>
					<ul>
						<li>Developed two websites using Wix Content Management system</li>
						<li>
							Implemented third party libraries and APIs to populate tables and
							calendars
						</li>
						<li>
							Created Custom elements to allow music to be played on website
							from radio station
						</li>
						<li>
							Worked on both front-end user interface and back-end database
						</li>
					</ul>
				</div>
				<div className={classes["experience-item"]}>
					<h4>STUDENT (3 years)</h4>
					<ul>
						<li>
							Obtained training and practice in multiple programming languages
						</li>
						<li>Maintained a 4.0 GPA</li>
						<li>
							Double majoring in Computer Science and Computational Statistics
							and Data Science
						</li>
						<li>
							Mentored by faculty in both the Math and Computer Science
							Department
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Experience;
