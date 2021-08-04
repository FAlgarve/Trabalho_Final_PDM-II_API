/*import * as React from 'react';*/
import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, FlatList, renderItem, Button } from 'react-native';
/*import { useEffect } from 'react/cjs/react.production.min';*/
import { v4 as uuid } from 'uuid';
import AppLoading from 'expo-app-loading';

export default function MainScreen({ navigation }) {

	const [isLoading] = useState(true);
  	const [mangas, setMangas] = useState([]);

	  useEffect(() => {
		fetch("https://jikan1.p.rapidapi.com/season/later", {
	"method": "GET",
	"headers": {
		"x-rapidapi-key": "16f17ad003msh9b98ff618855c7ap135546jsn2ef1c7ca7993",
		"x-rapidapi-host": "jikan1.p.rapidapi.com"
	}
		})
		.then(response => {{return response.json();}})
		//.then((json) => {console.log(json)})
		.then((json) => setMangas(json.anime))
		.catch(err => {
			console.error(err);
		});
	  });


	  const renderItem = ({item}) => {
		  return(
				<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180, marginHorizontal: '3%'}} onPress={() => navigation.navigate('Manga')}>
					<Image style={{width: 100, height: 100, marginTop: '10%', paddingHorizontal: 20, borderRadius: 5}} source = {{uri: (item.image_url)}} />
					<Text style={{color: 'white', marginTop: 10, paddingHorizontal: 20, flexShrink: 1}}>{(item.title)}</Text>
				</TouchableOpacity>
		)
	  }

	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center'}}>
			
			<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginBottom: '5%',marginLeft: '5%'}} source={require('../assets/open-book.png')}/>
				<Text style={{alignSelf:'center', marginTop: '5%', marginLeft: '10%', color: 'white', fontSize: 24}}> Updates Recentes </Text>
			</View>

			<SafeAreaView style={{ flex: 1, width: '100%', flexDirection: 'column'}}>
				<View style={{backgroundColor: '#333', alignItems: 'center', justifyContent: 'center'}}>
				<FlatList
                    data={mangas}
                    renderItem={renderItem}
                    keyExtractor={(item) => uuid()} 
					numColumns={2}
					removeClippedSubviews = {true}
					maxToRenderPerBatch = {10}
					showsVerticalScrollIndicator = {false}>
                </FlatList>
				</View>
    		</SafeAreaView>
		</View>
	);
  }