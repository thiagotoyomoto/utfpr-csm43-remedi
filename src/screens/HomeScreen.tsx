import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { Divider, Icons } from '@/components';

import { useUserTodayMedicationsStore } from '@/stores';

import { styles } from '../styles/HomeScreenStyle';
import { compareAsc, format, parse } from 'date-fns';

export function HomeScreen() {
  const { userTodayMedications } = useUserTodayMedicationsStore();

  return (
    <View style={styles.table}>
      <View style={styles.dayHeader}>
        <Text style={styles.tableTitle}>
          Hoje
        </Text>
        <Divider />
      </View>
      {
        Array.from(userTodayMedications.values())
          .map(value => ({ ...value, time: parse(value.time, 'HH:mm:ssX', new Date()) }))
          .sort((a, b) => compareAsc(a.time, b.time))
          .map(value => ({ ...value, time: format(value.time, 'HH:mm') }))
          .map(({ id, name, time }) =>
            <Medication key={id} time={time} name={name} />
          )
      }
    </View>
  );
}

type MedicationProps = {
  name: string;
  time: string;
}

function Medication(props: MedicationProps) {
  return (
    <View style={styles.medicine}>
      <View style={styles.medicineRightSide}>
        <Text style={styles.medicineTime}>{props.time}</Text>
        <Text style={styles.medicineName}>{props.name}</Text>
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

function formatTime(time: string): string {
  console.debug(time);
  const date = parse(time, 'HH:mm:ssX', new Date());
  return format(date, 'HH:mm');
}