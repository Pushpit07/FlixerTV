import React, { useState, useEffect } from "react";
import "./Nav.css";

function Nav() {
	const [show, setShow] = useState(false);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else setShow(false);
		});
		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);

	return (
		<div className={`nav ${show && "nav_black"}`}>
			<img className="nav_logo" src="https://myflixertv.to/images/group_1/theme_7/logo.png" alt="Logo" />
			<img
				className="nav_avatar"
				src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1bdc9a33850498.56ba69ac2ba5b.png"
				alt="Avatar"
			/>
		</div>
	);
}

export default Nav;
