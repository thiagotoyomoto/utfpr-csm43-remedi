import React, { useState } from 'react';
import { View, Text, StyleSheet, SectionList } from 'react-native';

import { Divider, Icons } from '@/components';

import { useMedicationsStore, useWeekDayStore } from '@/stores';

import { styles } from '../styles/HomeScreenStyle';

export function HomeScreen() {
  const { weekDay } = useWeekDayStore();
  const { medications } = useMedicationsStore();

  return (
    <View style={styles.table}>
      <View style={styles.dayHeader}>
        <Text style={styles.tableTitle}>
          Hoje
        </Text>
        <Divider />
      </View>
      {Array.from(medications.values()).map(({ id, name }) =>
        <Medication key={id} time={'10:00'} name={name} />
      )}
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
