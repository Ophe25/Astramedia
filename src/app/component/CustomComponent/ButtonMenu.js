import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



class ButtonMenu extends React.Component {

    render() {
        const { commande, displayDetailForCommande } = this.props;
        return (
            <View
                style={{
                    // flex: 1,
                    // alignItems: 'flex-end',
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    zIndex: 1,
                    backgroundColor: this.props.background ? "rgba(255,255,255, 0.30)" : "rgba(255,255,255, 0)",
                    padding: 5,
                    borderRadius: 30
                }}
            >
                <Icon
                    name="menu"
                    size={30}
                    color="white"
                    onPress={this.props.onPress}
                />
            </View>
        );
    }
}

export default (ButtonMenu);
