// import React, { useState } from 'react';
// import axios from 'axios';
// import { Card } from 'react-bootstrap';

// export default function Search() {
// 	return (
// 		<form onSubmit={handleSubmit}>
// 			<div className='card-header main-search'>
// 				<div className='row'>
// 					<div className='col-8 col-md-8 col-xl-8'>
// 						<input
// 							onChange={handleChange}
// 							className='AutoFocus form-control'
// 							placeholder='Type something...'
// 							type='text'
// 						/>
// 					</div>
// 					<div className='ml-auto'>
// 						<input
// 							type='submit'
// 							value='Search'
// 							className='btn btn-primary search-btn'
// 						/>
// 					</div>
// 				</div>
// 			</div>
// 			<div className='container'>
// 				<div className='row'>
// 					{result.map((book) => (
// 						<div key={book.id} className='col-lg-4'>
// 							<Card className='card' style={{ marginTop: '10px' }}>
// 								<Card.Img
// 									variant='top'
// 									src={
// 										book.volumeInfo.imageLinks !== undefined
// 											? book.volumeInfo.imageLinks.thumbnail
// 											: ''
// 									}
// 									alt={book.title}
// 								/>
// 								<Card.Body src={book.volumeInfo.title}>
// 									<h5 className='card-title'>{book.volumeInfo.title}</h5>
// 									<h6 className='card-text'>
// 										By: {book.volumeInfo.authors}
// 										<hr />
// 										Publisher: {book.volumeInfo.publisher}
// 									</h6>
// 									<a
// 										href={book.volumeInfo.previewLink}
// 										className='btn btn-primary'
// 									>
// 										Know more
// 									</a>
// 								</Card.Body>
// 							</Card>
// 						</div>
// 					))}
// 				</div>
// 			</div>
// 		</form>
// 	);
// }
