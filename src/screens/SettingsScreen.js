import { StyleSheet, View, Text, Button } from 'react-native'
import React from 'react'

export default function SettingsScreen(props) {
    const {navigation} = props
    return(
    <View style={styles.container}>
        <Text style={styles.title}>Settings</Text>
        <Text style={styles.text}>Return Home</Text>
        <Button onPress={()=> { navigation.navigate("Home") }} title='Go to Home' color="#FE434C"/>
        <Text style={styles.text}>Character List</Text>
        <Button onPress={()=> { navigation.navigate("Character") }} title='Characters' color="#FE434C"/>

        
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#24282f',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title:{
        marginBottom: 10,
        color:"white",
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    text:{
        color:"white",
        margin: 10,
        marginBottom: 5,
        padding: 10,
        fontSize: 16,
    },
});