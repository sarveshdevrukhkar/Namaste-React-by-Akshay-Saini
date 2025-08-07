import RestaurantCard from "./RestaurantCard";
import { resDataList } from "../utils/mockData";
import { useState } from "react";

export default function Body() {
	// const [restaurantOfList, setRestaurantOfList] = useState(resDataList); // 1. Method One

	// 2. Method Two
	const useStateArray = useState(resDataList);
	// const [restaurantOfList, setRestaurantOfList] = useStateArray; // Another way to destructure on fly.

	const restaurantOfList = useStateArray[0];
	const setRestaurantOfList = useStateArray[1];

	/* These 2 methods are same. */

	return (
		<main className="body">
			<div className="filter-container">
				<button
					className="filter-btn"
					onClick={() => {
						const filteredData = restaurantOfList.filter((restaurant) => restaurant.info.avgRating > 4.5);
						setRestaurantOfList(filteredData);
					}}>
					Top Rated Restaurant
				</button>
			</div>
			<div className="restaurant-container">
				{restaurantOfList.map((restaurant) => (
					<RestaurantCard key={restaurant.info.id} resData={restaurant} />
				))}
			</div>
		</main>
	);
}
