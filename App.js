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

const resDataList = [
	{
		info: {
			id: "31803",
			name: "McDonald's",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/5/22/97e266e1-4225-4b1a-813a-a9d487acdb53_31803.JPG",
			locality: "Magnet Mall",
			areaName: "Bhandup West",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
			avgRating: 4.5,
			parentId: "630",
			avgRatingString: "4.5",
			totalRatingsString: "38K+",
			sla: {
				deliveryTime: 23,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "247438",
			name: "Domino's Pizza",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/14/d971d2b0-3891-4f46-b708-82e317ed7884_247438.JPG",
			locality: "Bhandup East",
			areaName: "Bhandup West",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
			avgRating: 4.1,
			parentId: "2456",
			avgRatingString: "4.1",
			totalRatingsString: "3.3K+",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 2.9,
				serviceability: "SERVICEABLE",
				slaString: "20-25 mins",
				lastMileTravelString: "2.9 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "28282",
			name: "Chinese Wok",
			cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
			locality: "Vishal Industries",
			areaName: "Bhandup West",
			costForTwo: "₹250 for two",
			cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
			avgRating: 4.2,
			parentId: "61955",
			avgRatingString: "4.2",
			totalRatingsString: "9.1K+",
			sla: {
				deliveryTime: 46,
				lastMileTravel: 4.1,
				serviceability: "SERVICEABLE",
				slaString: "45-50 mins",
				lastMileTravelString: "4.1 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "578577",
			name: "Bakingo-Cakes & Desserts",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/17/0cab21cb-a1da-4d2d-a348-4e770fbfe31a_578577.JPG",
			locality: "Powai",
			areaName: "IIT main gate Powai",
			costForTwo: "₹299 for two",
			cuisines: ["Bakery", "Desserts", "Beverages", "Snacks"],
			avgRating: 4.6,
			parentId: "3818",
			avgRatingString: "4.6",
			totalRatingsString: "2.5K+",
			sla: {
				deliveryTime: 30,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "43732",
			name: "The Belgian Waffle Co.",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/17/5100ccf3-ada3-4465-83f1-fc26eccf8371_43732.JPG",
			locality: "Chandra nagar HSL",
			areaName: "Bhandup West",
			costForTwo: "₹200 for two",
			cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
			avgRating: 4.6,
			veg: true,
			parentId: "2233",
			avgRatingString: "4.6",
			totalRatingsString: "11K+",
			sla: {
				deliveryTime: 38,
				lastMileTravel: 2.8,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "2.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "361263",
			name: "Wendy's Burgers",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/11/affbe8f8-562e-48ce-9e72-73fcb742b661_361263.JPG",
			locality: "Gamdevi Road",
			areaName: "Bhandup West",
			costForTwo: "₹400 for two",
			cuisines: ["Burgers", "American", "Fast Food", "Snacks"],
			avgRating: 4.4,
			parentId: "972",
			avgRatingString: "4.4",
			totalRatingsString: "4.4K+",
			sla: {
				deliveryTime: 40,
				lastMileTravel: 4.2,
				serviceability: "SERVICEABLE",
				slaString: "40-45 mins",
				lastMileTravelString: "4.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "244882",
			name: "NIC Ice Creams",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/d23098f4-4a93-4b16-a7ca-776e5ba8ea80_244882.JPG",
			locality: "New Sanjay Niwas",
			areaName: "Bhandup West",
			costForTwo: "₹120 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.7,
			veg: true,
			parentId: "6249",
			avgRatingString: "4.7",
			totalRatingsString: "3.8K+",
			sla: {
				deliveryTime: 32,
				lastMileTravel: 3.8,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "3.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "691016",
			name: "Kwality Walls Ice Cream and More",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/13/a510db8e-ef0a-48ca-b06d-5a39fe2943df_691016.JPG",
			locality: "Gamdevi Road",
			areaName: "Bhandup",
			costForTwo: "₹200 for two",
			cuisines: ["Ice Cream", "Desserts"],
			avgRating: 4.3,
			veg: true,
			parentId: "582",
			avgRatingString: "4.3",
			totalRatingsString: "204",
			sla: {
				deliveryTime: 33,
				lastMileTravel: 4.2,
				serviceability: "SERVICEABLE",
				slaString: "30-35 mins",
				lastMileTravelString: "4.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "197706",
			name: "Bikkgane Biryani",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/1/15/b416fc21-5ba7-468b-a7f6-a768dc90fe68_197706.jpg",
			locality: "Hanuman Road",
			areaName: "Powai",
			costForTwo: "₹400 for two",
			cuisines: [
				"Biryani",
				"Hyderabadi",
				"Andhra",
				"South Indian",
				"North Indian",
				"Mughlai",
				"Kebabs",
			],
			avgRating: 4.3,
			parentId: "5070",
			avgRatingString: "4.3",
			totalRatingsString: "12K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 3,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "3.0 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "466651",
			name: "EatFit",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/6/dc6d7bf3-97cd-4e73-83fd-aff89b38bd83_466651.jpg",
			locality: "Vikhroli West",
			areaName: "Powai",
			costForTwo: "₹250 for two",
			cuisines: [
				"Chinese",
				"Healthy Food",
				"Tandoor",
				"Pizzas",
				"North Indian",
				"Thalis",
				"Biryani",
			],
			avgRating: 4.4,
			parentId: "76139",
			avgRatingString: "4.4",
			totalRatingsString: "2.6K+",
			sla: {
				deliveryTime: 52,
				lastMileTravel: 5.5,
				serviceability: "SERVICEABLE",
				slaString: "50-55 mins",
				lastMileTravelString: "5.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "485061",
			name: "The Dessert Heaven - Pastry, Brownie and Cakes",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/7e142ec9-4a23-42b8-ad95-de254f7c75ac_485061.jpg",
			locality: "Park Site",
			areaName: "Near Veer Savarkar Marg",
			costForTwo: "₹200 for two",
			cuisines: ["Bakery", "Desserts", "Sweets", "Ice Cream"],
			avgRating: 4.5,
			veg: true,
			parentId: "506176",
			avgRatingString: "4.5",
			totalRatingsString: "497",
			sla: {
				deliveryTime: 46,
				lastMileTravel: 5.5,
				serviceability: "SERVICEABLE",
				slaString: "45-50 mins",
				lastMileTravelString: "5.5 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "27633",
			name: "Gopala's Veg Kitchen",
			cloudinaryImageId: "fcfb467ddbee643eefad3353ba2e9f14",
			locality: "Kanjurmarg West",
			areaName: "Bhandup West",
			costForTwo: "₹350 for two",
			cuisines: ["South Indian", "Biryani", "Chinese", "Desserts"],
			avgRating: 4.5,
			veg: true,
			parentId: "9204",
			avgRatingString: "4.5",
			totalRatingsString: "114K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 1.6,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "1.6 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "25553",
			name: "Subway",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/f4a08ddd-2ae3-44a3-a185-ea281843f45d_25553.jpg",
			locality: "Bhandup West",
			areaName: "Bhandup West",
			costForTwo: "₹350 for two",
			cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
			avgRating: 4.5,
			parentId: "2",
			avgRatingString: "4.5",
			totalRatingsString: "18K+",
			sla: {
				deliveryTime: 35,
				lastMileTravel: 3.8,
				serviceability: "SERVICEABLE",
				slaString: "35-40 mins",
				lastMileTravelString: "3.8 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "31477",
			name: "Oven Story Pizza",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2025/5/29/d759fbf4-9e2b-4555-8f81-7ffbde000efd_31477.jpg",
			locality: "Gamdevi Road",
			areaName: "Bhandup West",
			costForTwo: "₹400 for two",
			cuisines: ["Pizzas", "Pastas", "Italian", "Desserts", "Beverages"],
			avgRating: 4.3,
			parentId: "3534",
			avgRatingString: "4.3",
			totalRatingsString: "6.4K+",
			sla: {
				deliveryTime: 17,
				lastMileTravel: 4.2,
				serviceability: "SERVICEABLE",
				slaString: "15-20 mins",
				lastMileTravelString: "4.2 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "395337",
			name: "McDonald's Gourmet Burger Collection",
			cloudinaryImageId: "mriaylxzxbrh9tucrg48",
			locality: "Magnet Mall",
			areaName: "Bhandup",
			costForTwo: "₹600 for two",
			cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
			avgRating: 4.8,
			parentId: "10761",
			avgRatingString: "4.8",
			totalRatingsString: "331",
			sla: {
				deliveryTime: 19,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "15-20 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "298136",
			name: "Monginis Cake Shop",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/10/18/b6086ad1-9a11-43d8-82d3-4fc388b52ab8_298136.JPG",
			areaName: "Saraogi Estate",
			costForTwo: "₹300 for two",
			cuisines: ["Cakes & Pastries", "Bakery", "Desserts"],
			avgRating: 4.3,
			parentId: "8190",
			avgRatingString: "4.3",
			totalRatingsString: "531",
			sla: {
				deliveryTime: 17,
				lastMileTravel: 1.7,
				serviceability: "SERVICEABLE",
				slaString: "15-20 mins",
				lastMileTravelString: "1.7 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "390085",
			name: "NH1 Bowls - Highway To North",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/11/8/081dd4b7-ea89-4432-b9a8-8e709eb7844c_390085.jpg",
			locality: "Lal Bahadur Shastri Road",
			areaName: "Bhandup",
			costForTwo: "₹250 for two",
			cuisines: ["North Indian", "Punjabi", "Home Food"],
			avgRating: 4.6,
			parentId: "22452",
			avgRatingString: "4.6",
			totalRatingsString: "693",
			sla: {
				deliveryTime: 15,
				lastMileTravel: 2.4,
				serviceability: "SERVICEABLE",
				slaString: "10-20 mins",
				lastMileTravelString: "2.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "740383",
			name: "Hola Pasta - Fresh Gourmet Pasta",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/f2d8b46a-499b-4c6a-b4b9-60e4f602486a_740383.JPG",
			locality: "LBS road",
			areaName: "Bhandup West",
			costForTwo: "₹250 for two",
			cuisines: ["Pastas", "Italian", "Desserts", "Beverages"],
			avgRating: 4.4,
			parentId: "418135",
			avgRatingString: "4.4",
			totalRatingsString: "90",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 2.4,
				serviceability: "SERVICEABLE",
				slaString: "20-30 mins",
				lastMileTravelString: "2.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "692087",
			name: "BOOM - Sub Style Sandwiches",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/6/24/463f52f4-fc67-4df1-b4d9-10f512870663_692087.JPG",
			locality: "LBS road",
			areaName: "Bhandup West",
			costForTwo: "₹250 for two",
			cuisines: ["Snacks", "Indian", "Desserts"],
			avgRating: 4.5,
			parentId: "401169",
			avgRatingString: "4.5",
			totalRatingsString: "233",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 2.4,
				serviceability: "SERVICEABLE",
				slaString: "20-30 mins",
				lastMileTravelString: "2.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
	{
		info: {
			id: "391032",
			name: "ZAZA Mughal Biryani",
			cloudinaryImageId:
				"RX_THUMBNAIL/IMAGES/VENDOR/2024/9/17/aacd7e9e-757c-4fc2-80fe-4b2e78daed31_391032.jpg",
			locality: "Lal Bahadur Shastri Road",
			areaName: "Bhandup",
			costForTwo: "₹250 for two",
			cuisines: ["Biryani", "North Indian", "Awadhi"],
			avgRating: 4.4,
			parentId: "22473",
			avgRatingString: "4.4",
			totalRatingsString: "551",
			sla: {
				deliveryTime: 25,
				lastMileTravel: 2.4,
				serviceability: "SERVICEABLE",
				slaString: "20-30 mins",
				lastMileTravelString: "2.4 km",
				iconType: "ICON_TYPE_EMPTY",
			},
		},
	},
];

const RestaurantCard = (props) => {
	const { resData } = props;

	const { cloudinaryImageId, name, cuisines, areaName, avgRating } = resData?.info;
	const { slaString } = resData?.info?.sla;

	return (
		<div className="restaurant-card">
			<img
				src={
					"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
					cloudinaryImageId
				}
				alt="Restaurant"
				className="restaurant-img"
			/>
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<p>{areaName}</p>
			<p>{slaString}</p>
			<p>{avgRating}</p>
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
				{resDataList.map((restaurant) => (
					<RestaurantCard
						key={restaurant.info.id}
						resData={restaurant}
					/>
				))}
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
