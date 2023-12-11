import React, { useCallback, useState } from 'react';
import { View, ImageBackground, Pressable, GestureResponderEvent } from 'react-native';
import {
    Button,
    Text,
    Searchbar,
    Portal,
    Modal,
    Provider as PaperProvider,
} from 'react-native-paper';

import { styles, theme } from '../styles/MedicationListScreenStyle';

import MedicationIcon from '../../assets/icons/medication.svg';
import { useMedicationsStore } from '@/stores/useMedicationsStore';
import { useNavigation } from '@react-navigation/native';
import { RootNavigatorParamsForNavigator } from '@/navigators';
import { Icons } from '@/components';
import { Medication } from '@/domain';
import { useUserMedicationsStore } from '@/stores';

const backgroundImage = require('@assets/background.png');

type SearchQueryFilterType = (medication: Medication) => boolean

export function MedicationListScreen() {
    const navigation = useNavigation<RootNavigatorParamsForNavigator>();

    const { userMedications } = useUserMedicationsStore();

    const [searchQuery, setSearchQuery] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);

    const onChangeSearch = (query) => setSearchQuery(query);
    const onPressMedication = (id: string) => {
        return () => {
            navigation.navigate('Medication', {
                id
            });
        };
    };
    const showModal = () => setVisibleModal(true);
    const hideModal = () => setVisibleModal(false);

    const onAdd = () => {
        navigation.navigate('Medications/Add');
    }

    const searchQueryFilter = useCallback<SearchQueryFilterType>((medication) => {
        return medication.name.toLowerCase().includes(searchQuery.toLowerCase());
    }, [searchQuery]);

    return (
        <PaperProvider>
            <View style={styles.container}>
                <Portal>
                    <Modal visible={visibleModal} onDismiss={hideModal} contentContainerStyle={styles.modal}>
                        <View>
                            <Text style={styles.textModal}>Atenção! O medicamento selecionado irá ser excluído do seu perfil. Deseja continuar?</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 20 }}>
                            <Button style={styles.cancelBtn} theme={theme} onPress={hideModal}>
                                <Text style={styles.cancelText}>
                                    Cancelar
                                </Text>
                            </Button>
                            <Button mode="contained" style={styles.confirmBtn} theme={theme} onPress={hideModal}>
                                <Text style={styles.confirmText}>
                                    Sim
                                </Text>
                            </Button>
                        </View>
                    </Modal>
                </Portal>
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
                    {
                        Array.from(userMedications.values())
                            .filter(searchQueryFilter)
                            .map((medication) => (
                                <MedicationItem
                                    key={medication.id}
                                    name={medication.name}
                                    onPress={onPressMedication(medication.id)}
                                    onDelete={showModal}
                                />
                            ))
                    }
                </View>
                <AddButton onPress={onAdd} />
            </View>
        </PaperProvider>
    );
}

type MedicationItemProps = {
    name: string;
    onPress?: (event: GestureResponderEvent) => void;
    onDelete?: (event: GestureResponderEvent) => void;
}

function MedicationItem(props: MedicationItemProps) {
    return (
        <View style={styles.medication_item}>
            <Pressable style={{ flexDirection: 'row', alignItems: 'center' }} onPress={props.onPress}>
                <View style={styles.medicationIconCircle}>
                    <MedicationIcon
                        width={38}
                        height={38}
                        fill="#FFF"
                        style={styles.medicationIcon}
                    />
                </View>
                <Text style={styles.medicationName}>
                    {props.name}
                </Text>
            </Pressable>
            <Pressable onPress={props.onDelete}>
                <Icons.Trash size={28} color={'#ED8A2F'} />
            </Pressable>
        </View>
    );
}


type AddButtonProps = {

}

function AddButton(props) {
    return (
        <Button
            mode="contained"
            buttonColor="#ED8A2F"
            textColor="#FFF"
            onPress={props.onPress}
            style={styles.buttonNew}
        >
            <Text style={styles.buttonNewText}>Novo</Text>
        </Button>
    );
}