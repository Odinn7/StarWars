import React from "react";
import { Route, Switch } from "react-router";
import Films from "../../Films";
import HomePage from "../home/index";
import People from "../../People";
import Planets from "../../Planets";
import Species from "../../Species";
import Starships from "../../Starships";
import Vehicles from "../../Vehicles";

export default function MainContainer() {
    return(
        <div className='container'>
            <Switch>
				<Route exact path='/' component={HomePage}/>
				<Route exact path="/people" component={People} />
				<Route exact path="/planets" component={Planets} />
				<Route exact path="/films" component={Films} />
				<Route exact path="/species" component={Species} />
				<Route exact path="/vehicles" component={Vehicles} />
				<Route exact path="/starships" component={Starships} />
			</Switch>
        </div>
    )
}