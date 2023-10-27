import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';
import { styles } from '../styles/ProfileStyle.js';
import Badge from '../../assets/icons/badge2.svg';
import Edit  from '../../assets/icons/edit.svg';
export function ProfileScreen() {
	return (
		<View style={{ flex: 1 }}>
			<View style={styles.topBox}>
					<Edit
					width={36}
					height={36}
					fill="#FFF"
					style={styles.edit}
				/>
				<View style={styles.pictureBox}>
					<Image
						style={styles.profilePicture}
						source={require('../../assets/fotoBonita.jpg')}
					/>
				</View>
				<Text style={styles.profileName}>Gato Maluco</Text>
			</View>
			<View style={styles.bottomBox}>
				<View style={styles.achievementsBox}>
					<Text style={styles.achievementsTittle}>Consquistas</Text>
					<Achievement />
					<Achievement />
					<LockAchievement />
					<LockAchievement />
				</View>
				<Button
					mode="conteined"
					buttonColor="#ED8A2F"
					textColor="#FFF"
					style={styles.buttonPremium}
				>
					<Text>Ativar premium</Text>
				</Button>
			</View>
		</View>
	);
}

function Achievement() {
	return (
		<View style={{ flexDirection: 'row', padding: 6}}>
			<View style={{borderWidth: 6,   borderColor: "#307FAB",  borderRadius: 5, marginRight: 8}}>
				<Badge
					width={36}
					height={36}
					fill="#FFF"
					style={styles.badgeList}
				/>
			</View>
			<View style={{padding: 6}}>
					<Text style={{fontSize: 15}}>Lorem ipsum</Text>
				</View>
		</View>
	);
}
function LockAchievement() {
	return (
		<View style={{ flexDirection: 'row', padding: 6}}>
				<View style={{width:48, height: 48, backgroundColor: "#8BBCD8",  borderRadius: 5, marginRight: 8}}>					
				</View>
				<View style={{padding: 6}}>
					<Text style={{fontSize: 15}}>Lorem ipsum</Text>
				</View>

		</View>
	);
}
