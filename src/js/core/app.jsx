import React from 'react';
import {render} from 'react-dom';

import Navigationbar from "navigationbar/navigationbar.component";
import MimasComponents from "mimas-components";

class App extends MimasComponents.Container {
  render () {
    return <div>
			<Navigationbar />
		</div>;
  }

	/*static mount (props) {
		Array.prototype.slice.call(document.querySelectorAll("my-app"), 0).forEach((element) => {
			// render(<App />, element);
			render(React.createElement(App, props), element);
		});
	}*/
}

App.mount();
global.window.test = () => App.mount();



if (module.hot) {
	module.hot.accept();
}
