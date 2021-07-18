import * as React from 'react';
import { View, Text, Image, TouchableOpacity, TextInput } from 'react-native';

export default function LoginScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center',}}>
			

		<View style={{marginBottom: '20%'}}>
		<Image style={{width: 200, height: 200, paddingHorizontal: '20%'}} source={require('../assets/open-book.png')}/>

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
				<Image source={require('../assets/lock.png')} style={{ padding: 10, margin: 5, height: 25, width: 25, resizeMode: 'stretch', alignItems: 'center',}}/>
					<TextInput
						secureTextEntry={true}
						style={{flex: 1, color:'white'}}
						placeholder="Password"
						placeholderTextColor='white'
						underlineColorAndroid="transparent"
					/>
			</View>

			<View style={{flexDirection: 'column', alignItems: 'center'}}>
				<TouchableOpacity style={{marginTop: 10}}><Text style={{color: '#00a3cc'}} onPress={() => navigation.navigate('Signin')}>Registe-se</Text></TouchableOpacity>
				<TouchableOpacity style={{marginTop: 10}}><Text style={{color: '#00a3cc'}} onPress={() => navigation.navigate('ForgotPass')}>Não sabe a palavra pass?</Text></TouchableOpacity>
			</View>

			<TouchableOpacity style={{ backgroundColor: '#00a3cc', marginTop: '30%', paddingTop: 20, paddingBottom: 20, paddingLeft: 40, paddingRight: 40, borderRadius: 12,}}
			onPress={() => navigation.navigate('Main')}>
				<Text style={{fontSize: 36, color: 'white', fontWeight: 'bold'}}>Login</Text>
			</TouchableOpacity>
	</View>
	);
  }