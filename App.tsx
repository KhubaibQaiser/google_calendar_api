import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Button,
  StatusBar,
} from 'react-native';

import GoogleCalendarRepositoryImpl from './src/core/infrastructure/GoogleCalendar/GoogleCalendarRepositoryImpl';
import {GoogleCalendarServiceImpl} from './src/core/usecases/GoogleCalendar/GoogleCalendarService';
import {CalendarEventItem} from './src/core/data/entities/GoogleCalendar/CalendarEventItem';

const App = () => {
  const [holidays, setHolidays] = useState<CalendarEventItem[]>([]);

  const onGetHolidays = async () => {
    const googleCalendarRepo = new GoogleCalendarRepositoryImpl();
    const googleCalendarService = new GoogleCalendarServiceImpl(
      googleCalendarRepo,
    );
    const holidaysResponse = await googleCalendarService.GetPublicHolidays(
      'en',
      'pk',
      2020,
    );
    setHolidays(holidaysResponse);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Button title="Get Holidays" onPress={onGetHolidays} />
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View>
            {holidays.map((holiday) => (
              <Text key={holiday.id}>
                {holiday.start.date} - {holiday.summary}
              </Text>
            ))}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#eee',
  },
});

export default App;
