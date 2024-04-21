import React from 'react';
import { Button } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo';
import Icon3 from 'react-native-vector-icons/FontAwesome6';
import { View } from 'react-native';



class ToolsScan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            carteIsOpen: false,
            visible: this.props.visible,
            descriptionVisible: false,
        }
    }

    render() {
        return (
            <>
                <View>

                    <Icon
                        name="map-outline"
                        size={22}
                        color="white"
                        onPress={this.props.onPressMap}
                        style={{ paddingVertical: 5, paddingHorizontal: 5 }}
                    />
                </View>
            </>
        );
    }
}

export default (ToolsScan);

