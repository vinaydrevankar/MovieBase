import React, { useEffect, useState } from 'react';
import {
    View,
    StyleSheet,
    Image,
    Text,
    TouchableOpacity
} from 'react-native';


const MovieItem = (props:any) =>{
    if (props?.item?.empty === true) {
        return <View style={styles.mainContainer}/>
    }

    return <TouchableOpacity style={styles.mainContainer} onPress={props?.onPress}>
            <Image style={styles.image} source={{uri:props?.item["#IMG_POSTER"]}}/>
            <Text style={styles.title} ellipsizeMode="tail">{props?.item["#TITLE"]}</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex:1,
        // height: 200,
        // backgroundColor: "yellow",
        alignItems:'center',
        justifyContent:'center',
        margin:15,
        borderRadius:6
    },
    image:{
        width:"100%",
        height: 170,
        borderRadius:6
    },
    title:{
        flex:1,
        width:'100%',
        fontSize:16,
        fontWeight:'600',
        marginTop: 5,
        textAlign:'center',
        // backgroundColor:'red'
    }
})

export default MovieItem;