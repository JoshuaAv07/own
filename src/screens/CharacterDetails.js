import { StyleSheet, View, Text, Image } from "react-native"
import React from "react"

export default function CharacterDetails(props){
    const { character } = props.route.params;
    return(
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>{character.name}</Text>
                
                <View style={styles.property}>
                    <Text style={styles.property_name}>Age: </Text>
                    <Text style={styles.property_value}>{[
                        character.age === null
                            ? `N/A`
                            : `${character.age}`
                        ]}
                    </Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Religion: </Text>
                    <Text style={styles.property_value}>{character.religion}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Sex: </Text>
                    <Text style={styles.property_value}>{character.sex}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Hair: </Text>
                    <Text style={styles.property_value}>{character.hair_color}</Text>
                </View>
                <View style={styles.property}>
                    <Text style={styles.property_name}>Grade: </Text>
                    <Text style={styles.property_value}>{[
                        character.grade === null
                            ? `N/A`
                            : `${character.grade}`
                        ]}  
                    </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#DAF7A6",
    },
    content:{
        flex:1,
        justifyContent:"flex-start",
        alignContent:"center",
        margin: 20,
        borderRadius:30,
        shadowColor:"gray",
        shadowOffset:{
            width:0,
            height:5,
        },
        shadowOpacity:0.25,
        shadowRadius: 3.84,
        elevation: 5,
        backgroundColor: "#6E2C00",
        marginBottom:20,
    },
    title:{
        fontSize: 30,
        alignSelf: "flex-start",
        alignContent: "center",
        color:"white",
        margin: 40,
        marginLeft: 50,
    },
    property:{
        flex:1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems:"center",
        margin:0,
        padding:0,
    },
    property_name:{
        fontSize: 25,
        alignSelf: "flex-start",
        color:"#FFC300",
        marginLeft:40,
    },
    property_value:{
        height:"100%",
        color:"#ECECEC",
        fontSize:20,
        alignSelf:"flex-start",
        marginLeft:60,
    },
});