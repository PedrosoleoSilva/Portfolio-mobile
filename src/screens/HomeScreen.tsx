import { Button, Text, View } from "react-native";

const HomeScreen = ({navigation}: any) => {

    function navToGallery(){
        navigation.navigate('gallery')
    }
    return (
        <View style={{backgroundColor: 'red', flex: 1}}>
            <Text>HELLO HOME</Text>
            <Button title="Go to Gallery" onPress={navToGallery}/>
        </View>
    );
}

export default HomeScreen;
