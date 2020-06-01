import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const Category = ({imageUri, name}) => {
    return(
        <View style={{height:130, width:130, marginLeft: 20, borderWidth: 0.5, borderColor:'#dddddd'}}>

            <View style={{flex:2}}>
                <Image
                    style={{flex:1, width: null, height: null, resizeMode:'cover'}}
                    source={imageUri} />
            </View>

            <View style={{flex:1, paddingLeft: 10, paddingTop: 10}}>
                <Text>{name}</Text>
            </View>

        </View>
    );

};
const styles = StyleSheet.create({

});

export default Category;
