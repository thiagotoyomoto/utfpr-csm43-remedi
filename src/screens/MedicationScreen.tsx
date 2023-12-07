import React, { useState } from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import {
	Button,
	Text,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles } from '../styles/MedicationScreenStyle';

import TrashIcon from '../../assets/icons/trash-fill.svg';
import EditIcon from '../../assets/icons/edit-fill.svg';
import { useNavigation } from '@react-navigation/native';

const backgroundImage = require('@assets/background.png');

export function MedicationScreen() {

	return (
		<PaperProvider>
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
                        <Pressable>
                            <EditIcon
                                width={32}
                                height={32}
                                fill="#FFF"
                                style={{paddingHorizontal: 24}}
                            />
                        </Pressable>
                        <Pressable>
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
