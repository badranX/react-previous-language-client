import { StatusBar } from 'expo-status-bar';
import React from 'react';
import SearchInput from '../components/SearchInput'
import WordItem from '../components/word_item'
import {Button } from 'react-native-elements'

import {
	View,
	ScrollView,
StyleSheet,
SafeAreaView,
	FlatList,
Text,
KeyboardAvoidingView,
Platform,
TextInput,
} from 'react-native';

const DATA = [
	{
	id: 1,
	title: 'First'
	},
	{
		id:2,
		title: 'Second',
	},
];


	const renderItem = ({ item }) => (
    <WordItem title={item.title} />
  );

export default class Words extends React.Component {
	render() {
		return (
		
			<SafeAreaView style={styles.container}>

				<View style={styles.header}>
					<Text style={styles.header_txt}>
						Top 5000 words
						</Text>

					<View style={{flex:0.5}}>
					<Button style={{}} title="Home" raised icon={{name: 'cached'}}/>
						</View>
				</View>
				<FlatList
			    data={DATA}
					renderItem={renderItem}
        	keyExtractor={item => item.id}
			/>
			</SafeAreaView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex:1,
},
	header_txt:{
		flex:1,
		fontWeight: 'bold',
		textAlign: 'center',
		fontSize: 22,
	},
	header: {
		flexDirection: 'row',
		
	}

});
