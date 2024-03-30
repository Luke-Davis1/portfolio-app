import PortfolioNavigation from "../Navigation/PortfolioNavigation";
import classes from "./PortfolioItem.module.css";
const PortfolioItem = ({ project }) => {
	return (
		<>
			<PortfolioNavigation />
			<article className={classes.project}>
				<img src={project?.image} alt={project.name} />
				<h1>{project.name}</h1>
				<h3>Description</h3>
				<p>{project.description}</p>
				<h3>Technologies</h3>
				<p>{project.technologies}</p>
				<menu className={classes.actions}>
					<a href={project.link} target="_blank">
						View Project
					</a>
				</menu>
			</article>
		</>
	);
};

export default PortfolioItem;
