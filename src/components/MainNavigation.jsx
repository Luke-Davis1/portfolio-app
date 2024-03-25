import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

function MainNavigation() {
	return (
		<header className={classes.header}>
			<nav>
				<ul className={classes.list}>
					<li>
						<NavLink
							to={""}
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/about"}
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							About
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/portfolio"}
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Portfolio
						</NavLink>
					</li>
					<li>
						<NavLink
							to={"/contact"}
							className={({ isActive }) =>
								isActive ? classes.active : undefined
							}
						>
							Contact
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default MainNavigation;
