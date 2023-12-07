import React, { useState } from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import {
	Button,
	Text,
	Searchbar,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles } from '../styles/MedicationListScreenStyle';

import TrashIcon from '../../assets/icons/trash.svg';
import MedicationIcon from '../../assets/icons/medication.svg';
import { useMedicationsStore } from '@/stores/useMedicationsStore';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParamsForNavigator } from '@/navigators';

const backgroundImage = require('@assets/background.png');

export function MedicationListScreen() {
	const [searchQuery, setSearchQuery] = useState('');
	const { medications } = useMedicationsStore();

	const onChangeSearch = (query) => setSearchQuery(query);
	const navigation = useNavigation <RootNavigatorParamsForNavigator> ();
	
	return (
		<PaperProvider>
			<View style={styles.container}>
				<ImageBackground
					style={styles.searchBox}
					source={backgroundImage}
				>
					<Searchbar
						placeholder="Pesquisar"
						onChangeText={onChangeSearch}
						value={searchQuery}
						style={styles.searchbar}
					/>
				</ImageBackground>
				<View style={styles.medicationList}>
					{Array.from(medications.values()).map((medication) => (
						<MedicationItem
							key={medication.name}
							medicationName={medication.name}
						/>
					))}
				</View>
				<Button
					mode="contained"
					buttonColor="#ED8A2F"
					textColor="#FFF"
					style={styles.buttonNew}
					onPress={ () => {
						navigation.navigate('AddMedication')}}
				>
					<Text style={styles.buttonNewText}>Novo</Text>
				</Button>
			</View>
		</PaperProvider>
	);
}

function MedicationItem(props) {
	const navigation = useNavigation <RootNavigatorParamsForNavigator> ();
	return (
		<View style={styles.medication_item}>
			<Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={ () => {
				navigation.navigate('Medication')
			}}>
				<View style={styles.medicationIconCircle}>
					<MedicationIcon
						width={38}
						height={38}
						fill="#FFF"
						style={styles.medicationIcon}
					/>
				</View>
				<Text style={styles.medicationName}>
					{props.medicationName}
				</Text>
			</Pressable>

			<TrashIcon
				width={28}
				height={28}
				fill="#ED8A2F"
				style={styles.trashIcon}
			/>
		</View>
	);
}
