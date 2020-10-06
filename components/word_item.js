import React from 'react'
import {Button, View} from 'react-native'

export default class WordItem extends React.Component {
	render() {
		return (
			<View style={{
				padding:2
			}}
			>
			<Button
				style={{}}
				title={this.props.title}/>
			</View>
		)
	}
}
