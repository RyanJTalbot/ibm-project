// import 'bootstrap/dist/css/bootstrap.min.css';
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function SearchProvider() {
// 	const [search, setSearch] = useState('');
// 	const [zip, setZip] = useState([]);

// 	// On Page load display all records
// 	const loadProviderDetail = async () => {
// 		var response = fetch('http://localhost:8000/provider')
// 			.then(function (response) {
// 				return response.json();
// 			})
// 			.then(function (myJson) {
// 				setZip(myJson);
// 			});
// 	};
// 	useEffect(() => {
// 		loadProviderDetail();
// 	}, []);

// 	// Search Records here
// 	const searchZip = () => {
// 		axios
// 			.get(`http://localhost:8000/provider?zip=${search}`)
// 			.then((response) => {
// 				setZip(response.data);
// 			});
// 	};

// 	const loadZipAgain = () => {
// 		var response = fetch('http://localhost:8000/provider')
// 			.then(function (response) {
// 				return response.json();
// 			})
// 			.then(function (myJson) {
// 				setZip(myJson);
// 			});
// 	};
// 	useEffect(() => {
// 		loadZipAgain();
// 	}, []);

// 	return (
// 		<section>
// 			<div class='container'>
// 				<h4 className='mb-3 text-center mt-4'>Search Providers</h4>
// 				<div class='row mt-3'>
// 					<div class='col-sm-11'>
// 						<div class='input-group mb-4 mt-3'>
// 							<div class='form-outline'>
// 								<input
// 									type='text'
// 									id='form1'
// 									onKeyDown={loadZipAgain}
// 									onKeyUp={searchZip}
// 									onChange={(e) => setSearch(e.target.value)}
// 									class='form-control'
// 									placeholder='Search Provider Here'
// 									style={{ backgroundColor: '#ececec' }}
// 								/>
// 							</div>
// 							{/* <button type="button" onClick={searchRecords}  class="btn btn-success">
//             <i class="fa fa-search" aria-hidden="true"></i>
//         </button> */}
// 						</div>
// 						<table class='table table-hover  table-striped table-bordered ml-4 '>
// 							<thead>
// 								<tr>
// 									<th>Company</th>
// 									<th>Address</th>
// 									<th>City</th>
// 									<th>Zip</th>
// 									<th>Phone Number</th>
// 									<th>Website:</th>
// 								</tr>
// 							</thead>
// 							<tbody>
// 								{zip.map((zip) => (
// 									<tr>
// 										<td>{zip.Company}</td>
// 										<td>{zip.Address}</td>
// 										<td>{zip.City}</td>
// 										<td>{zip.Phone}</td>
// 										<td>{zip.Website}</td>
// 										{/* <td>
// 											<img
// 												class='img-fluid'
// 												src={'/images/' + zip.emp_image}
// 												style={{ maxWidth: '40px' }}
// 												alt=''
// 											/>
// 										</td> */}
// 									</tr>
// 								))}
// 							</tbody>
// 						</table>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// }

// export default SearchProvider;

import React, { Component } from 'react';
import axios from 'axios';

class SearchProvider extends Component {
	constructor() {
		super();

		this.state = {
			providers: [],
		};
	}

	componentDidMount() {
		axios.get('http://localhost:8000/provider').then((response) => {
			this.setState({
				providers: response.data,
			});
		});
	}

	render() {
		let providers = this.state.providers.map((provider, index) => {
			return (
				<div>
					<ul>
						<li key='{provider.index}'>
							<h1>Company: {this.state.provider}</h1>
							{/* <h1>Address: {this.state.provider.Address}</h1>
							<h1>City: {this.state.provider.City}</h1>
							<h1>Zip: {this.state.provider.zip}</h1>
							<h1>Website: {this.state.provider.Website}</h1> */}
						</li>
					</ul>
				</div>
			);
		});
		return (
			<div>
				<h1>Providers</h1>
				{providers}
			</div>
		);
	}
}

export default SearchProvider;
