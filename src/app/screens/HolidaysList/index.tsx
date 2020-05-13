import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  StatusBar,
  FlatList,
} from 'react-native';

import GoogleCalendarRepositoryImpl from '../../../core/infrastructure/GoogleCalendar/GoogleCalendarRepositoryImpl';
import {CalendarEventItem} from '../../../core/data/entities/GoogleCalendar/CalendarEventItem';
import {GoogleCalendarServiceImpl} from '../../../core/usecases/GoogleCalendar/GoogleCalendarService';
import ButtonPrimary from '../../../app/components/Buttons/ButtonPrimary';

import styles from './styles';

export const HolidaysList = () => {
  const [holidays, setHolidays] = useState<CalendarEventItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onGetHolidays = async () => {
    setIsLoading(true);
    const googleCalendarRepo = new GoogleCalendarRepositoryImpl();
    const googleCalendarService = new GoogleCalendarServiceImpl(
      googleCalendarRepo,
    );
    const holidaysResponse = await googleCalendarService.GetPublicHolidays(
      'en',
      'pk',
      2020,
    );
    setIsLoading(false);
    setHolidays(holidaysResponse);
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.safeAreaView}>
        {holidays.length === 0 ? (
          <ButtonPrimary
            title="Get Holidays"
            onPress={onGetHolidays}
            isLoading={isLoading}
          />
        ) : (
          <FlatList
            data={holidays}
            renderItem={({item}) => (
              <Text key={item.id}>
                {item.start.date} - {item.summary}
              </Text>
            )}
            refreshing={isLoading}
            onRefresh={() => onGetHolidays()}
          />
        )}
      </SafeAreaView>
    </>
  );
};

HolidaysList.options = {
  topBar: {
    title: {
      text: 'Holidays List',
    },
  },
};
