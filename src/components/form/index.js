import React, {useState} from "react";
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import ResultImc from "./resultImc";
import styles from "./style";

export default function Form(){

const [heigth, setHeigth] = useState(null);
const [weigth, setWeigth] = useState(null);
const [messageImc, setMessageImc] = useState("preencha o peso e altura");
const [imc, setImc] = useState(null);
const [textButton, setTextButton] = useState("Calcular");

function imcCalculator(){
    return setImc((weigth/(heigth*heigth)).toFixed(2));
}

function validationImc(){
    if(weigth != null && heigth != null){
        imcCalculator()
        setHeigth(null);
        setWeigth(null);
        setMessageImc("seu imc é igual:");
        setTextButton("Calcular Novamente");
        return
    }

    setImc(null);
    setTextButton("Calcular");
    setMessageImc("preencha o peso e altura");
}

    return(
        <View style={styles.formContext}>
            <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <TextInput
                    onChangeText={setHeigth}
                    value={heigth}
                    placeholder="Ex: 1.75"
                    keyboardType="numeric"
                    style={styles.input}
                ></TextInput>

                <Text style={styles.formLabel}>Peso</Text>
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
        </View>
    );
}