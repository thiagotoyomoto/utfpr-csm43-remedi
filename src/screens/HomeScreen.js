import React, { useState, useEffect } from 'react';
import { View, Text, Alert } from 'react-native';

import { supabase } from '../lib/supabase';
import { Icons } from '../components';

import {styles} from '../styles/HomeScreenStyle';
import { useWeekDayStore } from '@/stores';

export function HomeScreen() {
    const { weekDay } = useWeekDayStore();

    const [isLoading, setLoading] = useState(false);
    const [medications, setMedications] = useState([]);

    useEffect(() => {
        setLoading(true);

        supabase
            .from('medications')
            .select('id,name,frequency,initial_time')
            .then(({ data, error }) => {
                if(error) {
                    Alert.alert(error.message);
                }
                if(data) {
                    console.log(data);
                    setMedications(data);
                }
            })
            .catch(error => {
                Alert.alert(error.message);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

	return (
		<View style={styles.table}>
            <Text style={styles.tableTitle}>
               Hoje - {weekDay}
            </Text>
            {medications.map(({ id, name }) => <Medication key={id} time={'10:00'} name={name} />)}
        </View>
	);
}

function Medication({ time, name }) {
    return (
        <View style={styles.medicine}>
            <View style={styles.medicineRightSide}>
                <Text style={styles.medicineTime}>{time}</Text>
                <Text style={styles.medicineName}>{name}</Text>
            </View>
            <View style={styles.medicineLeftSide}>
                <View style={styles.medicineAlert}>
                    <Icons.Warning size={36} color={'#CD5555'} />
                </View>
                <View style={styles.medicineNotificationOn}>
                    <Icons.NotificationsActive size={36} color={'#ED8A2F'} />
                </View>
            </View>
        </View>
    );
}
