import React from 'react';
import {render} from 'react-dom';

import Navigationpoint from "navigationbar/navigationpoint.jsx";
import "navigationbar/navigationbar.scss";

class Navigationbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			selectedIndex: -1,
			navigationpoints: ["nav1", "nav2"],
		};
	}

  render () {
    return <div className="navigationbar">
							<span>TestApp</span>
							{this.renderNavigationPoints()}	
					</div>;
  }

	renderNavigationPoints() {
		return <ul>
						{this.state.navigationpoints.map((navigationpoint, index) => {
							const props = {
								key: index,
								id: index,
								name: navigationpoint,
								active:  this.state.selectedIndex === index,
								setActive: (id) => this.setActive(id),
							};
							return <Navigationpoint {...props}/>
						})}
					</ul>;
	}

	setActive(id) {
		this.setState({selectedIndex: id});
	}

}

export default Navigationbar;
