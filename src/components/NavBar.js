import {React} from "react";
import {View, Image, Pressable} from 'react-native';
import {styles} from "../styles/NavBarStyle.js"

export default function NavBar(){
    return (
            <View style={styles.navBlock}>
                <Pressable>
                    <Image
                        source={require('../assets/icons/iHome.png')}
                        style={{
                            width: 36,
                            height: 36,
                        }}
                    />
                </Pressable>
                <Pressable>
                    <Image
                        source={require('../assets/icons/iPerson.png')}
                        style={{
                            width: 36,
                            height: 36,
                        }}
                    />
                </Pressable>
                <Pressable>
                    <Image
                        source={require('../assets/icons/iPresc.png')}
                        style={{
                            width: 36,
                            height: 36,
                        }}
                    />
                </Pressable>
                <Pressable>
                    <Image
                        source={require('../assets/icons/iPackage.png')}
                        style={{
                            width: 36,
                            height: 36,
                        }}
                    />
                </Pressable>    
            </View>
    );
}