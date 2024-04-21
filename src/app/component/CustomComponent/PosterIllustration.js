import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import {
    ViroNode,
    ViroImage,
} from '@viro-community/react-viro';



class PosterIllustration extends React.Component {

    render() {
        return (
            <ViroNode scale={[0, 0, 0]}>
                <ViroImage
                    position={[0, 0, -2]}
                    // placeholderSource={require("./res/local_spinner.jpg")}
                    source={require("../../assets/image/PosterIllustration.png")}
                />
            </ViroNode>
        );
    }
}

var styles = StyleSheet.create({
    Text: {
        flex: 1,
        fontFamily: 'Arial',
        fontSize: 15,
        color: '#fff',
        textAlignVertical: 'bottom',
        textAlign: 'center',
        paddingBottom: 15,
        paddingHorizontal: '10%'
    },
});

export default (PosterIllustration);

