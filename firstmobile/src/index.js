import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Text, StatusBar, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import api from './services/api';

export default function App() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    api.get('projects').then(response => {
      console.log(response.data)
      setProjects(response.data)
    })
  },[])

  async function handleAddProject(){
    const response = await api.post('projects', {
      title: `Meu novo projeto ${Date.now()}`,
      owner: "Eu Jéssica"
    })
    const project = response.data
    setProjects([...project, project])
  }

  return (
   <>
    <StatusBar backgroundColor='#711543' barStyle='light-content' />
    <SafeAreaView style={styles.container}>
      <FlatList 
        data={projects}
        keyExtractor={project => project.id}
        renderItem={({item})=> (
          <Text style={styles.text}> {item.title } </Text>
        )}
      />
      <TouchableOpacity activeOpacity={0.6} onPress={handleAddProject} style={styles.button}>
        <Text style={styles.buttonText}> Adicionar Projeto </Text>
      </TouchableOpacity>
    </SafeAreaView>
   </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#715C91',
  },
  text: {
    color: '#fff',
    fontSize: 30,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#fff',
    margin: 20,
    height: 50,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontWeight: 'bold',
    fontSize: 16
  }
})