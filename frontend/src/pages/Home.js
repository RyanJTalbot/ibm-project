import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
// import { Link } from 'react-router-dom';
// import About from '../components/About';
import Footer from '../components/Footer';

export default function Home() {
	return (
		<>
			<Hero>
				<Banner title='The name of our App??'>
					{/* <Link to='/providers' className='btn-primary'>
						Providers
					</Link> */}
					{/* <nav>
						<Link to='/'>Home</Link> |{' '}
					</nav> */}
					<h1>HI</h1>
				</Banner>
			</Hero>
			{/* <About /> */}
			<Footer />
		</>
	);
}
