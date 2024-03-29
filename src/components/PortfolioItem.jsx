import PortfolioNavigation from "./PortfolioNavigation";
const PortfolioItem = ({ project }) => {
	return (
		<>
			<PortfolioNavigation />
			<article className={classes.project}>
				<img src={project?.image} alt={project.title} />
				<h1>{project.title}</h1>
				<p>{project.description}</p>
				<p>{project.technologies}</p>
				<menu className={classes.actions}>
					<a href={project.link}>Webpage</a>
				</menu>
			</article>
		</>
	);
};

export default PortfolioItem;
