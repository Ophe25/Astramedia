import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';



class ButtonMenu extends React.Component {

    render() {
        const { commande, displayDetailForCommande } = this.props;
        return (
            // Ce composant est le bouton afin d'accéder au menu, celui-ci est intégré dans tous les écrans sauf logoSpin
            <View
                style={[{
                    position: this.props.relative ? 'relative' : 'absolute',
                    top: this.props.relative ? 0 : 10,
                    left: this.props.relative ? 0 : 10,
                    zIndex: 1,
                    backgroundColor: this.props.background ? "rgba(255,255,255, 0.30)" : "rgba(255,255,255, 0)",
                    padding: this.props.relative ? 0 : 5,
                    borderRadius: 30
                }, this.props.style ? this.props.style : {}]}
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
