import React, { useCallback, useState } from 'react';
import { View, ImageBackground, Pressable, GestureResponderEvent } from 'react-native';
import {
  Button,
  Text,
  TextInput,
  SegmentedButtons,
  Switch,
  Provider as PaperProvider,
  Portal,
  Modal,
  Card
} from 'react-native-paper';

import { styles, theme } from '../styles/EditMedicationScreenStyle';

import Notification from '../../assets/icons/notificationOn.svg';
import Alarm from '../../assets/icons/alarm.svg';
import { pt, registerTranslation } from 'react-native-paper-dates';
import { TimePickerModal } from 'react-native-paper-dates';
import { useMedicationsStore, useUserMedicationsStore, useUserStore, useUserTodayMedicationsStore } from '@/stores';
import { SearchBar } from 'react-native-screens';
import { supabase } from '@/lib/supabase';
import { addHours, format, parse } from 'date-fns';
import { UserMedication } from '@/domain';
import { auth } from '@/auth';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParamsForNavigator } from '@/navigators';
registerTranslation('pt', pt)

const backgroundImage = require('@assets/background.png');

export type CreateMedicationScreenParams = undefined;

export function AddMedicationScreen() {
  const navigator = useNavigation<RootNavigatorParamsForNavigator>();

  const { user } = useUserStore();
  const { medications } = useMedicationsStore();
  const { setUserMedication } = useUserMedicationsStore();
  const { setUserTodayMedication } = useUserTodayMedicationsStore();

  const [selectedMedication, setSelectedMedication] = useState<MedicationSelectItem>(null);
  const [observations, setObservations] = useState('');
  const [frequency, setFrequency] = useState(1);
  const [initialTime, setInitialTime] = useState('00:00:00-03');
  const [stock, setStock] = useState(10);

  const [isLoading, setLoading] = useState(false);

  const [medicationListVisible, setMedicationListVisible] = useState(false);
  const [isAlarmOn, setisAlarmOn] = useState(false);
  const [isClockVisible, setTimePickerVisibility] = useState(false);

  const onTimePickerDismiss = useCallback(() => {
    setTimePickerVisibility(false)
  }, [setTimePickerVisibility]);

  const onConfirm = useCallback(({ hours, minutes }) => {
    setTimePickerVisibility(false);
    setInitialTime(`${hours}:${minutes}:00-03`);
  }, [setTimePickerVisibility, setInitialTime]);

  const onPressNameInput = () => {
    setMedicationListVisible(!medicationListVisible);
  }

  const onFrequencyChange = (frequency: string) => {
    setFrequency(Number(frequency));
  }

  const onStockChange = (stock: string) => {
    setStock(Number(stock));
  }

  const onObservationsChange = (observations: string) => {
    setObservations(observations);
  }

  const onAdd = async () => {
    setLoading(true);

    const medicationId = selectedMedication.value;

    const userMedication = {
      medication_id: medicationId,
      frequency,
      observations,
      stock,
      initial_time: initialTime
    };

    await supabase.from('user_medications').insert(userMedication);

    setUserMedication({...userMedication, ...medications.get(medicationId), initialTime})

    const interval = 24 / frequency;
    let date = parse(initialTime, 'HH:mm:ssX', new Date());

    for(let i = 0; i < frequency; ++i) {
      const time = format(date, 'HH:mm:ssX');

      const { data, error } = await supabase.from('user_today_medications').insert({
        medication_id: medicationId,
        time
      }).select('*, medications(name)');

      if(error) {
        console.error(error);
      } else if(data && data[0]) {
        setUserTodayMedication({ ...data[0], name: data[0].medications.name})
      }


      date = addHours(date, interval);  
    }

    setLoading(false);
  
    navigator.goBack();
  }

  return (
    <PaperProvider>
      <Portal>
        <Modal onDismiss={() => {
          setMedicationListVisible(false);
        }} visible={medicationListVisible}>
          <Card>
            <SearchBar />
            <MedicationSelect items={
              Array.from(medications.values())
                .map(medication => ({
                  label: medication.name,
                  value: medication.id
                }))
            } onSelect={(item) => {
              setSelectedMedication(item);
              setMedicationListVisible(false);
            }} />
          </Card>
        </Modal>
      </Portal>
      <View style={{ flex: 1, justifyContent: 'space-between' }}>
        <View style={styles.container}>
          <View style={{ width: '100%', marginLeft: 'auto', marginRight: 'auto' }}>
            <Text style={styles.medicationNameText}>
              Medicação
            </Text>
            <Pressable onPress={onPressNameInput}>
              <TextInput
                outlineColor='#3454a4'
                mode='outlined'
                style={styles.medicationName}
                value={selectedMedication?.label ?? ''}
                theme={theme}
                disabled={true}
              />
            </Pressable>
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
                <Pressable onPress={() => setTimePickerVisibility(true)}>
                  <Alarm
                    width={42}
                    height={42}
                    fill="#ED8A2F"
                  />
                </Pressable>
                <TimePickerModal
                  visible={isClockVisible}
                  onDismiss={onTimePickerDismiss}
                  onConfirm={onConfirm}
                  use24HourClock={true}
                  hours={0}
                  minutes={0}
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
            <Text style={styles.configText}>Estoque inicial</Text>
            <TextInput
              mode='outlined'
              outlineColor='#3454a4'
              keyboardType='number-pad'
              onChangeText={onStockChange}
              style={styles.estoqueInput}
              theme={theme}
            />
          </View>
          <View style={styles.obsBox}>
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
        <AddButton onPress={onAdd} disabled={isLoading} />
      </View>
    </PaperProvider>
  );
}

type MedicationSelectItem = {
  label: string;
  value: string;
}

type MedicationSelectProps = {
  items: MedicationSelectItem[],
  onSelect?: (item: MedicationSelectItem) => void;
}

function MedicationSelect(props: MedicationSelectProps) {
  return (
    <View style={{  }}>
      {props.items.map(item => (
        <Pressable key={item.value} onPress={() => {
          if (props.onSelect) {
            props.onSelect(item)
          }
        }}>
          <Text>{item.label}</Text>
        </Pressable>
      ))}
    </View>
  );
}

type AddButtonProps = {
  onPress?: (event: GestureResponderEvent) => void;
  disabled?: boolean;
}

function AddButton(props: AddButtonProps) {
  return (
    <Button
      mode="contained"
      buttonColor="#ED8A2F"
      textColor="#FFF"
      style={styles.buttonSave}
      onPress={props.onPress}
      disabled={props.disabled}
    >
      <Text style={styles.buttonText}>Adicionar</Text>
    </Button>
  );
}

function parseTime(str: string): Date {
  return parse(str, 'HH:mm:ss Z', new Date());
}
