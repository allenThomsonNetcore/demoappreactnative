import { Colors } from "@/constants/Colors"
import { View,Text,StyleSheet, TextInput } from "react-native"

type props ={}

const InputField = (props: React.ComponentProps<typeof TextInput>) =>{
    return (
        <TextInput style ={styles.inputField}
        {...props}/>


    )
}

export default InputField;

const styles= StyleSheet.create({
    inputField:{
        backgroundColor: Colors.white,
        paddingVertical: 12,
        paddingHorizontal: 18,
        alignSelf: 'stretch',
        borderRadius: 5,
        fontSize: 16,
        color: Colors.black,
        marginBottom: 20
      }
})