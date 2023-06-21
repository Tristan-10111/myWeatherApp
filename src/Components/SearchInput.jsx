import React, { useState } from "react";
import { UilSearch } from "@iconscout/react-unicons";

function SearchInput({ setQuery }) {
	const [city, setCity] = useState("");

	const handleSearchClick = () => {
		if (city !== "") setQuery({ q: city });
	};
	return (
		<div className='search m-3 d-flex mx-5'>
			<input
				type='text'
				className='input'
				placeholder='Enter your city'
				value={city}
				onChange={(e) => setCity(e.target.value)}
			/>
			<button
				className='btn btn-secondary'
				type='button'
				onClick={handleSearchClick}>
				<UilSearch size='30' />
			</button>
		</div>
	);
}

export default SearchInput;
