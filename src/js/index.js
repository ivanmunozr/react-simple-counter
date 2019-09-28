//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

const SimpleCounter = function(props) {
	return (
		<div className="Contador">
			<div>
				<i className="far fa-clock" />
			</div>
			<div className="cuatro">{props.digitocuatro % 10}</div>
			<div className="tres">{props.digitotres % 10}</div>
			<div className="dos">{props.digitodos % 10}</div>
			<div className="uno">{props.digitouno % 10}</div>
		</div>
	);
};

SimpleCounter.propTypes = {
	digitocuatro: PropTypes.number,
	digitotres: PropTypes.number,
	digitodos: PropTypes.number,
	digitouno: PropTypes.number
};

//render your react application

let counter = 0;
setInterval(function() {
	const cuatro = Math.floor(counter / 1000);
	const tres = Math.floor(counter / 100);
	const dos = Math.floor(counter / 10);
	const uno = Math.floor(counter / 1);

	counter++;

	ReactDOM.render(
		<SimpleCounter
			digitouno={uno}
			digitodos={dos}
			digitotres={tres}
			digitocuatro={cuatro}
		/>,
		document.querySelector("#app")
	);
}, 1000);
