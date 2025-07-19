import { Component } from "react";
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import * as actions from '../actions';

import Header from './Header';
const Dashboard = () => {
    return (
        <div>
            <h2>Dashboard Component</h2>
            <p>This is the dashboard page.</p>
        </div>
    );
}

const SurveyNew = () => {
    return (
        <div>
            <h2>Survey New Component</h2>
            <p>This is the survey creation page.</p>
        </div>
    );
}

const Landing = () => {
    return (
        <div>
            <h2>Landing Component</h2>
            <p>Welcome to the landing page!</p>
        </div>
    );
}

class App extends Component {
    componentDidMount() {
        this.props.fetchUser();
    }
    render() {
        return (
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing} />
                        <Route exact path="/surveys" component={Dashboard} />
                        <Route exact path="/surveys/new" component={SurveyNew} />
                    </div>
                </BrowserRouter>
            </div>
        );
    }
};

export default connect(null, actions)(App); 