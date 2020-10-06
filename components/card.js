import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SearchInput from '../components/SearchInput'
import OriginalSentence from '../components/orignal_sentence'
import TranslatedSentence from '../components/translated_sentence'
import {Button } from 'react-native-elements'


import {
	View,
	ScrollView,
StyleSheet,
Text,
KeyboardAvoidingView,
Platform,
TextInput,
} from 'react-native';

export default class Card extends React.Component {
	render() {
  	return (
    	<View style={styles.container}>
				<ScrollView style={styles.scroll}>
					<OriginalSentence />
					<TranslatedSentence />
				</ ScrollView>
	  	</View>
  	);
}
}

const styles = StyleSheet.create({
container: {
    	flex: 1,
    	backgroundColor: '#fff',
  	},
	textbox:{
		flex:1,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: 'E91E63',
		width: '100%',
		padding:5,
		backgroundColor: 'red',
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
  scroll: {
	},
	refresh: {
		flex:1,
		height:'20%'
	}
});
