import {React} from "react";
import {View, Text, Pressable, Image} from 'react-native';
import {styles} from "../styles/ProfileStyle.js"

export default function Profile(args){
    return (
        <View style={styles.topBox}>
            <Text style={styles.profileName}>Carla Souza</Text>
            <Image 
                style={styles.profilePicture}
                source={require('../assets/profile_pictures.png')}
            />
        </View>
        
    );
}