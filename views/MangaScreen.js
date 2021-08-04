/*import * as React from 'react';*/
import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, ImageBackground } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { v4 as uuid } from 'uuid';


export default function MangaScreen({ navigation }) {

	const [isLoading] = useState(true);
  	const [mangas, setMangas] = useState([]);

	  useEffect(() => {
		fetch("https://jikan1.p.rapidapi.com/anime/16498/episodes", {
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


	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
				<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row', marginBottom: '5%', height: '60%'}}>
					<ImageBackground source = {{uri: (item.image_url)}} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>
      					<TouchableOpacity onPress={() => navigation.goBack()} style={{marginTop: 52,}}>
							<MaterialCommunityIcons name="arrow-left" color={'#00ccff'} size={34}/>
						</TouchableOpacity>

						<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20, marginTop: 420, borderRadius: 50, width: 250, justifyContent: 'center', alignItems: 'center', alignSelf: 'center'}}>
							<MaterialCommunityIcons name="play-circle-outline" color={'white'} size={24}/>
							<View>
								<Text style={{color: 'white', marginLeft: 5}}>Continuar 106</Text>
							</View>
						</TouchableOpacity>

    				</ImageBackground>
				</View> 
		</View>
	);
  }