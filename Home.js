import React, { Component } from 'react';
import { Text, View,StyleSheet,SafeAreaView,TouchableOpacity,PlatForm,StatusBar,ImageBackground,Image } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.droidSafeArea}>
                    <ImageBackground source={requeire("../assets/bg_updates.png")}>
                        <View style={styles.titleBar}></View>
                        <TouchableOpacity style={styles.routeCard}onPress={()=>
                        this.props.navigation.navigate("ubicacionEEI")}>
                            <Text style={styles.routeText}>
                                Ubicacion de la EEI
                            </Text>
                            <Text style={styles.knowMore}>
                                {"know more-->"}
                            </Text>
                            <Text style={styles.bgDigit}>
                                1
                            </Text>
                            <Image source={require("../assets/iss_icon.png")}style={styles.iconImage}>
                            </Image>
                        </TouchableOpacity>
                    </ImageBackground>
                </SafeAreaView>
            </View>
        )
    }
}