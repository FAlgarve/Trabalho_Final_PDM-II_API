import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

export default function SigninScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
			

		<View style={{marginBottom: '20%'}}>
		<Image style={{width: 200, height: 200, paddingHorizontal: 40}} source={require('../assets/open-book.png')}/>

		<Text style={{ fontSize: 36, color: 'white', fontWeight: 'bold'}}>MANGAS PT</Text>
		</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
					<Image source={require('../assets/user.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput style={{flex: 1, color:'white'}}
						placeholder="Username"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('../assets/at.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						placeholder="Email"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('../assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						secureTextEntry={true}
						placeholder="Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', backgroundColor: 'transparent', borderWidth: 0.5, borderColor: '#00ccff', height: 40, borderRadius: 5, margin: 10,}}>
				<Image source={require('../assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						style={{flex: 1, color:'white'}}
						secureTextEntry={true}
						placeholder="Confirm Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<TouchableOpacity style={{ backgroundColor: '#00a3cc', marginTop: '30%', paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40, borderRadius: 12,}}
			onPress={() => navigation.navigate('Main')}>
				<Text style={{fontSize: 36, color: 'white', fontWeight: 'bold'}}>Registar</Text>
			</TouchableOpacity>
	</View>
	);
  }