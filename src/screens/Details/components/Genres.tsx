
import React, { PropsWithChildren } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const Genres = (props:any) => {
    return <View style={styles.mainContainer}>
            {
                props?.genres?.map((item, index)=>{
                    return <View key={index+item} style={styles.genre}>
                            <Text style={styles.genreTxt}>{item}</Text>
                        </View>
                })
            }
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        flexDirection:'row',
        justifyContent:'space-around',
    },
    genre:{
        borderWidth:1,
        borderColor:"lightgrey",
        borderRadius: 14,
        paddingVertical: 5,
        paddingHorizontal: 10
    },
    genreTxt:{
        color:'white'
    }
})

export default Genres;