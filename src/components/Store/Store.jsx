import { Container } from "@mui/system";
import React from "react";
import "./Store.scss";
const Store = (props) => {
	return (
		<section className="section-store">
			<Container>
				<div className="filter-wrapper">
					<label className="filter__search">
						<div className="filter__seach_text">Lookiing for</div>
						<input type="text" placeholder="start typing here..." className="filter__search_input" />
					</label>
					<label className="filter__btns">
						Or filter
						<button className="filter-btn">Brazil</button>
						<button className="filter-btn">Kenya</button>
						<button className="filter-btn">Columbia</button>
					</label>
				</div>
				<div className="store-wrapper">
					<div className="store-item">
						<img src="img/cards_preview/coffee-arabica.png" alt="" />
						<h3 className="store-item_name">AROMISTICO Coffee 1 kg</h3>
						<div className="store-item_sort">Brazil</div>
						<div className="store-item_price">6.99$</div>
					</div>
					<div className="store-item">
						<img src="img/cards_preview/coffee-arabica.png" alt="" />
						<h3 className="store-item_name">AROMISTICO Coffee 1 kg</h3>
						<div className="store-item_sort">Brazil</div>
						<div className="store-item_price">6.99$</div>
					</div>
					<div className="store-item">
						<img src="img/cards_preview/coffee-arabica.png" alt="" />
						<h3 className="store-item_name">AROMISTICO Coffee 1 kg</h3>
						<div className="store-item_sort">Brazil</div>
						<div className="store-item_price">6.99$</div>
					</div>
					<div className="store-item">
						<img src="img/cards_preview/coffee-arabica.png" alt="" />
						<h3 className="store-item_name">AROMISTICO Coffee 1 kg</h3>
						<div className="store-item_sort">Brazil</div>
						<div className="store-item_price">6.99$</div>
					</div>
					<div className="store-item">
						<img src="img/cards_preview/coffee-arabica.png" alt="" />
						<h3 className="store-item_name">AROMISTICO Coffee 1 kg</h3>
						<div className="store-item_sort">Brazil</div>
						<div className="store-item_price">6.99$</div>
					</div>
					<div className="store-item">
						<img src="img/cards_preview/coffee-arabica.png" alt="" />
						<h3 className="store-item_name">AROMISTICO Coffee 1 kg</h3>
						<div className="store-item_sort">Brazil</div>
						<div className="store-item_price">6.99$</div>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default Store;
