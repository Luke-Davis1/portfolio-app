import { Link } from "react-router-dom";
import classes from "./Home.module.css";
const HomePage = () => {
	return (
		<>
			<div className={classes["page-container"]}>
				<div className={classes["centered-div"]}>
					<h2>
						Hi, my name is <span>Luke Davis</span>
					</h2>
					<h3>I'm becoming a Software Engineer</h3>
					<p>
						I'm a driven individual with a strong ambition to excel in the field
						of software engineering. <br />I thrive on challenges and am deeply
						passionate about continuous learning and innovation.
					</p>
				</div>
				<div className={classes["additional-content"]}>
					<Link to="/portfolio">
						<button type="button">Projects</button>
					</Link>
				</div>
			</div>
		</>
	);
};

export default HomePage;
