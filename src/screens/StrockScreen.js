import React from 'react';
import { View, ImageBackground } from 'react-native';
import {
	Button,
	Text,
	Searchbar,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/MedicationScreenStyle.js';
import background from '../../assets/background.png'
import TrashIcon from '../../assets/icons/trash.svg';
import EditIcon from '../../assets/icons/edit.svg'

export function MedicationListScreen(props) {
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
                <ImageBackground style={styles.topBox} source={background}>
					<View style={styles.topBoxRight}>
                        <Text>props.medicationName</Text>
                    </View>
                    <View style={styles.topBoxLeft}>
                        <TrashIcon/>
                        <EditIcon/>
                    </View>
                </ImageBackground>
			</View>
		</PaperProvider>
	);
}