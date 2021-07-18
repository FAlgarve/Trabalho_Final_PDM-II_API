import * as React from 'react';
import { View, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


export default function MangaScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>

					
				<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row', marginBottom: '5%', height: '60%'}}>
					<ImageBackground source={require('../assets/dr_stone.png')} style={{ flex: 1, resizeMode: "cover", justifyContent: "center"}}>
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
			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#333', width: '100%', marginTop: 15}}>	
				<View style={{width: '100%', backgroundColor: '#333'}}>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#201 - Dr. Stone 201</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#200 - Dr. Stone 200</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#199 - Dr. Stone 199</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#198 - Dr. Stone 198</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#197 - Dr. Stone 197</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#196 - Dr. Stone 196</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#195 - Dr. Stone 195</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#194 - Dr. Stone 194</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#193 - Dr. Stone 193</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#192 - Dr. Stone 192</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#191 - Dr. Stone 191</Text>
					</View>
				</TouchableOpacity>
				
				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>#190 - Dr. Stone 190</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#333', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20, justifyContent: 'center', alignItems: 'center'}}>
					<View>
						<Text style={{color: '#00ccff', marginLeft: 5}}>Mostrar Todos os capítulos</Text>
					</View>
				</TouchableOpacity>
				</View>
			</ScrollView>
		</View>
	);
  }