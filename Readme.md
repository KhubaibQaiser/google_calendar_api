A sample project to demonstrate how to consume [Google Calendar REST API](https://developers.google.com/calendar/v3/reference) in React Native using the Clean Architecutre.

# How to run?
* Just run `npm install` to install the dependencies and then run it on your device/emulator using `npx react-native run-android`.

# Dependencies:
* [React Native](https://reactnative.dev/)
* [React Native Navigation](https://github.com/wix/react-native-navigation)
* [TypeScript](https://www.typescriptlang.org/)
* [Axios](https://github.com/axios/axios)

# Architecture:
* [The Clean Architecture](https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html) - with some improvements

# Features:
* Fetch public holidays from **Google Calendar REST API**.
* Show the holidays list [FlatList](https://reactnative.dev/docs/flatlist) component.
* A sample custom **Button** component with [Activity Indicator](https://reactnative.dev/docs/activityindicator) to show progress during loading.

# TODOs:
* Add error handling for API failure
* Integrate Redux - if needed
* Integrate Unit testing using [Jest](https://jestjs.io/docs/en/tutorial-react-native)

