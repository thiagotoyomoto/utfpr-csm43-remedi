import React, { useState } from 'react';
import { View, ImageBackground, Pressable, TextInput, } from 'react-native';
import {
	Button,
	Text,
	Provider as PaperProvider,
} from 'react-native-paper';

import {styles} from '../styles/StockScreenStyle';

export function StockScreen() {
	return (
		<PaperProvider>
			<View style={{padding: '5%'}}>
				<Medication
					medicationName="Vevance"
				/>
				<Medication
					medicationName="Rivotril"
				/>
				<Medication
					medicationName="Sertralina"
				/>
				<Medication
					medicationName="Fluvoxamina"
				/>
			</View>
		</PaperProvider>
	);
}

function Medication(props){
	return (
		<View style={styles.medicationBox}>
			<View>
				<Text style={styles.medicationName}>
					{props.medicationName}
				</Text>
			</View>
			<TextInput 
				keyboardType='numeric'
				style={styles.stockInput}
			>

			</TextInput>
		</View>
	);
}
