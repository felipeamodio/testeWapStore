import React, {useState} from 'react';
import {Text, View, TextInput, StyleSheet, TouchableOpacity, ScrollView} from 'react-native';



export default function Teste(){

    const [age, setAge] = useState();
    

    return(
        <>
            <View>
                <Text style={styles.txt}>Idades</Text>
                <View style={{marginTop: 15, flexDirection: 'row'}}>
                    <TextInput
                        style={styles.txtInput}
                        placeholder="Digite sua idade"
                        color="#000000"
                        keyboardType= 'numeric'
                        onChangeText={(age) => setAge(age)}      
                    />
                <TouchableOpacity style={styles.btn}>
                    <Text style={{fontSize: 18, fontWeight: '700', color: '#353535'}}>Inserir</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.area}>
                    <ScrollView style={styles.scroll}>
                        <Text style={{marginTop: 10, fontSize: 20}} cor={() => {
                            if(age < 20){
                                color= '#2BB1DB'
                            } else if(age >= 20 && age <= 40){
                                color= '#824DF2'
                            }else{
                                color='#E48A1F'
                            }
                        }}>{age}</Text>
                    </ScrollView>
                </View>

                <TouchableOpacity style={styles.btnMed}>
                    <Text style={{color: '#FFFFFF', fontSize: 24}}>Calcular Média</Text>
                </TouchableOpacity>
                
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    txtInput: {
        width: 200,
        height: 30,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderColor: '#000000',
        padding: 5,
        backgroundColor: '#FFFFFF'
    },
    txt: {
        fontSize: 30,
        color: '#FFFFFF'
    },
    btn: {
        width: 110,
        height: 30,
        backgroundColor: '#1ABC9C',
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 10
    },
    area: {
        width: 200,
        height: 400,
        backgroundColor: '#FFFFFF',
        marginTop: 10,
        alignItems: 'center'
    },
    btnMed: {
        width: 320,
        height: 40,
        backgroundColor: '#3498DB',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 15
    }
})