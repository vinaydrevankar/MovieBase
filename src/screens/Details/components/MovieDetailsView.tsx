import React from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Genres from './Genres';
import Reviews from './Reviews';

const MovieDetailsView = (props: any) => {
    const moviesDetails = props?.moviesDetails;

    return <ScrollView style={styles.mainContainer}>
        <View style={styles.mainView}>
            <View style={styles.bannerContainer}>
                <Image style={{
                    width: 100,
                    height: 150,
                    borderRadius: 8
                }} source={{ uri: moviesDetails?.short?.image }} />
                <View style={{ flex: 1, paddingLeft: 10 }}>
                    <Text style={styles.bValue}>{moviesDetails?.short?.name}</Text>
                    <Genres genres={moviesDetails?.short?.genre} />
                    <Text style={styles.description}>{moviesDetails?.short?.description}</Text>
                </View>
            </View>
            <Text style={styles.bLabel}>Actors</Text>
            <Text style={styles.bTxt}>{
                moviesDetails?.short?.actor?.map((item, index) => {
                    return <Text>{item?.name}{(moviesDetails?.short?.actor?.length == index + 1) ? "" : ", "}</Text>
                })
            }</Text>
            
            <Text style={[styles.bLabel, { display:moviesDetails?.short?.keywords ? 'flex' : 'none'}]}>Keywords</Text>
            <Text style={[styles.bTxt, { display:moviesDetails?.short?.keywords ? 'flex' : 'none'}]}>{moviesDetails?.short?.keywords}</Text>
            <Reviews data={moviesDetails?.top} />
        </View>
    </ScrollView>
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: "#464a4f",
    },
    mainView: {
        flex: 1,
        padding: 20
    },
    bannerContainer: {
        flexDirection: 'row'
    },
    bValue: {
        width: '100%',
        fontSize: 28,
        fontWeight: "600",
        color: 'white',
        marginBottom: 5
    },
    description: {
        fontSize: 14,
        fontWeight: 'normal',
        marginTop: 5,
        color: 'white'
    },
    bLabel: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    bTxt: {
        fontSize: 16,
        fontWeight: 'normal',
        color: 'white',
        marginTop:5
    }

})

export default MovieDetailsView;