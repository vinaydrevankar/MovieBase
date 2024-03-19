import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    TextInput
} from 'react-native';

const SearchBar = (props:any) =>{
    return <View style={styles.mainContainer}>
        <View style={styles.searchBox}>
            <Image tintColor={"grey"} style={{width:20, height:20, marginHorizontal:15}} source={require("../../../assets/searchIcon.png")}/>
            <TextInput style={styles.textInput} onChangeText={props?.onChangeText}></TextInput>
        </View>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        height: 60,
        backgroundColor: "white",
        alignItems:'center',
        justifyContent:'center',
        borderTopWidth: 0.3,
        borderTopColor: 'grey',
        borderBottomWidth: 0.3,
        borderBottomColor: 'grey',
    },
    searchBox:{
        flexDirection:'row',
        width: "90%",
        height: "80%",
        borderRadius: 54/2,
        alignItems:'center',
        backgroundColor: "lightgrey"
    },
    textInput:{
        flex:1, 
        marginRight: 15,
        height:'100%',
        fontSize: 14
        // backgroundColor:'green'
    }
})

export default SearchBar;