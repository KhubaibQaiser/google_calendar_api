import React, {useState, useEffect} from 'react';
import {SafeAreaView, StatusBar, FlatList} from 'react-native';
import {Navigation} from 'react-native-navigation';

import {CalendarEventItem} from '../../../core/data/entities/GoogleCalendar/CalendarEventItem';
import {GoogleCalendarServiceImpl} from '../../../core/usecases/GoogleCalendar/GoogleCalendarService';
import {NavigationMap} from '../navigation';
import HolidayListItem from './components/HolidayListItem';
import EmptyListMessage from './components/EmptyListMessage';

import styles from './styles';

export const HolidaysList = (props: {componentId: string}) => {
  const [holidays, setHolidays] = useState<CalendarEventItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onGetHolidays = async () => {
    setIsLoading(true);
    const holidaysResponse = await GoogleCalendarServiceImpl.getInstance().getPublicHolidays(
      'en',
      'pk',
      2020,
    );
    setIsLoading(false);
    setHolidays(holidaysResponse);
  };

  useEffect(() => {
    Navigation.mergeOptions(props.componentId, {
      ...NavigationMap.HolidaysList.options,
    });
    onGetHolidays();
  }, [props.componentId]);

  return (
    <>
      <SafeAreaView style={styles.safeAreaView}>
        <FlatList
          data={holidays}
          renderItem={({item}) => (
            <HolidayListItem
              key={item.id}
              holidayDate={item.start.date}
              holidayName={item.summary}
            />
          )}
          ListEmptyComponent={<EmptyListMessage />}
          refreshing={isLoading}
          onRefresh={() => onGetHolidays()}
          style={styles.holidaysList}
          contentContainerStyle={styles.holidaysListContentContainer}
        />
      </SafeAreaView>
    </>
  );
};
