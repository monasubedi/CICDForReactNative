import React, {useEffect} from 'react';
import {Alert, Button, TextInput, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
//   useEffect(() => {
//     checkPreviousCrashes();
//   }, []);
  const trackEvents = () => {
    Analytics.trackEvent('calculate_test', {Internet: 'Wifi'});
  };
//   const checkPreviousCrashes = async () => {
//     const didCrash = await Crashes.hasCrashedInLastSession();
//     if (didCrash) {
//       const report = await Crashes.lastSessionCrashReport();
//       Alert.alert('Sorry for the crash, we are working on a solution');
//     }
//   };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput placeholder="Enter your name" />
      <TextInput placeholder="Enter your email" />
      <Button title="Calculate Inflation" onPress={trackEvents} />
    </View>
  );
};

export default App;
