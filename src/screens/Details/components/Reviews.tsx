
import React, { PropsWithChildren } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity
} from 'react-native';

const Reviews = (props:any) => {
    return <View>
            <Text style={[styles.reviewsLabel]}><Text style={styles.reviewsLabelUnderline}>Reviews</Text> ({props?.data?.featuredReviews?.edges?.length})</Text>
            {
                props?.data?.featuredReviews?.edges?.map((item, index)=>{
                    // console.log('itemitem: '+JSON.stringify(item, null, 2));
                    
                    return <View key={index} style={styles.reviewContainer}>
                            <Text style={styles.author}>{item?.node?.author?.nickName}</Text>
                            <Text style={styles.summary}>{item?.node?.summary?.originalText}</Text>
                            <Text style={styles.description}>{item?.node?.text?.originalText?.plainText}</Text>

                        </View>
                })
            }
    </View>
}

const styles = StyleSheet.create({
    reviewsLabelUnderline:{
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginTop: 20,
        textDecorationLine: 'underline'
    },
    reviewsLabel:{
        fontSize: 20,
        fontWeight: '600',
        color: 'white',
        marginTop: 20
    
    },
    reviewContainer:{
        marginTop: 10,
        flexDirection:'column',
        backgroundColor:'lightgrey',
        borderRadius:6,
        padding: 10
    },
    author:{
        fontSize: 14,
        fontWeight: '600',
        color:'black'
    },
    summary:{
        marginTop: 10,
        fontSize: 20,
        fontWeight: '600',
        color:'black'
    },
    description:{
        marginTop:5,
        fontSize: 16,
        color:'black'
    }
})

export default Reviews;