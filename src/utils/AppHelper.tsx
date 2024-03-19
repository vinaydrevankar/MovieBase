
import React from 'react';
import NetInfo from '@react-native-community/netinfo';

export const getInternetConnectionStatus = async () => {
    try {
      const networkState = await NetInfo.fetch()
      console.log('networkState:'+JSON.stringify(networkState));
      
      if (networkState.isConnected) {
        return true;
      }
    } catch (error) {
        console.log('getInternetConnectionStatus error: '+JSON.stringify(error, null, 2));
    }
    return false;
  }
  