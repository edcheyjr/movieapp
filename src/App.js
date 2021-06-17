
import {BrowserRouter as Router,Route,Switch } from 'react-router-dom';
import SingleMovie from "./Movie";
import Home from "./Home";
import Error from "./Error";

function App() {
    return (<Switch> 
                <Route exact path="/"><Home/></Route>
                <Route path="/movie/:id" children={<SingleMovie/>}/>
                <Route path ="*"><Error/></Route>
            </Switch> );
}  
export default App;