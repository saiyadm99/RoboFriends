import React from "react";
import './Card.css';

const SearchBox = ({searchfield, searchChange}) => {
	return(
		<div className='pa2'>
			<input 
			className ='pa3 b--green bg-lightest-blue'
			type='search' 
			placeholder='search robots'
			onChange={searchChange} />
		</div>
	);
}

export default SearchBox;






