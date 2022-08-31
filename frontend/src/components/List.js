import { React, useState } from 'react';
import data from './ListData.json';

function List(props) {
	// create new array filtering original array
	const filteredData = data.filter((el) => {
		// if no input then return the original
		if (props.input === '') {
			return el;
		}
		// return the item which contains user input
		else {
			return el.text.toLowerCase().includes(props.input);
		}
	});
	return (
		<ul>
			{filteredData.map((item) => (
				<li key={item.id}>{item.text}</li>
			))}
		</ul>
	);
}

export default List;
