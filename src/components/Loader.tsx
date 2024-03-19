import React, { PropsWithChildren } from 'react';
import {
  View,
  ActivityIndicator,
  StyleSheet
} from 'react-native';

const Loader = () =>{
    return <View style={styles.mainContainer}>
        <ActivityIndicator size={'large'}/>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        backgroundColor: "rgba(255,255,255, 0.8)",
        alignItems:'center',
        justifyContent:'center'
    }
})

export default Loader;