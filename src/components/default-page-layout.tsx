import React from "react";
import "@/assets/css/master.css";
import "@/assets/css/layout.css";
import "@/assets/css/widgets.css";
import "@/assets/css/personas.css";
import "@/assets/css/entity.css";
import "@/assets/css/interview.css";

const Template = ({ children }) => {
	return (
		<div>
			<div id="page-top">
				<header id="masthead">
					<a id="logo" href="/">
						🛏
						<br />
						💵
					</a>
					<h2 className="page-title">
						How do people in&nbsp;
						<span id="random--country" className="highlight">
							Rwanda
						</span>
						<br />
						store and move money?
					</h2>
					<p className="lead mb0">
						This is an initiative to&nbsp;
						<strong>
							collect stories of how people interact with money in different
							parts of the world
						</strong>
						&nbsp; so as designers and developers we may do better&nbsp;
						<strong>to understand the difficulties people face</strong> with
						its&nbsp;
						<strong>access and use</strong>, and how to make experiences
						that&nbsp; fit&nbsp;
						<strong>Bitcoin as a global money system</strong> in their
						daily&nbsp; lives.
					</p>
				</header>
			</div>
			<div id="page-mid">{children}</div>
			<div id="page-bottom">
				<footer>
					<p className="muted">Copyright &copy; 2020 &mdash; Peak Shift Ltd.</p>
				</footer>
			</div>
		</div>
	);
};

export default Template;
