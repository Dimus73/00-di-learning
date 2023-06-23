import { Link } from 'react-router-dom'
const Menu = () => {

	return (
		<>
			<nav>
					<div class="nav-wrapper red darken-3-wrapper">
						<div className="container">
							<a href="#" class="brand-logo">Logo</a>
							<ul id="nav-mobile" class="right hide-on-med-and-down">
								<li><Link to="/">Home</Link></li>
								<li><Link to="/about">About</Link></li>
								<li><Link to="/contact">Contact</Link></li>
							</ul>
						</div>
					</div>
				</nav>
		</>
	)
}

export default Menu