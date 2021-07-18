import * as React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export default function SettingsScreen({ navigation }) {
	return (
		<View style={{flex: 1, backgroundColor: '#333',	alignItems: 'center', justifyContent: 'center', backgroundColor: '#333'}}>
			
			<View style={{justifyContent: 'flex-start', width: '100%', backgroundColor: '#333', flexDirection: 'row', marginBottom: '5%'}}>
				<Image style={{width: 40, height: 40, marginTop: '10%', marginBottom: '5%',marginLeft: '5%'}} source={require('../assets/open-book.png')}/>
				<Text style={{alignSelf:'center', marginTop: '5%', marginLeft: '20%', color: 'white', fontSize: 24}}> Definições </Text>
			</View>

			<Text style={{color: 'white', fontSize: 20,alignSelf: 'flex-start', marginBottom: 15}}>Opeções de Conteudo</Text>

			<View style={{width: '100%', backgroundColor: '#333'}}>
			<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Selecionar Fonte</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Selecione a Fonte de Leitura</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="earth" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Selecionar Linguagem</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Selecione a Linguagem de Leitura</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="book-open-variant" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Selecionar Modo de Leitura</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Selecione o Modo de Leitura do Aplicativo</Text>
					</View>
				</TouchableOpacity>

				<Text style={{color: 'white', fontSize: 20,alignSelf: 'flex-start', marginVertical: 15}}>Opeções de Conta</Text>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="gift" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Go Premium</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Suporte esta aplicação ao tornarse membro VIP</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="account" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Conta</Text>
					</View>
				</TouchableOpacity>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="discord" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Discord</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Junte-se ao nosso Discord</Text>
					</View>
				</TouchableOpacity>

				<Text style={{color: 'white', fontSize: 20,alignSelf: 'flex-start', marginVertical: 15}}>Versão da Aplicação</Text>

				<TouchableOpacity style={{backgroundColor: '#1a1a1a', flexDirection: 'row', paddingHorizontal: 10, paddingVertical: 20}}>
					<MaterialCommunityIcons name="bug" color={'#737373'} size={24}/>
					<View>
						<Text style={{color: 'white', marginLeft: 5}}>Versão</Text>
						<Text style={{color: 'white', marginLeft: 5, fontSize: 10}}>Demasiadas para se contar</Text>
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
  }