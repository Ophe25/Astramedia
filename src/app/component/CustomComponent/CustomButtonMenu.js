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
                    contentStyle={[{
                        backgroundColor: 'rgba(255,255,255,0.1)',
                        borderRadius: 12,
                        justifyContent: 'center',
                        padding: 15,
                        margin: 10,
                    }, this.props.style ? this.props.style : {}]}
                    onPress={this.props.onPress}
                >
                    <Text
                        style={{
                            color: 'white',
                            textAlign: 'center',
                        }}>
                        {this.props.title}
                    </Text>
                </Button>
            </View>
        );
    }
}

export default (CustomButtonMenu);
