import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, SafeAreaView,
    TextInput, Platform, StatusBar, ScrollView, Image, Dimensions, Animated} from 'react-native';

//componentes
import Category from '../components/Explore/Category';
import Home from '../components/Explore/Home';
import Tag from '../components/Explore/Tag';

import Ionicons from 'react-native-vector-icons/Ionicons';

const {height, width} = Dimensions.get('window');


const Explore = () => {

    const [scrollY, setScrollY] = useState('');
    const [headerHeight, setHeaderHeight] = useState('');

    useEffect( () => {
        const headerPlatform = () =>{
            let startHeaderHeight = 80;
            let endHeaderHeight = 50;

            if(Platform.OS === 'android') {
                startHeaderHeight = 100 + StatusBar.currentHeight;
                endHeaderHeight = 70 + StatusBar.currentHeight;
            }


        };

        headerPlatform();

    },[]);



    return (
        <SafeAreaView style={{flex:1, backgroundColor: 'white'}}>
            <View style={{flex:1}}>
                <View style={ styles.searchContainer}>
                    <View style={styles.inputSearchContainer}>

                        <Ionicons name="ios-search" size={20} style={{marginHorizontal: 10, marginTop: 10}} />
                        <TextInput
                            underlineColoAndroid="transparent"
                            placeholder="Try New Delhi"
                            placeholderTextColor="grey"
                            style={styles.inputSearch}
                        />
                    </View>

                    <View
                        style={{flexDirection: 'row', marginHorizontal: '4%', position:'relative', top:10}}
                    >
                        <Tag name="Guests" />
                        <Tag name="Dates" />

                    </View>

                </View>

                <ScrollView
                    scrollEventThrottle={16}

                >
                    <View style={{flex: 1, backgroundColor: 'white', paddingTop: 20}}>
                        <Text style={{fontSize: 26, fontWeight: '700', paddingHorizontal: 20 }}>
                            What can we help you find, Xavier?
                        </Text>
                        <View style={{height: 130, marginTop: 20}}>
                            <ScrollView
                                horizontal={true}
                                showsHorizontalScrollIndicator={false}
                            >
                                <Category
                                imageUri={require('../assets/home.jpg')}
                                name="Home"
                                />

                                <Category
                                    imageUri={require('../assets/experiences.jpg')}
                                    name="Experiences"
                                />

                                <Category
                                    imageUri={require('../assets/restaurant.jpg')}
                                    name="Restaurant"
                                />


                            </ScrollView>
                        </View>

                        <View style={{marginTop: 40, paddingHorizontal: 20}}>
                            <Text style={{fontSize: 25, fontWeight: '700'}}> Introducing Airbnb Plus</Text>
                            <Text style={{fontWeight: '100', marginTop: 10}}>
                                A new selection of homes verified for quality & comfort
                            </Text>

                            <View style={{width: width - 40, height: 200,
                                marginTop: 20 }}>
                                <Image
                                    style={styles.introducingImage}
                                    source={require('../assets/home.jpg')}
                                />
                            </View>
                        </View>

                        <View style={{marginTop: 40}}>
                            <Text style={{fontSize:24, fontWeight: '700', paddingHorizontal:20}}>
                                Homes around the world
                            </Text>

                            <View style={{paddingHorizontal: 20, marginTop: 20,
                                flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home
                                    width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />

                                <Home
                                    width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />

                                <Home
                                    width={width}
                                    name="The Cozy Place"
                                    type="PRIVATE ROOM - 2 BEDS"
                                    price={82}
                                    rating={4}
                                />



                            </View>

                        </View>

                    </View>
                </ScrollView>

            </View>
        </SafeAreaView>

    );

};

const styles = StyleSheet.create({
 searchContainer : {
     height: Platform.OS === 'android' ? 100+StatusBar.currentHeight : 80,
     backgroundColor: 'white',
     borderBottomWidth: 1,
     borderBottomColor: '#dddddd',
 },
  inputSearchContainer : {
      flexDirection: 'row',
      padding: 5,
      backgroundColor: 'white',
      marginHorizontal: '4%',
      shadowOffset: {width: 0, height: 0},
      shadowColor: 'black',
      shadowOpacity: 0.2,
      elevation: 4,
      marginTop: Platform.OS === 'android' ? 20 : null,
  },
    inputSearch : {
        flex: 1,
        fontWeight: '700',
        backgroundColor: 'white',
        marginLeft:10,
    },

    introducingImage : {
        flex: 1,
        height: null,
        width: null,
        resizeMode: 'cover',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#dddddd',
    },

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

export default Explore;
