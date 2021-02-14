import { useState } from "react";
import { Reset } from "styled-reset";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import NotFound from "./Components/NotFound";
import Header from "./Components/Header";
import MapPirateBay from "./Components/MapPirateBay";
import Footer from "./Components/Footer";

function App() {
	const [select, setSelect] = useState("weather");

	const handleChange = (event) => {
		setSelect(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	return (
		<BrowserRouter>
			<div className="App">
				<Reset />
				<Switch>
					<Route path="/">
						<Header
							handleChange={handleChange}
							handleSubmit={handleSubmit}
							select={select}
						/>
						<MapPirateBay select={select} />
						<Footer />
					</Route>
					<Route path="/404" component={NotFound} />
					<Redirect to="/404" />
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
