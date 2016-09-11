import React from "react";
import {render} from 'react-dom';

class Container extends React.Component {
	static mount (props) {
		render(React.createElement(this, props), document.getElementById("content"));
	}
}

const Mimas = {};
Mimas.Container = Container;

export default Mimas;
