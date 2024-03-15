import { ChangeEvent, useState } from "react";
import cities from "../data/cities.json";
export const PageWetter = () => {
	const [cityValue, setCityValue] = useState("mun");
	const getCity = (): string => {
		const cityName = cities.find((m) => m.value === cityValue)?.name;
		if (cityName) {
			return cityName;
		} else {
			return "City not found";
		}
	};

	const handleCityDropdownChange = (e: ChangeEvent<HTMLSelectElement>) => {
	const _cityValue = e.target.value;
	setCityValue(cityValue)
	};

	return (
		<>
			<h1> wetter page</h1>
			<form>
				<select
					value={cityValue}
					onChange={(e) => handleCityDropdownChange(e)}
				>
					<option>City</option>
					<option value="BR">Berlin</option>
					<option value="HAM">Hamburg</option>
				</select>
			</form>

			<div>
				<h2>{getCity()}</h2>
			</div>
		</>
	);
};
