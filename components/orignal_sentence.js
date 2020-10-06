import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SearchInput from '../components/SearchInput'
import { Button } from 'react-native-elements';

import {
	View,
StyleSheet,
Text,
KeyboardAvoidingView,
Platform,
TextInput,
} from 'react-native';


export default class OrignalSentence extends React.Component {
	render() {
  	return (
					<View style={styles.container}>
						<View style={{flexDirection:'row', justifyContent:'flex-end'}}>
							<Button style={styles.refresh} raised icon={{name: 'cached'}}/>
						</View>
						<Text style={styles.textexample}>Ich mich warum mich</Text>
					</View>
  	);
}
}

const styles = StyleSheet.create({
	container:{
		flex:1,
		borderWidth: 0.5,
		borderRadius: 6,
		borderColor: '00EE63',
		width: '100%',
		padding:5,
		backgroundColor: '#F9E966',
		//overflow: 'hidden'
	},
	textexample: {
		textAlign: 'center',
		color: '#000',
		padding:10
	},
	title: {
		flex:0.2,
		backgroundColor: '#00f',
	},
	refresh: {
		flex:1,
		height:'20%'
	}
});
