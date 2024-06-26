import React, { useEffect } from "react";

import Contador from "./contador";
import { useState } from "react";

//create your first component
const Home = (props) => {

	const [counterState, setCounterState] = useState(0);
	useEffect( () => {
		const interval = setInterval( () => {
			setCounterState(prevCounter => prevCounter + 1)
		}, 1000)
		return () => clearInterval(interval)
	}, [])

	return (
		<>
			<Contador props={counterState} />
		</>
	);
};

export default Home;
