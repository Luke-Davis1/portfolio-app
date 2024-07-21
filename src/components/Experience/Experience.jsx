import classes from "./Experience.module.css";
const Experience = () => {
	return (
		<div className={classes.wrapper}>
			<h3>Experience</h3>
			<div className={classes.container}>
				<div className={classes["experience-item"]}>
					<h4>TECHNICAL INTERN</h4>
					<ul>
						<li>
							Spearheaded implementation of Playwright's parallel processing and
							orchestrated Azure DevOps multi-stage setup, achieving a 75%
							reduction in front-end automation test runtime.
						</li>
						<li>
							Developed and maintained 15+ frontend automation scripts using
							Playwright and JavaScript, covering critical user scenarios such
							as data entry, search functionalities, and deletion operations.
						</li>
						<li>
							Implemented 10+ backend automation scripts in Java to validate 40+
							API endpoints, ensuring data integrity and seamless communication
							between frontend and backend systems.
						</li>
					</ul>
				</div>
				<div className={classes["experience-item"]}>
					<h4>WEB/APPLICATION DEVELOPER</h4>
					<ul>
						<li>
							Developed JavaScript modules to integrate and parse data from
							multiple third-party APIs, significantly improving data retrieval
							times for real-time updates and dynamic content display.
						</li>
						<li>
							Collaborated with professors specializing in web development to
							implement SEO strategies, resulting in a 40% increase in organic
							search traffic.
						</li>
						<li>
							Utilized programming fundamentals to troubleshoot and resolve
							technical issues, ensuring optimal performance and usability of
							developed websites.
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Experience;
