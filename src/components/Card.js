import React from 'react';
import './Card.css'

const Card = ({name, email, id}) => {
	return(
		<div className="roboBody grow">
			<img src={`https://robohash.org/${id}?200*200`} alt="Robots" />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
			</div>
		</div>
	);
  
}
export default Card;