# CSTV - CS:GO Tournament Viewer

CSTV is a mobile app that displays CS:GO matches happening across several worldwide tournaments. It provides an easy way to stay up to date with the latest CS:GO matches, including match details such as team names, rosters, and match times. The app includes a pull-to-refresh feature for users to manually update the match data.



https://github.com/rafaeloliveiracanuto/CSTV_Challenge/assets/25021148/9517312a-3db6-4a93-ba6e-896e6f148c21



## Features

- Splash screen displaying the app logo upon launch
- Main screen showing a sorted list of matches with league, team names, date and time, and match status
- Match detail screen with additional information about the selected match, including team rosters and player details
- Modal showing player info
- Pull-to-refresh functionality to reload the matches list
- Dates displayed in the device's local time
- Unit tests for critical components, functions and API requests
- Cross-platform support (iOS and Android)
- Pagination support for browsing through a large number of matches
- Responsive UI design for different screen sizes

## Libraries Used

- React Native: JavaScript framework for building native mobile apps
- TypeScript: Typed superset of JavaScript for improved code quality and development experience
- PandaScore API: Provides match data and details for CS:GO tournaments
- React Navigation: Navigation library for handling screen transitions
- Axios: HTTP client for making API requests
- Moment.js: Library for handling date and time formatting
- React Query: Library for data fetching and caching
- React Native Vector Icons: Library for adding vector icons to the app
- React Native Modal: Library for displaying modals in the app
- React Native Country Picker Modal: Library for country picker functionality
- Jest: JavaScript testing framework for unit tests

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
