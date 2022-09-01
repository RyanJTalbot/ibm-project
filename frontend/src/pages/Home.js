// import React from 'react';
// import Hero from '../components/Hero';
// import Banner from '../components/Banner';
// // import { Link } from 'react-router-dom';
// // import About from '../components/About';
// import Footer from '../components/Footer';
// import Search from '../components/Search';

// export default function Home() {
// 	return (
// 		<>
// 			<Hero>
// 				<Banner title='Moodful'>
// 					{/* <Link to='/providers' className='btn-primary'>
// 						Providers
// 					</Link> */}
// 					{/* <nav>
// 						<Link to='/'>Home</Link> |{' '}
// 					</nav> */}
// 					<h1>HI</h1>
// 				</Banner>
// 				<Search />
// 			</Hero>
// 			{/* <About /> */}
// 			<Footer />
// 		</>
// 	);
// }
import SearchProvider from '../components/Providers';

function Home() {
	return (
		<div className='App'>
			<SearchProvider />
		</div>
	);
}

export default Home;
