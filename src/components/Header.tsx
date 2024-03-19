import React, { PropsWithChildren } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

type HeaderProps = PropsWithChildren<{
    title: string;
    isBackButtonDisplayed: boolean,
    navigation: any
}>;

const Header = (props: HeaderProps) => {
    return <View style={styles.mainContainer}>
        {props?.isBackButtonDisplayed ? 
        <TouchableOpacity style={styles.imageContainer} onPress={props?.navigation.goBack}>
            <Image style={styles.image} source={require('../assets/backIcon.png')}/>
        </TouchableOpacity> : null}
        <Text style={styles.title}>{props?.title}</Text>
    </View>
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: "white",
        height: 54,
        justifyContent: 'center'
    },
    title: {
        marginHorizontal: 50,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    imageContainer: {
        position:'absolute',
        left:15,
    },
    image:{
        width: 30, 
        height: 30
    }
})

export default Header;