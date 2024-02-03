import React from 'react';
import Scan from './component/Scan';
import Navigation from './navigation/Navigation';
import { connect } from 'react-redux'


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
