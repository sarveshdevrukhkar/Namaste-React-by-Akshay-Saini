import { RESTAURANT_IMAGE_CDN_URL } from "../utils/constants";

export default function RestaurantCard(props) {
	const { resData } = props;
	const { cloudinaryImageId, name, cuisines, areaName, avgRating } = resData?.info;
    const { slaString } = resData?.info?.sla;

	return (
		<div className="restaurant-card">
			<img src={RESTAURANT_IMAGE_CDN_URL + cloudinaryImageId} alt="Restaurant" className="restaurant-img" />
			<h3>{name}</h3>
			<p>{cuisines.join(", ")}</p>
			<p>{areaName}</p>
			<p>{slaString}</p>
			<p>{avgRating}</p>
		</div>
	);
}
