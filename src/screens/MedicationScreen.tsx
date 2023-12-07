import React, { useState } from 'react';
import { View, ImageBackground, Pressable, KeyboardAvoidingView} from 'react-native';
import {
	Button,
	Text,
    Modal,
    Portal,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/MedicationScreenStyle';

import TrashIcon from '../../assets/icons/trash-fill.svg';
import EditIcon from '../../assets/icons/edit-fill.svg';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParamsForNavigator } from '@/navigators';

const backgroundImage = require('@assets/background.png');

export function MedicationScreen() {
    const navigation = useNavigation <RootNavigatorParamsForNavigator> ();
    const [visibleModal, setVisibleModal] = React.useState(false);

	const showModal = () => setVisibleModal(true);
	const hideModal = () => setVisibleModal(false);

	return (
		<PaperProvider>
            <Portal>
                <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                    <View>
                        <Text style={styles.textModal}>Atenção! O medicamento selecionado irá ser exclúido do seu perfil</Text>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 20}}>
                        <Button style={styles.cancelBtn} theme={theme} onPress={hideModal}>
                            <Text style={styles.cancelText}>
                                Cancelar
                            </Text>
                        </Button>
                        <Button mode="contained" style={styles.confirmBtn} theme={theme} onPress={hideModal}>
                            <Text style={styles.confirmText}>
                                Ok
                            </Text>
                        </Button>
                    </View>
                </Modal>
            </Portal>
            <ImageBackground
                style={styles.imgBg}
                source={backgroundImage}
            >
                <View style={styles.topBox}>
                    <View>
                        <Text style={styles.medicationName}>
                            Nulla
                        </Text>
                    </View>
                    <View style={styles.topBoxRight}>
                        <Pressable onPress={ () => {navigation.navigate('EditMedication')}}>
                            <EditIcon
                                width={32}
                                height={32}
                                fill="#FFF"
                                style={{paddingHorizontal: 24}}
                            />
                        </Pressable>
                        <Pressable onPress={showModal}>
                            <TrashIcon
                                width={32}
                                height={32}
                                fill="#FFF"
                            />
                        </Pressable>
                    </View>
                </View>
            </ImageBackground>

            <View style={styles.content}>
                <View style={styles.section}>
                    <Text style={styles.sectionTittle}>
                        Notificações
                    </Text>
                    <Text style={styles.sectionContent}>
                        Todos os dias - 09:30 | 21:30
                    </Text>
                    <Text style={styles.sectionContent}>
                        {/* If lembrete ativo */}
                        Lembrete de reposição ativado
                    </Text>
                </View>
                    <Text style={styles.sectionTittle}>
                        Observações
                    </Text>
                    <Text style={styles.sectionContent}>
                        Todos os dias - 09:30 | 21:30
                    </Text>
                    <Text style={styles.sectionContent}>
                        {/* If lembrete ativo */}
                        Lembrete de reposição ativado
                    </Text>
            </View>
            <View style={styles.btnContainer}>
                <Button
                        mode="contained"
                        buttonColor="#ED8A2F"
                        textColor="#FFF"
                        style={styles.buttonBula}
                    >
                        <Text style={styles.buttonText}>Baixar Bula</Text>
                </Button>
            </View>
		</PaperProvider>
	);
}
