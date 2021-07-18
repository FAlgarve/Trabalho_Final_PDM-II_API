import * as React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView } from 'react-native';


export default function FavoritesScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
			
			<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginBottom: '5%',marginLeft: '5%'}} source={require('../assets/open-book.png')}/>
				<Text style={{alignSelf:'center', marginTop: '5%', marginLeft: '10%', color: 'white', fontSize: 24}}> Mangas Favoritos </Text>
			</View>

			<SafeAreaView style={{ flex: 1, width: '100%', flexDirection: 'column'}}>

      			<ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false} style={{ backgroundColor: '#333',}}>

					<View style={{flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 20, paddingVertical: 20, justifyContent: 'space-between'}}>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

						<TouchableOpacity style={{marginBottom: 20, alignItems: 'center', backgroundColor: '#1a1a1a', borderRadius:12, width: 160, height: 180}} onPress={() => navigation.navigate('Manga')}>
							<Image style={{width: 80, height: 80, marginTop: '10%', paddingHorizontal: 20}} source={require('../assets/open-book.png')}/>
								<Text style={{color: 'white', marginTop: 10}}>Manga Example</Text>
						</TouchableOpacity>

					</View>

      			</ScrollView>

    		</SafeAreaView>
			
		</View>
	);
  }