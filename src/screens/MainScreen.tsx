import { Image, Pressable, StyleSheet, Text, View,  Linking } from "react-native";
import  log from '../assets/tela.png'
import { useState } from "react";
import { AntDesign } from '@expo/vector-icons';
import seta from   '../assets/seta.png'
import { useNavigation } from "@react-navigation/native";

const MainScreen = () => {

    const [email, setEmail] = useState(false);
    const navigation = useNavigation();

    function clickLinkedin(){
        const url ='https://www.linkedin.com/in/leonardo-pedroso/'
        Linking.openURL(url).catch((err) => console.error('ERRO NO LINK:', err));
    }
    function clickGit(){
        const url ='https://github.com/PedrosoleoSilva'
        Linking.openURL(url).catch((err) => console.error('ERRO NO LINK:', err));
    }
    function clickEmail(){
        setEmail(!email)
    }

    function clickSkills(){
        navigation.navigate('Skills')
    }

    return (
        <View style={{backgroundColor: '#fff', height: '100%'}}>
            <View style={styles.imageLogo}>
                <Image 
                    source={log}
                />
                <Text style={styles.textFoto}>LEONARDO PEDROSO</Text>
            </View>
            <View>
                <Pressable onPress={clickLinkedin} style={styles.pressableStyle}>
                    <Text style={styles.textPressable}>LINKEDIN</Text>
                </Pressable>
                <Pressable style={styles.pressableStyle} onPress={clickGit}>
                    <Text style={styles.textPressable}>GITHUB</Text>
                </Pressable>
                <Pressable style={styles.pressableStyle} onPress={clickEmail}>
                    <Text style={styles.textPressable}>E-MAIL</Text>
                    <Image source={seta} style={{ height: 20, width: 20, marginLeft: 5}}/>
                    {email && (
                        <View style={styles.emailContainer}>
                            <Text style={styles.emailText} >leosilvapedroso@gmail.com</Text>
                        </View>
                        
                    )}
                </Pressable>
            </View>
                <Pressable style={styles.pressableSkill} onPress={clickSkills}>
                    <Text style={styles.textPressable} >MINHAS SKILL</Text>
                </Pressable>

        </View>
    );
}

const styles = StyleSheet.create({
        imageLogo: {
        alignItems: 'center',
        paddingTop: 30,
        borderWidth: 2,
        elevation: 3
    },
    textFoto: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        paddingTop: 30,
    },
    pressableStyle: {
        marginTop: 20,
        marginLeft: 20,
        alignItems: 'center',
        width: 350,
        paddingVertical: 15,
        paddingHorizontal: 32,
        borderRadius: 5,
        borderWidth: 2,
        elevation: 10,
        backgroundColor: '#36cbf5'
    },
    textPressable: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
        paddingTop: 5
    },
    pressableSkill: {
        marginTop: 50,
        marginLeft: 90,
        width: 200,
        height: 50,
        backgroundColor: '#36cbf5',
        borderWidth: 3,
        borderRadius: 4,
        elevation: 3,
    },
    emailText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'blue',
    },
    emailContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
    },

})

export default MainScreen;