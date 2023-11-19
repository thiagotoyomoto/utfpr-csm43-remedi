import { useEffect, useState } from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import { NavigationContainer } from '@react-navigation/native';

import { supabase } from '@/lib/supabase';
import { auth } from '@/auth';
import { SignNavigator } from '@/navigators';
import { useMedicationsStore, useProfileStore, useWeekDayStore, useUserStore } from '@/stores';

export default function App() {
  const { user, setUser } = useUserStore();
  const { setProfile } = useProfileStore();
  const { setWeekDay } = useWeekDayStore();
  const { setMedications } = useMedicationsStore();
  const [ isLoading, setLoading ] = useState(true);

  useEffect(() => {
    (async () => {
      setWeekDay();
  
      try {
        const user = await auth.getUser();
        const profile = await auth.getProfile();
  
        setUser(user);
        setProfile(profile);

        const medications = (await supabase.from('medications').select('id,name,stock,frequency,initial_time')).data;
        setMedications(medications);
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
