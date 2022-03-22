import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableWithoutFeedback,
} from 'react-native';

export default function Character({ character, navigation }) {
    

    return (
        <TouchableWithoutFeedback 
            onPress={()=>{
                navigation.navigate("CharacterDetails", {character})
            }}
        >
            <View style = {styles.character}>
                <View style = {styles.spacing}>
                    <View style = {styles.character__info}>
                        <Text style={styles.character__name}> {character.name} </Text>
                        <Text style={styles.Data__title} >Occupation: {[
                            character.occupation === null
                                ? `N/A`
                                : `${character.occupation}`
                            ]}
                        </Text>                       
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    character:{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
    },
    spacing:{
        flex:1,
        flexDirection: "row",
        paddingRight: 10,
        paddingTop:20,
        paddingLeft:10,
    },
    character__info:{
        flex:1,
        flexDirection: "column",
        justifyContent:"center",
        alignContent: "flex-start",
        paddingLeft: 10,
        height: "100%",
        backgroundColor: "#6E2C00",
        borderRadius: 10,
    },
    character__name:{
        height: 50,
        color: '#fefefe',
        fontSize: 18,
        fontWeight: "bold",
        textAlignVertical: "center",
    },
    Data__title: {
        color: "#fff",
        marginLeft: 50,
        marginBottom: 10,
        fontSize: 14,
    },
});
