import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { Text } from 'react-native-paper';
import Menu from '../component/CustomComponent/Menu';
import ButtonMenu from '../component/CustomComponent/ButtonMenu';
// import Menu from '../Menu/Menu';



class Dev extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        }
    }


    render() {
        return (

            <View style={{ flex: 1, backgroundColor: '#03030E', padding: 15, paddingBottom: 50 }}>
                <View style={{ flexDirection: 'row', paddingTop: 15, }}>
                    <Text
                        style={{
                            textAlign: 'center',
                            marginBottom: 15,
                            color: 'white',
                            fontSize: 20,
                            paddingHorizontal: 10,
                            paddingBottom: 15,
                        }}>
                        Développement Web et Dispositifs Intéractifs
                    </Text>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    {/* <View style={{ flex: 1 }}> */}
                    <Text style={{ textAlign: 'justify', marginBottom: 15, color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras a molestie ante, quis porta enim.
                        Pellentesque ut rutrum massa, ac ornare leo.
                        Ut ultricies, sapien in pharetra sagittis,
                        risus nunc imperdiet sapien,
                        a interdum risus risus sed ligula.
                        Duis vehicula elit non urna vehicula vehicula.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/StratUXBefore.png')}
                            width={50}
                            height={100}
                            style={{
                                aspectRatio: 280 / 570, width: '100%', height: undefined

                            }}
                        />
                    </View>
                    {/* </View> */}
                    <Text style={{ textAlign: 'justify', marginBottom: 15, color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras a molestie ante, quis porta enim.
                        Pellentesque ut rutrum massa, ac ornare leo.
                        Ut ultricies, sapien in pharetra sagittis,
                        risus nunc imperdiet sapien,
                        a interdum risus risus sed ligula.
                        Duis vehicula elit non urna vehicula vehicula.
                    </Text>
                    <View>
                        <Image
                            source={require('../assets/image/StratUXAfter.png')}
                            width={50}
                            height={100}
                            style={{
                                aspectRatio: 280 / 570, width: '100%', height: undefined

                            }}
                        />
                    </View>
                    <Text style={{ textAlign: 'justify', marginBottom: 15, color: 'white' }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Cras a molestie ante, quis porta enim.
                        Pellentesque ut rutrum massa, ac ornare leo.
                        Ut ultricies, sapien in pharetra sagittis,
                        risus nunc imperdiet sapien,
                        a interdum risus risus sed ligula.
                        Duis vehicula elit non urna vehicula vehicula.
                    </Text>
                </ScrollView>
            </View>


        );
    }
}

export default (Dev);