import { h, Component } from 'preact';
import { Router } from 'preact-router';


import Login from '../routes/login';
import Laudos from '../routes/laudos';

export default class App extends Component {
	
	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = e => {
		this.currentUrl = e.url;
	};

	render() {
		return (
			<div id="app">

				<Router onChange={this.handleRoute}>
					<Login path="/" />
					<Laudos path="/laudos/:key" />

				</Router>
			</div>
		);
	}
}
