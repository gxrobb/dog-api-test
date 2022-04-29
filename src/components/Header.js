import React from "react";
import YoutubeEmbed from "./YoutubeEmbed";
export default function Header() {

	return (
		<header>
			<nav>
				<h2 className="hiddenMobile">Dog App</h2>
				<h2 className="hiddenDesktop">Dog's R Us</h2>
				<ul>
					<li><a href="/#">Home</a></li>
					<li><a href="/#">About</a></li>
					<li><a href="/#">Contact</a></li>
				</ul>
			</nav>
			<section className="heroSection">
				<div className="loremIpsumWrapper">
					<h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
				</div>
				<div className="youtubeWrapper">
					<YoutubeEmbed embedId="jP8iCuXeM3g" />
				</div>
			</section>
		</header>
	)
}
