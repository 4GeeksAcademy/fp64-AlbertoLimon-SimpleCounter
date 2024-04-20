import React from "react";

import Contador from "./contador";
import { useState } from "react";

//create your first component
const Home = (props) => {

	//const [counterState, setCounterState] = useState(0);
	let counterState = props.seconds;
	setInterval( () => {
		counterState++
		console.log(counterState);
	}, 1000);

	return (
		<>
			<Contador counterState={counterState} />
		</>
	);
};

export default Home;
