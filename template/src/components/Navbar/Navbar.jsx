import React from 'react'
import { NavLink, Link } from 'react-router-dom'

import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

import "./navbar.css"


const navbarLinks = [
	{
		name: 'Home',
		link: '/'
	},
	{
		name: 'About',
		link: '/about'
	},
	{
		name: 'Contact',
		link: '/contact'
	},
]


function Navbar() {
	const [smallNavbar, setSmallNavbar] = React.useState(false)

	return (
		<nav className='navbar'>
			<div className='navbar__brand'>
				<Link to="/">milkiyd</Link>
			</div>

			<div className="navbar__links">
				{navbarLinks.map(link => (
					<NavLink
						key={link.name}
						to={link.link}
						className='navbar__link'
					>
						{link.name}
					</NavLink>
				))}
			</div>
			
			<div className="navbar--small__icon" onClick={() => setSmallNavbar(!smallNavbar)}>
				{smallNavbar ? <AiOutlineClose className='navbar--small__close-icon'/> : <GiHamburgerMenu className='navbar--small__hamburger-icon'/>}
			</div>

			{smallNavbar && (
				<div className="navbar--small">
					{navbarLinks.map(link => (
						<NavLink
							key={link.name}
							to={link.link}
							className='navbar--small__link'
						>
							{link.name}
						</NavLink>
					))}
				</div>
			)}

		</nav>
	)
}

export default Navbar