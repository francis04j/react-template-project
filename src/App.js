import React, { Component } from 'react';
import './App.css';
import Header from './components/common/Header';
import { Container } from 'reactstrap';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false
        };
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return (
            <React.Fragment>
                <Header />
                <Container>
                    <div className="App">
                        <h1 className="App-title">My Budget App</h1>
                       {this.props.children}
                    </div>
                </Container>
            </React.Fragment>            
        );
    }
}

export default App;
