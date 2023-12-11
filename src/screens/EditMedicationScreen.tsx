import React, { useState } from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import {
	Button,
	Text,
	TextInput,
	SegmentedButtons,
	Switch,
	Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/EditMedicationScreenStyle';

import Notification from '../../assets/icons/notificationOn.svg';
import Alarm from '../../assets/icons/alarm.svg';
import { pt, registerTranslation } from 'react-native-paper-dates';
import { TimePickerModal } from 'react-native-paper-dates';
import { useMedicationsStore } from '@/stores';
registerTranslation('pt', pt)

const backgroundImage = require('@assets/background.png');

type EditMedicationScreenProps = {
	route: {
		params: EditMedicationScreenParams
	}
}

export type EditMedicationScreenParams = {
	id: string
}

export function EditMedicationScreen(props: EditMedicationScreenProps) {
	const { id } = props.route.params;

	const { medications } = useMedicationsStore();
	const medication = medications.get(id);

	const [stock, setStock] = useState(10);
	const [observations, setObservations] = useState('');
	const [frequency, setFrequency] = useState(1);
	const [hasModifications, setHasModifications] = useState(false);

	const [isAlarmOn, setisAlarmOn] = React.useState(false);
	const [visibleClock, setVisible] = React.useState(false);

	const onDismiss = React.useCallback(() => {
		setVisible(false)
	}, [setVisible]);
	const onConfirm = React.useCallback(
		({ hours, minutes }) => {
			setVisible(false);
			console.log({ hours, minutes });
		},
		[setVisible]
	);

	const onFrequencyChange = (frequency: string) => {
		setFrequency(Number(frequency));
	}

	const onStockChange = (stock: string) => {
		setStock(Number(stock));
	}

	const onObservationsChange = (observations: string) => {
		setObservations(observations);
	}

	return (
		<PaperProvider>
			<View style={{ flex: 1, justifyContent: 'space-between' }}>
				<View style={styles.container}>
					<View style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto', }}>
						<Text style={styles.medicationNameText}>
							Nome
						</Text>
						<TextInput
							outlineColor='#3454a4'
							mode='outlined'
							style={styles.medicationName}
							value={medication.name}
							theme={theme}
							disabled={true}
						/>
					</View>
					<View>
						<Text style={styles.frequencyText}>
							Frequência
						</Text>
						<SegmentedButtons
							value={frequency.toString()}
							onValueChange={onFrequencyChange}
							style={styles.frequency}
							buttons={[
								{
									value: '1',
									label: '24h',
								},
								{
									value: '2',
									label: '12h',
								},
								{
									value: '3',
									label: '8h'
								},
								{
									value: '4',
									label: '6h'
								},
							]}
						/>
					</View>
					<View style={{ width: '100%' }}>
						<Text style={styles.configText}>
							Configurações
						</Text>
					</View>
					<View style={styles.configBox}>
						<View>
							<View style={styles.alarmBox}>
								<Text style={{ paddingRight: 8, fontSize: 16 }}>Horário</Text>
								<Pressable onPress={() => setVisible(true)}>
									<Alarm
										width={42}
										height={42}
										fill="#ED8A2F"
									/>
								</Pressable>
								<TimePickerModal
									visible={visibleClock}
									onDismiss={onDismiss}
									onConfirm={onConfirm}
									use24HourClock={true}
								/>
							</View>
						</View>
						<View style={styles.alarmBox}>
							<Text style={{ paddingRight: 8, fontSize: 16 }}>Notificação</Text>
							<Notification
								width={42}
								height={42}
								fill="#ED8A2F"
							/>
							<Switch theme={theme} value={isAlarmOn} onValueChange={setisAlarmOn} />
						</View>
					</View>
					<View style={styles.estoqueBox}>
						<Text style={styles.configText}>Estoque</Text>
						<TextInput
							mode='outlined'
							outlineColor='#3454a4'
							keyboardType='number-pad'
							onChangeText={onStockChange}
							style={styles.estoqueInput}
							theme={theme}
						/>
					</View><View style={styles.obsBox}>
						<Text style={styles.configText}>Observações</Text>
						<TextInput
							mode='outlined'
							multiline
							outlineColor='#3454a4'
							onChangeText={onObservationsChange}
							style={styles.obsInput}
							theme={theme}
						/>
					</View>
				</View>
				<Button
					mode="contained"
					buttonColor="#ED8A2F"
					textColor="#FFF"
					style={styles.buttonSave}
				>
					<Text style={styles.buttonText}>Salvar</Text>
				</Button>
			</View>
		</PaperProvider>
	);
}
