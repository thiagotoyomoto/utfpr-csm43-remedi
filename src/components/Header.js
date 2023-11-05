import { React } from 'react';
import { View, Text, Pressable, Image } from 'react-native';
import { styles } from '../styles/HeaderStyle.js';

import MenuIcon from '../../assets/icons/menu.svg';

export function Header(args) {
	return (
		<View style={styles.headerBlock}>
			<Text style={styles.tittle}>{args.tittle}</Text>
			<Pressable>
				{args.typeButton == 'menu' ? (
					<MenuIcon
						width={36}
						height={36}
						fill="#000"
					/>
				) : (
					<></>
				)}
			</Pressable>
		</View>
	);
}
