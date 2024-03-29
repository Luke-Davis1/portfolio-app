import { NavLink } from "react-router-dom";

function PortfolioNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to="/portfolio"
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
							end
						>
							All Projects
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default PortfolioNavigation;
