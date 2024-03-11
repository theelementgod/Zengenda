import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'
import CategorySelector from '../components/CategorySelector';
import DueDateSelector from '../components/DueDateSelector';
import Checkbox from 'expo-checkbox';


export const styles = StyleSheet.create({
  totalView: {
    backgroundColor: '#FEFEFE',
  },
  headerContainer: {
    paddingTop: 20,
    paddingBottom: 10,
    alignItems: 'center',
    fontSize: 25,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#111111',
  },
  taskNameContainer: {
    paddingLeft: 15,
  },
  taskName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#111111',
  },
  nameInputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    paddingRight: 15,
  },
  nameInput: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    color: '#333',
  },
  descriptionInputContainer: {
    paddingTop: 10,
    paddingBottom: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FEFEFE'
  },
  descriptionInput: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    textAlignVertical: 'top',
    color: '#111111'
  },
  categoryContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    padding: 10,
  },
  categoryButton: {
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#F0F0F0',
  },
  categoryText: {
    fontSize: 16
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#FEFEFE',
  },
  subTaskButton: {
    backgroundColor: '#E7E7E7', 
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  subTaskButtonText: {
    color: '#111111', 
    fontSize: 13,
    textAlign: 'center',
  },
  taskButton: {
    backgroundColor: '#111111',
    borderRadius: 20,
    paddingVertical: 20,
    paddingHorizontal: 100,
  },
  taskButtonText: {
    color: '#E8E8E8',
    fontSize: 20,
  }
});


const AddTask = () => {

  const [isChecked, setChecked] = useState(false)
  const buttonPressed = () => {
    console.log('add task!')
  }

  return (
    <View style={styles.totalView}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Add Task</Text>
      </View>
      <View style={styles.taskNameContainer}>
        <Text style={styles.taskName}>Task Name</Text>
      </View>
      <View style={styles.nameInputContainer}>
        <TextInput style={styles.nameInput} placeholder='Add a task' placeholderTextColor='#888' />
      </View>
      <View style={styles.taskNameContainer}>
        <Text style={styles.taskName}>Task Description</Text>
      </View>
      <View style={styles.descriptionInputContainer}>
        <TextInput 
        style={styles.descriptionInput}
          placeholder='Description...'
          placeholderTextColor='#888'
          multiline={true} 
          numberOfLines={4}/>
      </View>
      <View style={styles.taskNameContainer}>
        <Text style={styles.taskName}>Category</Text>
      </View>
        <CategorySelector />
      <View style={styles.taskNameContainer}>
        <Text style={styles.taskName}>Due Date</Text>
      </View>
        <DueDateSelector />
      <View style={styles.taskNameContainer}>
        <Text style={styles.taskName}>High Priority<Checkbox value={isChecked} onValueChange={setChecked}/></Text> 
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.subTaskButton}>
        <Text style={styles.subTaskButtonText}>+ Add Subtask</Text>
      </TouchableOpacity>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.taskButton} onPress={buttonPressed}>
        <Text style={styles.taskButtonText}>Add Task</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
};

export default AddTask