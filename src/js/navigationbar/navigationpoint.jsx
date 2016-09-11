import React from 'react';
import {render} from 'react-dom';

class Navigationpoint extends React.Component {
  render () {
    return <li
			className={this.getCssClasses()}
			onClick={() => this.onClick()}>
			{this.props.name}
		</li>;
  }

	getCssClasses() {
		return "Navigationpoint " + (this.props.active ? "active" : "bla");
	}

	onClick () {
		this.props.setActive(this.props.id);
	}
}

export default Navigationpoint;
