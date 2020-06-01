import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Tag = ({name}) => {
    return (

        <View style={styles.animatedHeaderContainer}>
            <Text style={styles.textAnimatedHeader}>{name}</Text>
        </View>

    )

};

const styles = StyleSheet.create({
    animatedHeaderContainer : {
        minHeight: 20,
        minWidth: 40,
        padding: 5,
        backgroundColor: 'white',
        borderColor: '#dddddd',
        borderWidth: 0.2,
        borderRadius: 2,
        marginRight: 5,
    },

    textAnimatedHeader : {
        fontWeight: '700',
        fontSize: 10,
    }
});


export default Tag;
