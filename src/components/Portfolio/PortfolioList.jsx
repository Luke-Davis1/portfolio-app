import { Link } from "react-router-dom";
import classes from "./PortfolioList.module.css";
const PortfolioList = ({ projects }) => {
	return (
		<>
			<h1 className={classes.heading}>My Projects</h1>
			<div className={classes.portfolio}>
				<ul className={classes.list}>
					{projects.map((project) => (
						<li key={project.id} className={classes.item}>
							<Link to={project.id}>
								<img src={project.image} alt={project.name} />
								<div className={classes.content}>
									<h2>{project.name}</h2>
									<p>Technologies: {project.technologies}</p>
								</div>
							</Link>
						</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default PortfolioList;
