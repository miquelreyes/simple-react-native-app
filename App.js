import { applyMiddleware, createStore } from 'redux'

import Home from './src/screens/home';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import createSagaMiddleware from '@redux-saga/core'
import mySaga from './src/sagas/sagas'
import postsReducer from './src/redux/reducers/postsReducer';

const Stack = createNativeStackNavigator();

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
    postsReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(mySaga)

export default function App() {
  return (
    <Provider store={store} >
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
