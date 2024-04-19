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
                        style={{ paddingVertical: 10 }}

                    />
                </View>

                <Icon2
                    name="sound-mix"
                    size={22}
                    color="white"
                    onPress={this.props.onPressFilter}
                    style={{ paddingVertical: 10 }}
                />
                <View
                    style={{
                        // flex: 1,
                        // alignItems: 'flex-end',
                        backgroundColor: "rgba(0,0,0, 0.30)",
                        padding: 5,
                        borderRadius: 30,
                        marginTop: 5,
                    }}
                >
                    <Icon2
                        name="plus"
                        size={22}
                        color="white"
                        onPress={this.props.onPressMore}
                    />
                </View>
            </>
        );
    }
}

export default (ToolsScan);

