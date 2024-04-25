import React from 'react';
import { Button } from 'react-native-paper';


class CustomButton extends React.Component {

    render() {
        const { commande, displayDetailForCommande } = this.props;
        return (
            // Ce composant est un bouton qui est intégré dans tous les écrans comportant des boutons sauf le menu
            <Button
                textColor='#FFF'
                labelStyle={{ fontSize: 20, lineHeight: 30 }}
                contentStyle={[{
                    width: 'auto',
                    // height: 'auto',
                    borderRadius: 10,
                    backgroundColor: this.props.backgroundColor ? this.props.backgroundColor : "rgba(255,255,255, 0.20)",
                    //boxShadow: "0 4 4 0 rgba(0, 0, 0, 0.25)"
                }, this.props.style ? this.props.style : {}]}
                onPress={this.props.onPress}
            >{this.props.title}</Button>
        );
    }
}

export default (CustomButton);
