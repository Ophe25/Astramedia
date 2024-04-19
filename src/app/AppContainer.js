import React from 'react';
import { connect } from 'react-redux'
import Navigation from './navigation/Navigation';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        return (
            <Navigation />
        );
    }
}

const mapStateToProps = state => ({
    isFirstConnection: state.connection.isFirstConnection,
});


export default connect(mapStateToProps, null)(AppContainer);
