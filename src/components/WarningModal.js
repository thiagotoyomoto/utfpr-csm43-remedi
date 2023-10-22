import {React} from "react";
import {View, Text, Pressable} from 'react-native';
import {styles} from "../styles/WarningModalStyle.js"
import {Button} from 'react-native-paper';

export default function WarningModal(){
    return (
        <View style={styles.modalBack}>
            <View style={styles.modal}>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque sed scelerisque ante, sit amet viverra nisi.
                    </Text>
                </View>
                <View 
                style={styles.buttons}
                >
                <Button
                    textColor="#307FAB"
                    style={styles.confirmButton}
                    >
                        <Text 
                         style={{
                            fontWeight: 600,
                            fontSize: 18
                         }}
                        >
                            Cancelar
                        </Text>
                    </Button>
                    <Button
                    mode="conteined"
                    buttonColor="#ED8A2F"
                    textColor="#FFF"
                    style={styles.confirmButton}
                    >
                        <Text 
                         style={{
                            fontWeight: 600,
                            fontSize: 18
                         }}
                        >
                            Ok
                        </Text>
                    </Button>
                </View>
            </View>
        </View>
    );
}