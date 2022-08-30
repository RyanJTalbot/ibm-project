import React, { Component } from 'react';
import loadingGif from '../images/two-arrows.gif';

export default class Loading extends Component {
	render() {
		return (
			<div className='loading'>
				<h4>Provider data loading...</h4>
				<img src={loadingGif} alt='' />
			</div>
		);
	}
}
