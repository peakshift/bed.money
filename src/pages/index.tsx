import React from "react";
import { PageProps, Link } from "gatsby";

import Title from "@/components/Title";

const Home = (props) => {
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
						How do people in
						<span id="random--country" className="highlight">
							Rwanda
						</span>
						<br />
						store and move money?
					</h2>
					<p className="lead mb0">
						This is an initiative to
						<strong>
							collect stories of how people interact with money in different
							parts of the world
						</strong>
						so as designers and developers we may do better
						<strong>to understand the difficulties people face</strong> with its
						<strong>access and use</strong>, and how to make experiences that
						fit
						<strong>Bitcoin as a global money system</strong> in their daily
						lives.
					</p>
				</header>
			</div>
			<div id="page-mid">
				<div className="block block--personas">
					<section className="mb0">
						<h3>Rwanda</h3>
						<div className="feature">
							<h4>Environment</h4>
							<p>
								There is currently a push for Rwandans to go cashless —
								especially given the COVID19 pandemic, and the risks of people
								making exchanges in close proximity.
							</p>
						</div>
						<h4 className>Personas</h4>
					</section>
					<div className="personas">
						<div className="personas__scroller">
							<blockquote className="personas__mention">
								<p className="mt0 mb1">
									<strong>
										<small>PERSONA D9C7</small>
									</strong>
									<br />
									<a href="/personas/1">Time is money, but stay frugal.</a>
								</p>
								<time className="mb0 mt0">
									<span className="tag tag--primary">📍 Rwanda</span>&nbsp;
									<span className="tag tag--primary">🏦 Bank</span>&nbsp;
									<span className="tag tag--primary">💸 Mobile Money</span>
									&nbsp;
									<span className="tag tag--primary">💳 Debit Card</span>&nbsp;
									<span className="tag tag--primary">📱 Android</span>&nbsp;
									<span className="tag tag--primary">💻 Desktop/Laptop</span>
									&nbsp;
									<span className="tag tag--primary">
										☁️ Google Drive (free)
									</span>
								</time>
							</blockquote>
							<blockquote className="personas__mention">
								<p className="mt0 mb1">
									<strong>
										<small>PERSONA DBEA</small>
									</strong>
									<br />
									<a href="/personas/2">
										Cash is king, but times are changing.
									</a>
								</p>
								<time className="mb0 mt0">
									<span className="tag tag--primary">📍 Rwanda</span>&nbsp;
									<span className="tag tag--primary">🏦 Bank</span>&nbsp;
									<span className="tag tag--primary">💸 Mobile Money</span>
									&nbsp;
									<span className="tag tag--primary">📱 Android</span>&nbsp;
									<span className="tag tag--primary">💻 Desktop/Laptop</span>
									&nbsp;
									<span className="tag tag--primary">
										☁️ Google Drive (free)
									</span>
									&nbsp;
								</time>
							</blockquote>
							<blockquote className="personas__mention">
								<p className="mt0 mb1">
									<strong>
										<small>PERSONA 23C0</small>
									</strong>
									<br />
									<a href="/personas/3">
										Money is my favorite topic to talk about.
									</a>
								</p>
								<time className="mb0 mt0">
									<span className="tag tag--primary">📍 Rwanda</span>&nbsp;
									<span className="tag tag--primary">🏦 Bank</span>&nbsp;
									<span className="tag tag--primary">💸 Mobile Money</span>
									&nbsp;
									<span className="tag tag--primary">📱 Android</span>&nbsp;
									<span className="tag tag--primary">💻 Desktop/Laptop</span>
									&nbsp;
									<span className="tag tag--primary">
										☁️ Google Drive (free)
									</span>
									&nbsp;
								</time>
							</blockquote>
							<blockquote className="personas__mention">
								<p className="mt0 mb1">
									<strong>
										<small>PERSONA 0x00</small>
									</strong>
									<br />
									<em>More Comming Soon...</em>
								</p>
								<time className="mb0 mt0">
									<span className="tag tag--primary">📍 Rwanda</span>&nbsp;
									<span style={{ opacity: 0 }} className="tag tag--primary">
										🏦 Bank
									</span>
									&nbsp;
									<span style={{ opacity: 0 }} className="tag tag--primary">
										💸 Mobile Money
									</span>
									&nbsp;
									<span style={{ opacity: 0 }} className="tag tag--primary">
										💳 Debit Card
									</span>
									&nbsp;
									<span style={{ opacity: 0 }} className="tag tag--primary">
										📱 Android
									</span>
									&nbsp;
									<span style={{ opacity: 0 }} className="tag tag--primary">
										💻 Desktop/Laptop
									</span>
									&nbsp;
									<span style={{ opacity: 0 }} className="tag tag--primary">
										☁️ Google Drive (free)
									</span>
								</time>
							</blockquote>
						</div>
					</div>
					<section className="mb3">
						<h4 className="mb0">Money Services</h4>
						<h5 className="mt0">Local/Regional</h5>
						<article className="entity mt0">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/airtel-money.jpg" />
								</figure>
								<div className="entity__title">
									<h4>
										<a
											href="https://www.airtel.co.rw/airtel_money"
											target="_blank"
										>
											Airtel Money
										</a>
									</h4>
									<p>MobileMoney</p>
								</div>
							</div>
						</article>
						<article className="entity">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/mtn.png" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://www.mtn.co.rw/momo/" target="_blank">
											MTN MoMo
										</a>
									</h4>
									<p>MobileMoney</p>
								</div>
							</div>
						</article>
						<article className="entity">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/nokanda.png" />
								</figure>
								<div className="entity__title">
									<h4>
										<a
											href="https://play.google.com/store/apps/details?id=com.hexakomb.nokanda&hl=en_US"
											target="_blank"
										>
											Nokanda
										</a>
									</h4>
									<p>Mobile App</p>
								</div>
							</div>
						</article>
						<h5 className="mb0">Global Companies</h5>
						<article className="entity mt0">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/western-union.jpg" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://westernunion.com" target="_blank">
											Western Union
										</a>
									</h4>
									<p>Remittance</p>
								</div>
							</div>
						</article>
						<article className="entity">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/moneygram.png" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://moneygram.com" target="_blank">
											Moneygram
										</a>
									</h4>
									<p>Remittance</p>
								</div>
							</div>
						</article>
					</section>
				</div>
				<div className="block">
					<section className="mb3">
						<h3>Eastern Caribbean</h3>
						<div className="feature">
							<h4>Environment</h4>
							<p>
								The Eastern Caribbean Central Bank has launched a pilot program
								for a digital version of the Eastern Caribbean Digital Dollar
								(XCD) in 5 island nations; Antigua and Barbuda, Grenada, Saint
								Lucia and St. Kitts.
							</p>
							{/*
					<h5 class="mb0">Currency</h5>
					<h6 class="mt0 mb0">Eastern Caribbean Dollar (XCD)</h6>
					<p>...</p>
					<h6 class="mt0 mb0">Digitial Eastern Caribbean Dollar (DXCD)</h6>
					<p>...</p>
*/}
						</div>
						<h4 className="mb0">Money Services</h4>
						<h5 className="mt0">Local/Regional</h5>
						<article className="entity mt0">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/mmoney.jpg" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://mmoneybb.com" target="_blank">
											mMoney
										</a>
									</h4>
									<p>Mobile App</p>
								</div>
							</div>
						</article>
						<article className="entity">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/pennypinch.png" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://mypennypinch.com" target="_blank">
											Penny Pinch
										</a>
									</h4>
									<p>Mobile App</p>
								</div>
							</div>
						</article>
						<article className="entity">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/squeeze-cash.jpg" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://squeeze.cash" target="_blank">
											Squeeze.Cash
										</a>
									</h4>
									<p>Mobile App</p>
								</div>
							</div>
						</article>
						<h5 className="mb0">Global Companies</h5>
						<article className="entity mt0">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/western-union.jpg" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://westernunion.com" target="_blank">
											Western Union
										</a>
									</h4>
									<p>Remittance</p>
								</div>
							</div>
						</article>
						<article className="entity">
							<div className="entity__header">
								<figure className="entity__photo">
									<img src="/assets/i/logos/moneygram.png" />
								</figure>
								<div className="entity__title">
									<h4>
										<a href="https://moneygram.com" target="_blank">
											Moneygram
										</a>
									</h4>
									<p>Remittance</p>
								</div>
							</div>
						</article>
					</section>
				</div>
			</div>
			<div id="page-bottom">
				<footer>
					<p className="muted">Copyright © 2020 — Peak Shift Ltd.</p>
				</footer>
			</div>
		</div>
	);
};

export default Home;
