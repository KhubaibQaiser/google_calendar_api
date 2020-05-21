A sample project to demonstrate how to consume [Google Calendar REST API](https://developers.google.com/calendar/v3/reference) in React Native using the Clean Architecutre.

# Screen-shots:
<img src="https://github.com/khubaib-qaiser-dev/google-calendar-api/blob/master/ss/Screenshot_20200515-134941.png" alt="Home Screen" width="40%"/>
<img src="https://github.com/khubaib-qaiser-dev/google-calendar-api/blob/master/ss/Screenshot_20200515-134947.png" alt="Holidays List Screen - Loading" width="40%"/>
<img src="https://github.com/khubaib-qaiser-dev/google-calendar-api/blob/master/ss/Screenshot_20200515-134951.png" alt="Holidays List Screen" width="40%"/>

# How to run?
* Create a `.env` file in the root directory.
* Add following configurations to it:
  ```
  REQUEST_TIMEOUT=10000
  GOOGLE_CALENDAR_BASE_URL=https://www.googleapis.com/calendar/v3/
  GOOGLE_CALENDAR_API_KEY=YOUR_API_KEY
  ```
* Run `npm install` to install the dependencies and then run it on your device/emulator using `npx react-native run-android`.

# Dependencies:
* [React Native](https://reactnative.dev/)
* [React Native Navigation](https://github.com/wix/react-native-navigation)
* [TypeScript](https://www.typescriptlang.org/)
* [Axios](https://github.com/axios/axios)

# Architecture:
* [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - with some improvements

# Features:
* Implementation of the clean architecture, with some improvements that makes the code highly scalable for both online-first & offline-first approach.
* Screen navigation implemented using [React Native Navigation](https://github.com/wix/react-native-navigation).
* Fetch public holidays from **Google Calendar REST API**.
* Show the holidays list using a [FlatList](https://reactnative.dev/docs/flatlist) component.
* A sample custom **Button** component with [Activity Indicator](https://reactnative.dev/docs/activityindicator) to show progress during loading.

# TODOs:
* Add error handling for API failure
* Integrate Redux - if needed
* Integrate Unit testing using [Jest](https://jestjs.io/docs/en/tutorial-react-native)
* Configure path aliases/absolute paths
* Add skeleton loading screen

