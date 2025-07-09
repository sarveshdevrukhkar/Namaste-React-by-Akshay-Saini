import RestaurantCard from "./RestaurantCard";
import { resDataList } from "../utils/mockData";
const a = 213;
export default function Body() {
    console.log(a);
	return (
		<main className="body">
			<div className="search-container">
				<input placeholder="Search" />
				<button className="search-button">Search</button>
			</div>
			<div className="restaurant-container">
				{resDataList.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</main>
	);
}
