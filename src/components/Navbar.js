import React from 'react';

function Navbar() {
	return (
		<div>
			<nav className='navbar'>
				<ul>
					<li className='nav-item'>
						<a href=''>
							<strong>Calculator</strong>
						</a>
					</li>
					<li className='nav-item'>
						<a href=''>Home</a>
					</li>
					<li className='nav-item'>
						<a href=''>Contact</a>
					</li>
					<li className='nav-item'>
						<a href=''>About Us</a>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default Navbar;
