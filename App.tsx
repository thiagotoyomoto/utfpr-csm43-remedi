import { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

import { supabase } from '@/lib/supabase';
import { auth } from '@/auth';
import { SignNavigator } from '@/navigators';
import { useMedicationsStore, useProfileStore, useWeekDayStore, useUserStore } from '@/stores';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: true,
  })
})

export default function App() {
  const { user, setUser } = useUserStore();
  const { setProfile } = useProfileStore();
  const { setWeekDay } = useWeekDayStore();
  const { setMedications } = useMedicationsStore();
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    
    (async () => {
      await registerForNotifications();

      setWeekDay();
  
      try {
        const user = await auth.getUser();
        const profile = await auth.getProfile();
  
        setUser(user);
        setProfile(profile);

        const { data: medications, error } = await supabase.from('medications').select('id,name,stock,frequency,initial_time')

        if(error) {
          console.error(error);
        } else if(medications) {
          setMedications(medications);

          const todayMedications = (await Promise.all(medications.map(medication => {
            return supabase.from('today_medications_count').select('*, medication(*)').eq('medication_id', medication.id)
          })));

          console.log(todayMedications);

          await Promise.all(todayMedications.map(medication => {
            if(medication.count === 0) {
              return supabase.from('today_medications').insert({
                medication_id: medication.medication_id
              })
            }
            return null;
          }))

          console.debug();

          Notifications.scheduleNotificationAsync({
            content: {
              title: 'Look at that notification',
              body: "I'm so proud of myself!",
              priority: 'max',
              vibrate: [0, 250, 250, 250]
            },
            trigger: {
              seconds: 10
            },
          });


        }
      } catch(err) {
        console.error(err);
      } finally {
        setLoading(false);
      }

      

    })()
  }, []);

  const [fontsLoaded, fontError] = useFonts({
    'Montserrat-Regular': Montserrat_400Regular,
    'Montserrat-Bold': Montserrat_700Bold,
    'Gotham-Regular': require('./assets/fonts/Gotham-Book.otf'),
    'Gotham-Bold': require('./assets/fonts/Gotham-Bold.otf'),
  });

  if (!fontsLoaded && !fontError) {
    return null;
  }

  if(isLoading) {
    return null;
  }

  return (
    <PaperProvider>
      <NavigationContainer>
        <SignNavigator isLogged={!!user} />
      </NavigationContainer>
    </PaperProvider>
  );
}

async function registerForNotifications() {
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
  }
}