import { LOGO_URL } from "../utils/constants";

export default function Header() {
	return (
		<nav className="header">
			<div className="logo-container">
				<img src={LOGO_URL} className="logo" alt="Logo" />
				<span className="logo-text">Bhojanam</span>
			</div>
			<div className="nav-items">
				<ul>
					<li>Home</li>
					<li>About Us</li>
					<li>Contact</li>
					<li>Cart</li>
				</ul>
			</div>
		</nav>
	);
}
