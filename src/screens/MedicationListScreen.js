import React from 'react';
import { View, ImageBackground } from 'react-native';
import {
	Button,
	Text,
	Searchbar,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/MedicationListScreenStyle.js';
import background from '../../assets/background.png'
import TrashIcon from '../../assets/icons/trash.svg';
import MedicationIcon from '../../assets/icons/medication.svg';

export function MedicationListScreen() {
	const [searchQuery, setSearchQuery] = React.useState('');

	const onChangeSearch = (query) => setSearchQuery(query);

	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
                <ImageBackground style={styles.searchBox} source={background}>
					<Searchbar
						placeholder="Pesquisar"
						onChangeText={onChangeSearch}
						value={searchQuery}
						style={styles.searchbar}
					/>
                </ImageBackground>
				<View style={styles.medicationList}>
					<MedicationItem medicationName="Fluvoxamine" />
                    <MedicationItem medicationName="Rivotril" />
                    <MedicationItem medicationName="Alprazolam" />
				</View>
                <Button
					mode="conteined"
					buttonColor="#ED8A2F"
					textColor="#FFF"
					style={styles.buttonNew}
				>
					<Text style={styles.buttonNewText}>
                        Novo
                    </Text>
				</Button>
			</View>
		</PaperProvider>
	);
}

function MedicationItem(props) {
	return (
		<View style={styles.medication_item}>
			<View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
			</View>
			<TrashIcon
				width={28}
				height={28}
				fill="#ED8A2F"
				style={styles.trashIcon}
			/>
		</View>
	);
}
