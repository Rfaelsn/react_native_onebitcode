import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    formContext:{
        flex: 1,
        marginTop:30,
        backgroundColor:"#fff",
        alignItems: 'center',
        paddingTop:30,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width: '100%',
        height: 'auto',
    },
    formLabel:{
        color: '#000000',
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width: '90%',
        borderRadius: 50,
        backgroundColor: '#f6f6f6',
        height: 40,
        margin: 12,
        paddingLeft: 20,
    },
    buttonCalculator:{
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        backgroundColor: '#ff0043',
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margin: 30,
    },
    textButtonCalculator:{
        fontSize: 18,
        color: '#ffffff',
    },
    errorMessage:{
        fontSize: 12,
        color: 'red',
        fontWeight: 'bold',
        paddingLeft: 20,
    },
    listImcs:{
        
    },
    resultImcItem:{
        fontSize: 24,
        color: '#ff0043',
        height: 40,
        width: '100%',
        paddingRight: 20,
    },
    textResultItemList:{
        fontSize: 16,
    }
});

export default styles;