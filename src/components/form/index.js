import React, {useState} from "react";
import { 
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
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
const [imcList, setImcList] = useState([]);

function imcCalculator(){
    let heigthFormat = heigth.replace(",",".");
    const totalImc = ((weigth/(heigthFormat*heigthFormat)).toFixed(2));
    setImcList((arr)=> [...arr, {id: new Date().getTime(), imc: totalImc}])
    setImc(totalImc);
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
    }else{
        verificationImc();
        setImc(null);
        setTextButton("Calcular");
        setMessageImc("preencha o peso e altura");
    }
}

    return(
        <View style={styles.formContext}>
            {imc == null ?
            <Pressable onPress={Keyboard.dismiss} style={styles.form}>
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


            </Pressable>
            : 
                <View>
                    <ResultImc messageResultImc={messageImc} resultImc={imc}/>
                </View>
            }

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

                <FlatList
                showsVerticalScrollIndicator={false}
                    style={styles.listImcs}
                    data={imcList.reverse()}
                    renderItem={({item}) =>{
                        return(
                            <Text style={styles.resultImcItem}>
                                <Text style={styles.textResultItemList}>
                                    Resultado Imc = 
                                </Text>
                                {item.imc}
                            </Text>
                        )
                    }}
                    keyExtractor={(item) =>{
                        item.id
                    }}
                />
        </View>
    );
}