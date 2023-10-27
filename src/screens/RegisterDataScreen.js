import React from 'react';

import { View, Pressable, Platform } from 'react-native';
import {
	Button,
	Text,
	TextInput,
	Provider as PaperProvider,
} from 'react-native-paper';
import DateTimePicker from '@react-native-community/datetimepicker';

import { styles, theme } from '../styles/RegisterDataStyle.js';

export function RegisterDataScreen() {
	const [dateBirth, setDateBirth] = React.useState();
	const [date, setDate] = React.useState(new Date());
	const [showPicker, setShowPicker] = React.useState(false);
	const toggleDatePicker = () => {
		setShowPicker(!showPicker);
	};
	const onChange = ({ type }, selectedDate) => {
		if (type == 'set') {
			const currentDate = selectedDate;
			setDate(currentDate);
			if (Platform.OS === 'android') {
				toggleDatePicker();
				const dateToString = () => {
					var str = '';
					currentDate.getDate() < 10
						? (str += `0${currentDate.getDate()}`)
						: (str += `${currentDate.getDate()}`);
					currentDate.getMonth() < 9
						? (str += `/0${currentDate.getMonth() + 1}`)
						: (str += `/${currentDate.getMonth() + 1}`);
					return (str += `/${currentDate.getFullYear()}`);
				};
				setDateBirth(dateToString);
			}
		} else {
			toggleDatePicker();
		}
	};
	return (
		<PaperProvider theme={theme}>
			<View style={styles.container}>
				<View style={styles.topView}>
					<Text style={styles.topHeader}>Dados Pessoais</Text>
				</View>
				<View>
					<TextInput
						label="Nome"
						style={styles.input}
					/>
					<View>
						{showPicker && (
							<DateTimePicker
								mode="date"
								display="spinner"
								value={date}
								onChange={onChange}
								maximumDate={new Date()}
							/>
						)}
						<Pressable onPress={toggleDatePicker}>
							<TextInput
								label={'Nascimento'}
								style={styles.input}
								placeholder="07-08-2000"
								value={dateBirth}
								onChange={setDateBirth}
								editable={false}
							/>
						</Pressable>
					</View>
					<TextInput
						label="Gênero"
						style={styles.input}
					/>
					<Button
						mode="conteined"
						buttonColor="#ED8A2F"
						textColor="#FFF"
						style={styles.buttonComplete}
					>
						Cadastrar
					</Button>
					<Button>
						<Text
							style={{
								color: '#ED8A2F',
								textDecorationLine: 'underline',
							}}
						>
							cancelar
						</Text>
					</Button>
				</View>
			</View>
		</PaperProvider>
	);
}
