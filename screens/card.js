import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SearchInput from '../components/SearchInput'
import OriginalSentence from '../components/orignal_sentence'
import Card from '../components/card'
import Header from '../components/header'
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

export default class CardScreen extends React.Component {
	render() {
  	return (
		<View style={styles.container}>
			<Header/>
			<View style = {styles.card}>
  			<Card/>
			</View>
		</View>
  );
}
}


const styles = StyleSheet.create({
	container: {
		justifyContent: 'flex-start',
	},
	card: {
    		backgroundColor: '#fff',
				
  		}
	}
)
