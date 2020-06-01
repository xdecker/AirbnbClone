import React from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import StarRating from 'react-native-star-rating';

const Home = ({width, rating, type, name, price}) => {
    return (

        <View style={{width: width/2 - 30, height: width/2 - 30, borderWidth: 0.5, borderColor: '#dddddd'}}>
            <View style={{flex:1, justifyContent:'space-evenly'}}>
                <Image
                    style={{flex:1, width:null, height:null, resizeMode: 'cover'}}
                    source={require('../../assets/home.jpg')} />
            </View>

            <View style={{flex:1}}>
                <Text style={{fontSize: 10, color:'#b63838'}}>{type}</Text>
                <Text style={{fontSize: 12, fontWeight: 'bold'}}>{name}</Text>
                <Text style={{fontSize: 10}}>${price}</Text>
                <StarRating
                    disable={true}
                    maxStars={5}
                    rating={rating}
                    starSize={10}
                />
            </View>

        </View>

    );
};

const styles = StyleSheet.create({

});

export default Home;

