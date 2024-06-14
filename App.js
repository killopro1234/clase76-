import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorsScreen from "./screens/Meteors";
import UpdateScreen from './screens/Update';

const Stack=CreateStackNavigator();

export default function App() {
  return (
    <NavigatorContainer>
      <Stack.Navigator intialRouteName="Home"screenOptions={{
        headerShow:false
      }}>
        <Stack.Screen name="Home"component={HomeScreen}/>
        <Stack.Screen name="IssLocation"component={IssLocationScreen}/>
        <Stack.Screen name="Meteors"component={MeteorsScreen}/>
        <Stack.Screen name="Update"component={UpdateScreen}/>
        </Stack.Navigator>
    </NavigatorContainer>
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
