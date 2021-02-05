import React,{Component} from 'react';
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Blotter from './components/Blotter'
import Uploader from './components/UploadCsv'

class App extends Component {


    render() {
        return (
            <BrowserRouter >
                <Switch>
                    <Route  exact path="/" component={Blotter}/>
                    <Route path="/upload" component={Uploader}/>
                </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
