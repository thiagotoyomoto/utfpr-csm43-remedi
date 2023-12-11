import React, { useState } from 'react';
import { View, ImageBackground, Pressable } from 'react-native';
import {
  Button,
  Text,
  Modal,
  Portal,
  Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '@/styles/MedicationScreenStyle';

import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParamsForNavigator } from '@/navigators';
import { useUserMedicationsStore, useUserTodayMedicationsStore } from '@/stores';
import { Icons } from '@/components';
import { format, parse } from 'date-fns';

const backgroundImage = require('@assets/background.png');

export type MedicationScreenParams = {
  id: string;
}

type MedicationScreenProps = {
  route: {
    params: MedicationScreenParams;
  }
}

export function MedicationScreen(props: MedicationScreenProps) {
  const { id } = props.route.params as { id: string };
  const navigation = useNavigation<RootNavigatorParamsForNavigator>();

  const { userMedications } = useUserMedicationsStore();
  const { userTodayMedications } = useUserTodayMedicationsStore();
  const userMedication = userMedications.get(id);

  const [visibleModal, setVisibleModal] = useState(false);

  const showModal = () => setVisibleModal(true);
  const hideModal = () => setVisibleModal(false);

  const onPressMedication = () => {
    navigation.navigate('Medication/Edit', {
      id
    });
  };

  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={styles.modal}>
          <View>
            <Text style={styles.textModal}>Atenção! O medicamento selecionado irá ser exclúido do seu perfil</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 20 }}>
            <Button style={styles.cancelBtn} theme={theme} onPress={hideModal}>
              <Text style={styles.cancelText}>
                Cancelar
              </Text>
            </Button>
            <Button mode="contained" style={styles.confirmBtn} theme={theme} onPress={hideModal}>
              <Text style={styles.confirmText}>
                Ok
              </Text>
            </Button>
          </View>
        </Modal>
      </Portal>
      <ImageBackground
        style={styles.imgBg}
        source={backgroundImage}
      >
        <View style={styles.topBox}>
          <View>
            <Text style={styles.medicationName}>
              {userMedication.name}
            </Text>
          </View>
          <View style={styles.topBoxRight}>
            <Pressable onPress={onPressMedication} style={{ paddingHorizontal: 24 }}>
              <Icons.Edit size={32} color={'#FFF'} />
            </Pressable>
            <Pressable onPress={showModal}>
              <Icons.Trash size={32} color={'#FFF'} />
            </Pressable>
          </View>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTittle}>
            Notificações
          </Text>
          <Text style={styles.sectionContent}>
            Todos os dias - {
              Array.from(userTodayMedications.values())
                .map(value => parse(value.time, 'HH:mm:ssX', new Date()))
                .sort()
                .map(value => format(value, 'HH:mm'))
                .join(' | ')
            }
          </Text>
          <Text style={styles.sectionContent}>
            {/* If lembrete ativo */}
            Lembrete de reposição ativado
          </Text>
        </View>
        <Text style={styles.sectionTittle}>
          Observações
        </Text>
        <Text style={styles.sectionContent}>
          {userMedication.observations}
        </Text>
        <Text style={styles.sectionContent}>
          {/* If lembrete ativo */}
          Lembrete de reposição ativado
        </Text>
      </View>
      <View style={styles.btnContainer}>
        <DownloadLeafletButton />
      </View>
    </PaperProvider>
  );
}

function DownloadLeafletButton() {
  return (
    <Button
      mode="contained"
      buttonColor="#ED8A2F"
      textColor="#FFF"
      style={styles.buttonBula}
    >
      <Text style={styles.buttonText}>Baixar Bula</Text>
    </Button>
  );
}
