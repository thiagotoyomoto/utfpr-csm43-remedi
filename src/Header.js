import {React} from "react";
import {View, Text, Pressable, Image} from 'react-native';
import {styles} from "../styles/HeaderStyle.js"

export default function Header(args){
    return (
        <View style={styles.headerBlock}>
            <Text style={styles.tittle}>
                {args.tittle}
            </Text>
            <Pressable>
                {args.typeButton == 'menu' ? (
                    <Image
                        source={require('../assets/icons/iMenu.png')}
                        style={{
                            width: 36,
                            height: 36
                        }}
                    />
                ) : (
                    <Image
                        source={require('../assets/icons/iPackage.png')}
                        style={{
                            width: 36,
                            height: 36
                        }}
                    />
                )}
            </Pressable>   
        </View>
    );
}