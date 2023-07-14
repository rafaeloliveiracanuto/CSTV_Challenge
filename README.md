# CSTV - CS:GO Tournament Viewer

CSTV is a mobile app that displays CS:GO matches happening across several worldwide tournaments. It provides an easy way to stay up to date with the latest CS:GO matches, including match details such as team names, rosters, and match times. The app includes a pull-to-refresh feature for users to manually update the match data.

## Features

- Displays CS:GO matches happening across multiple worldwide tournaments.
- Shows match details, including team names, rosters, and match times.
- Implements a pull-to-refresh feature to manually update the match data.

## Libraries Used

- `@react-native-community/masked-view`: A library for using masked views in React Native.
- `@react-navigation/native`: A navigation library for React Native apps.
- `@react-navigation/stack`: A stack navigator for React Navigation.
- `axios`: A library for making HTTP requests.
- `react`: The core library for building React applications.
- `react-native`: The framework for building mobile apps using React.
- `react-native-gesture-handler`: A library for handling touch gestures in React Native apps.
- `react-native-reanimated`: A library for building smooth animations in React Native.
- `react-native-safe-area-context`: A library for handling safe area insets in React Native apps.
- `react-native-screens`: A library that provides native navigation screen components for React Native apps.
- `react-native-splash-screen`: A library for displaying a splash screen during app startup in React Native.
- `react-native-vector-icons`: A library for using vector icons in React Native apps.
- `react-query`: A library for managing and caching asynchronous data in React.

## Running the Project

To run the CSTV project on iOS or Android, follow the instructions below:

### Prerequisites

- Node.js (version 14 or higher)
- NPM (version 6 or higher)
- Xcode (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository to your local machine.
2. Open a terminal/command prompt and navigate to the project directory.
3. Run `npm install` to install the project dependencies.

### Running on iOS Simulator

1. Ensure that you have Xcode installed on your machine.
2. In the terminal, run `npx react-native run-ios` to launch the app on the iOS simulator.

### Running on Android Emulator

1. Ensure that you have Android Studio and an Android emulator set up.
2. Start the Android emulator.
3. In the terminal, run `npx react-native run-android` to launch the app on the Android emulator.

### Building and Running on Physical Device

For running the app on a physical device, follow the React Native instructions for generating the necessary build files and connecting the device to your development environment.

## Pull-to-Refresh Feature

CSTV includes a pull-to-refresh feature that allows users to manually update the match data. To use this feature, follow these steps:

1. Launch the CSTV app on your mobile device or emulator.
2. Navigate to the matches screen where the match data is displayed.
3. Swipe down on the screen and release to trigger the pull-to-refresh action.
4. The app will initiate a refresh and update the match data with the latest information.

## Contributing

Contributions to CSTV are welcome! If you have any suggestions, bug reports, or feature requests, please submit them to the project repository.
