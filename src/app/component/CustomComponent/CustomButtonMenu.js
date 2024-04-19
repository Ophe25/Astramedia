import React from 'react';
import { View } from 'react-native';
import { Button, Text } from 'react-native-paper';


class CustomButtonMenu extends React.Component {

    render() {
        const { commande, displayDetailForCommande } = this.props;
        return (
            <View
                style={this.props.ViewStyle ? this.props.ViewStyle : {}}>
                <Button
                    textColor='#FFF'
                    labelStyle={{
                        color: 'white',
                        textAlign: 'center',
                    }}
                    contentStyle={[{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        width: 130,
                        height: 130,
                        borderRadius: 5,
                        justifyContent: 'center',
                        paddingHorizontal: 10
                    }, this.props.style ? this.props.style : {}]}
                    onPress={this.props.onPress}
                >
                    {this.props.title}
                </Button>
            </View>
        );
    }
}

export default (CustomButtonMenu);
