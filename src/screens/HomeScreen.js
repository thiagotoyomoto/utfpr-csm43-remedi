import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import Alert  from '../../assets/icons/alert.svg'
import NotificationOn from '../../assets/icons/notificationOn.svg'
import {styles} from '../styles/HomeScreenStyle';

export function HomeScreen() {
    
    const [diaDaSemana, setDiaDaSemana] = useState('');
      
    useEffect(() => {
    const diasDaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];
    const dataAtual = new Date();
    setDiaDaSemana(diasDaSemana[dataAtual.getDay()]);
    }, []);

	return (
		<View style={styles.table}>
            <Text style={styles.tableTitle}>
               Hoje - {diaDaSemana}
            </Text>
            {/* loop pra gerar os componentes de acordo com os remedios
                cadastrados no dia de hoje */}
            <Medicine/>
            <Medicine/>
            <Medicine/>
            <Medicine/>
        </View>
	);
}

function Medicine(args) {
    return (
        <View style={styles.medicine}>
            <View style={styles.medicineRightSide}>
                <Text style={styles.medicineTime}>{/*args.DateHour*/}12:00</Text>
                <Text style={styles.medicineName}>{/*args.medicinegName*/}Fluvoxamina</Text>
            </View>
            <View style={styles.medicineLeftSide}>
                {/*if args.stock < 7*frequency*/}
                <Alert
                    width={36}
                    height={36}
                    fill="#CD5555"
                    style={styles.medicineAlert}
                />
                <NotificationOn
                    width={36}
                    height={36}
                    fill="#ED8A2F"
                    style={styles.medicineNotificationOn}
                />
            </View>
        </View>
    );
}
