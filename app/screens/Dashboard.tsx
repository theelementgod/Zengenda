import { View, Text, Button, StyleSheet } from 'react-native'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH, FIRESTORE_DB } from '../../FirebaseConfig';
import { useEffect } from 'react';

interface RouterProps {
    navigation: NavigationProp<any, any>;
}

const Dashboard = ({ navigation }: RouterProps) => {

  useEffect(() => {
  }, [])

  return (
    <View style={styles.container}>
        <Button onPress={() => navigation.navigate('Add Task')} title="Add Todo" />
        <Button onPress={() => navigation.navigate('details')} title="Open Details" />
        <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  )
}
export default Dashboard
const styles = StyleSheet.create({
  horizontalFlex: {
    flexDirection: 'row'
  },
  categoryList: {
    
  },
  container: {

  },
})