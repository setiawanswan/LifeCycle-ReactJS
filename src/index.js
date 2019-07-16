import React from 'react';
import ReactDOM from 'react-dom';

class Seasons extends React.Component {
    constructor(props) {
        super (props);

        this.state = { lat: null };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                // We called setState
                this.setState({lat : position.coords.latitude})
            },
            err => {
                this.setState({ errorMessage: err.message})
            }
        );
    } 

    //React says we have to define render!;
    render() {
        if (this.state.errorMessage && !this.state.lat) {
            return <div>Error : {this.state.errorMessage}</div>
        }
        if (!this.state.errorMessage && this.state.lat) {
            return <div>Latitude : {this.state.lat}</div>
        }

        return <div>Loading !</div>
    }
}

ReactDOM.render(<Seasons/>, document.querySelector('#root'));
