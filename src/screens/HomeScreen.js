import { StyleSheet, View, Text, Button} from 'react-native';
import React from 'react'

export default function HomeScreen(props){
    const { navigation } = props
    console.log(props)
    const goToChar = () =>{
        navigation.navigate("Character")
    }
    const goToPage = () =>{
        navigation.navigate("Settings")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Rick and Morty's API for Android</Text>
            <Text style={styles.text}>Character List</Text>
            <Button color="#FE434C" onPress={goToChar} title='Characters'/>
            <Text style={styles.text}>Settings page</Text> 
            <Button color="#FE434C" onPress={goToPage} title='Go to Settings'/>
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
        color:"white",
        alignContent: 'center',
        justifyContent: 'center',
        fontSize: 18,
    },
    text:{
        color:"white",
        margin: 10,
        padding: 10,
        fontSize: 16,
    },
});
