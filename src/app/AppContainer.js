import React from 'react';
import { connect } from 'react-redux'
import Navigation from './navigation/Navigation';
import { setMenuIsOpen } from './redux/reducers/introductionReducer2';


class AppContainer extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }


    render() {

        return (
            <Navigation {...this.props} />
        );
    }
}

const mapStateToProps = state => ({
    isFirstConnection: state.connection.isFirstConnection,
    menuIsOpen: state.menu.menuIsOpen,

});


export default connect(mapStateToProps, null)(AppContainer);
