import { React, useState } from 'react';
import TextField from '@mui/material/TextField';
import List from './List';
import '../App.css';

function Search() {
	const [inputText, setInputText] = useState('');
	let inputHandler = (e) => {
		//can set up test here?
		var lowerCase = e.target.value.toLowerCase();
		setInputText(lowerCase);
	};
	return (
		<div className='main'>
			<h1>Provider Search</h1>
			<div className='search'>
				<TextField
					id='outlined-basic'
					onChange={inputHandler}
					variant='outlined'
					fullWidth
					label='Search'
				/>
			</div>
			<List input={inputText} />
		</div>
	);
}

export default Search;
