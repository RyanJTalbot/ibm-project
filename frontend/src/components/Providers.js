import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SearchProvider() {
	const [search, setSearch] = useState('');
	const [zip, setZip] = useState([]);

	// On Page load display all records
	const loadProviderDetail = async () => {
		var response = fetch('http://localhost:8000/provider')
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setZip(myJson);
			});
	};
	useEffect(() => {
		loadProviderDetail();
	}, []);

	// Search Records here
	const searchZip = () => {
		axios.get(`http://localhost:8000/provider/${search}`).then((response) => {
			setZip(response.data);
		});
	};

	const loadZipAgain = () => {
		var response = fetch('http://localhost:8000/provider')
			.then(function (response) {
				return response.json();
			})
			.then(function (myJson) {
				setZip(myJson);
			});
	};
	useEffect(() => {
		loadZipAgain();
	}, []);

	return (
		<section>
			<div class='container'>
				<h4 className='mb-3 text-center mt-4'>Search Providers</h4>
				<div class='row mt-3'>
					<div class='col-sm-11'>
						<div class='input-group mb-4 mt-3'>
							<div class='form-outline'>
								<input
									type='text'
									id='form1'
									onKeyDown={loadZipAgain}
									onKeyUp={searchZip}
									onChange={(e) => setSearch(e.target.value)}
									class='form-control'
									placeholder='Search Provider Here'
									style={{ backgroundColor: '#ececec' }}
								/>
							</div>
							{/* <button type="button" onClick={searchRecords}  class="btn btn-success">
            <i class="fa fa-search" aria-hidden="true"></i>
        </button> */}
						</div>
						<table class='table table-hover  table-striped table-bordered ml-4 '>
							<thead>
								<tr>
									<th>Company</th>
									<th>Address</th>
									<th>City</th>
									<th>Zip</th>
									<th>Phone Number:</th>
									<th>Website:</th>
								</tr>
							</thead>
							<tbody>
								{zip.map((name) => (
									<tr>
										<td>{name.first_name}</td>
										<td>{name.last_name}</td>
										<td>{name.email}</td>
										<td>{name.phone}</td>
										<td>{name.salary}</td>
										<td>
											<img
												class='img-fluid'
												src={'/images/' + name.emp_image}
												style={{ maxWidth: '40px' }}
												alt=''
											/>
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</section>
	);
}

export default SearchProvider;
