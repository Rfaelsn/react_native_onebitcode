import React, {useState} from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard
} from 'react-native';
import ResultImc from "./resultImc";
import styles from "./style";

export default function Form(){

const [heigth, setHeigth] = useState(null);
const [weigth, setWeigth] = useState(null);
const [messageImc, setMessageImc] = useState(null);
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");
const [erroMessage, setErroMessage] = useState(null);

function imcCalculator(){
    let heigthFormat = heigth.replace(",",".");
    return setImc((weigth/(heigthFormat*heigthFormat)).toFixed(2));
}

//valida os campos
function verificationImc(){
    if(imc == null){
        //faz o celular vibrar
        Vibration.vibrate();
        setErroMessage("campo obrigatório*");
    }
}

function validationImc(){
    if(weigth != null && heigth != null){
        imcCalculator()
        setHeigth(null);
        setWeigth(null);
        setMessageImc("seu imc é igual:");
        setTextButton("Calcular Novamente");
        setErroMessage(null);
        return
    }
    verificationImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("preencha o peso e altura");
}

    return(
        <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{erroMessage}</Text>
                <TextInput
                    onChangeText={setHeigth}
                    value={heigth}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    style={styles.input}
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{erroMessage}</Text>
                <TextInput
                    onChangeText={setWeigth}
                    value={weigth}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    style={styles.input}
                ></TextInput>


                {/* <Button 
                    title={textButton}
                    onPress={() => validationImc()}
                /> */}

                <TouchableOpacity
                    style={styles.buttonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text
                        style={styles.textButtonCalculator}
                    >
                        {textButton}
                    </Text>
                </TouchableOpacity>

                <ResultImc messageResultImc={messageImc} resultImc={imc}/>
            </View>
        </Pressable>
    );
}