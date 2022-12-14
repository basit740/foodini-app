import React from 'react';
import classes from '../../styles/navbar.module.css';
import logo from '../../assets/logo.png';
import Hamburger from './Hamburger';

import { useDispatch } from 'react-redux';
import { open } from '../../store/reducers/sidebarSlice';
const Navbar = () => {
	const dispatch = useDispatch();
	return (
		<nav className={`${classes.navbar} container-fluid`}>
			<div className={`${classes['navbar-container']} container`}>
				<div className={`${classes['menu-and-logo']}`}>
					<Hamburger onClick={() => dispatch(open())} />
					<div className={classes.logo}>
						<img src={logo} alt='brand logo' />
					</div>
				</div>
				<div className={`${classes.actions}`}>
					<button className={`${classes['btn-signin']} btn`}>Sign In</button>
					<button className={`${classes['btn-register']} btn btn-primary`}>
						Register
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
