import ReactDOM from "react-dom/client";

const Header = () => {
	return (
		<nav className="header">
			<div className="logo-container">
				<img
					src="data:image/jpeg;base64,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"
					className="logo"
					alt="Logo"
				/>
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
};

const RestaurantCard = () => {
	return (
		<div className="restaurant-card">
			<img
				src="https://theplantbasedschool.com/wp-content/uploads/2023/01/Chana-masala-12.jpg"
				alt="Restaurant"
				className="restaurant-img"
			/>
			<h3>Restaurant Name</h3>
			<p>Cusines</p>
			<p>Location</p>
			<p>Delivery Time</p>
			<p>Rating</p>
		</div>
	);
};

const Body = () => {
	return (
		<main className="body">
			<div className="search-container">
				<input placeholder="Search" />
				<button className="search-button">Search</button>
			</div>
			<div className="restaurant-container">
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
				<RestaurantCard />
			</div>
		</main>
	);
};

const Footer = () => {
	return (
		<footer className="footer">
			<small>Copyright &copy; 2025 Bhojanam. All rights reserved.</small>
		</footer>
	);
};

function App() {
	return (
		<>
			<Header />
			<Body />
			<Footer />
		</>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
