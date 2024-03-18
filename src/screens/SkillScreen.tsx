import { StyleSheet, View, Image, Text, Pressable } from "react-native";
import  log from '../assets/tela.png'
import { useState } from "react";
import seta from   '../assets/seta.png'

const SkillScreen = () => {
    const [skills, setSkills] = useState(false);
    const [skills2, setSkills2]= useState(false);
    const [skills3, setSkills3]= useState(false);
    const [skills4, setSkills4]= useState(false);

    const clickSkills =() =>{
        setSkills(!skills)
    }
    const clickSkillsDuo =() =>{
        setSkills2(!skills2)
    }
    const clickSkillsTrue =() =>{
        setSkills3(!skills3)
    }
    const clickSkillsFor =() =>{
        setSkills4(!skills4)
    }

    return (
        <View style={{backgroundColor: '#ffff', height: '100%'}}>
            <View>
            <View style={styles.imageLogo}>
                <Image 
                    source={log}
                />
                <Text style={styles.textFoto}>LEONARDO PEDROSO</Text>
            </View>
            </View>
            <View>
                <Text style={styles.textFoto}>MINHAS SKILL</Text>
            </View>
            <View>
                <Pressable style={styles.pressableStyle} onPress={clickSkills}>
                    <Text style={styles.fontText}>REACT-NATIVE</Text>
                    {skills && (
                        <View>
                            <Text style={styles.textPressable}>Java_Script</Text>
                            <Text style={styles.textPressable}>React - Frameworks</Text>
                            <Text style={styles.textPressable}>Design Mobile</Text>
                            <Text style={styles.textPressable}>CSS</Text>
                        </View>
                    )}
                </Pressable>
                <Pressable style={styles.pressableStyle} onPress={clickSkillsTrue}>
                    <Text style={styles.fontText}>REACT</Text>
                    {skills3 && (
                        <View>
                            <Text style={styles.textPressable}>Desenvolvimento Web</Text>
                            <Text style={styles.textPressable}>jQuery - Frameworks</Text>
                            <Text style={styles.textPressable}>React - Frameworks</Text>
                            <Text style={styles.textPressable}>JavaScript</Text>
                            
                        </View>
                    )}
                </Pressable>

                <Pressable style={styles.pressableStyle} onPress={clickSkillsDuo}>
                    <Text style={styles.fontText}>BACK-END</Text>
                    {skills2 && (
                        <View>
                            <Text style={styles.textPressable}>Java</Text>
                            <Text style={styles.textPressable}>Spring Boot</Text>
                            <Text style={styles.textPressable}>CRUD</Text>
                            
                        </View>
                    )}
                </Pressable>
                <Pressable style={styles.pressableStyle} onPress={clickSkillsFor}>
                    <Text style={styles.fontText}>Testes de Software (QA)</Text>
                    {skills4 && (
                        <View>
                            <Text  style={styles.textPressable}>Testes Unitários</Text>
                            <Text style={styles.textPressable}>Testes Funcionais</Text>
                            <Text style={styles.textPressable}>Testes Exploratórios</Text>
                            <Text style={styles.textPressable}>Testes Automatizados</Text>
                            </View>
                    )}
                </Pressable>
                
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    imageLogo:{
        alignItems: 'center',
        paddingTop: 30,
        borderWidth:2,
        elevation:3
    },
    textFoto:{
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
    },
    
    pressableStyle:{
        marginTop: 20,
        marginLeft:20,
        alignItems: 'center',
        width: 350,
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 5,
        borderWidth:2,
        elevation: 10,
        backgroundColor: '#36cbf5'  
    },
    fontText:{
        fontSize:20,
        fontWeight: 'bold'
    },
    textPressable:{
        fontSize:18,
        fontWeight: 'bold',
        color: 'blue'
    }
})
export default SkillScreen;