import React, {useEffect} from 'react';
import {Alert, Button, View} from 'react-native';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';

const App = () => {
  useEffect(() => {
    checkPreviousCrashes();
  }, []);
  const checkPreviousCrashes = async () => {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if (didCrash) {
      const report = await Crashes.lastSessionCrashReport();
      Alert.alert('Sorry for the crash, we are working on a solution');
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Calculate Inflation"
        onPress={() =>
          Analytics.trackEvent('calculate_inflation', {
            Internet: 'Wifi',
            GPS: 'Off',
          })
        }
      />
    </View>
  );
};

export default App;
