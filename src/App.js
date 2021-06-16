
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import SingleMovie from "./Movie";
import Home from "./Home";

function App() {
    return ( 
        <Router>
            <Switch> 
                <Route path="/"><Home/></Route>
                <Route path="/movies/:id" children={<SingleMovie/>}/>
            </Switch>
        </Router>
    );
}  
export default App;