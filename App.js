import React from 'react';
import { View, } from 'react-native';
import { PaperProvider, configureFonts, MD3LightTheme } from 'react-native-paper';
// import ConfigureStore from './src/app/redux/store/ConfigureStore';
import AppContainer from './src/app/AppContainer';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import store from './src/app/redux/store/store';


const fontConfig = {
  title: {
    fontFamily: 'DarkerGrotesque-Bold',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 52,
    fontSize: 50,
    color: "#fff"
  },
  titleEtapes: {
    fontFamily: 'DarkerGrotesque-Bold',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 52,
    fontSize: 30,
    color: "#fff"
  },
  textEtapes: {
    fontFamily: 'DarkerGrotesque-Regular',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 18,
    color: "#fff"
  },
  text: {
    fontFamily: 'DarkerGrotesque-Regular',
    fontWeight: '400',
    letterSpacing: 0.5,
    lineHeight: 22,
    fontSize: 20,
    color: "#fff"
  },
  textAccueil: {
    fontFamily: 'DarkerGrotesque-Medium',
    lineHeight: 35,
    fontSize: 23,
    color: "#fff"
  },
  sousTextAccueil: {
    fontFamily: 'DarkerGrotesque-Medium',
    lineHeight: 20,
    fontSize: 15,
    color: "#fff",
  },
  button: {
    fontFamily: 'DarkerGrotesque-Medium',
    fontSize: 30,
    color: "#022982",
    borderRadius: 12,
    width: 'auto'

  }

};

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    dark: true,
    text: "#fff",
    background: "#000",
    primary: "#fff",

  },
  fonts: configureFonts({
    config: {
      fontFamily: 'DarkerGrotesque-Regular',
    },
    fonts: configureFonts({ config: fontConfig }),
  }),
};


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    }
  }
  render() {
    let persistor = persistStore(store);
    return (
      <Provider store={store}>
        <PersistGate persistor={persistor}>

          <PaperProvider theme={theme}>

            <AppContainer />

          </PaperProvider>
        </PersistGate>
      </Provider>

    )
  }
}