import {React} from "react";
import {View, Text, Pressable, Image} from 'react-native';
import {styles} from "../styles/ProfileStyle.js"
import {Button} from "react-native-paper"

export default function Profile(args){
    return (
        <View style={{flex: 1}}>
            <View style={styles.topBox}>
                <View style={styles.pictureBox}>
                    <Image 
                        style={styles.profilePicture}
                        source={require('../assets/fotoBonita.jpg')}
                    />
                </View>
                <Text style={styles.profileName}>Gato Maluco</Text>
            </View>
            <View style={styles.bottomBox}>
                <View style={styles.achievementsBox}>
                    <Text  style={styles.achievementsTittle}>
                        Consquistas
                    </Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                    <Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    </Text>
                </View>
            <Button
                mode="conteined"
                buttonColor="#ED8A2F"
                textColor="#FFF"
                style={styles.buttonPremium}
            >
                <Text>
                    Ativar premium
                </Text>
                    </Button>
            </View>
        </View>
        
    );
}