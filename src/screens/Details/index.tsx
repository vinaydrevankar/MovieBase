import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import Header from '../../components/Header';
import { useNavigation } from '@react-navigation/native';

const Details = () =>{
    const navigation = useNavigation()
    return <View style={styles.mainContainer}>
            <Header title={"Movie Details"} isBackButtonDisplayed={true} navigation={navigation}/>

    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "green",
    }
})

export default Details;