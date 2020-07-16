import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import AsyncStorage from '@react-native-community/async-storage';
import {uuid} from 'uuidv4';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Conatiner,
  ContainerButton,
  ButtonText,
  ContainerInput,
  TextInput,
  CheckAddress,
  TextDate,
} from './styles';

const Dashboard = ({navigation}) => {
  const [name, setName] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [dataNascimento, setDataNascimento] = useState('');
  const [data, setData] = useState([]);
  const [endereco, setEndereco] = useState('');
  const [enderecoEntrega, setEnderecoEntrega] = useState('');

  const readItemFromStorage = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key');
      console.log(jsonValue);
      if (jsonValue !== null) {
        setData(jsonValue);
      }
    } catch (err) {
      console.log(err);
    }
    // console.log(data);
  };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('@storage_Key');
    } catch (err) {
      console.log(err);
    }

    console.log('Done.');
  };

  useEffect(() => {
    readItemFromStorage();
    // removeValue();
  }, []);

  const handleSubmit = async () => {
    const id = Math.random();
    const user = {
      id,
      name,
      sobrenome,
      dataNascimento,
      endereco,
      enderecoEntrega,
    };

    try {
      const jsonValue = JSON.stringify(user);
      await AsyncStorage.setItem('@storage_Key', jsonValue);
    } catch (err) {
      console.log(err);
    }

    setName('');
    setSobrenome('');
    setDataNascimento('');
    setEndereco('');
    setEnderecoEntrega('');
    setData([]);

    navigation.navigate('ListUsers');
    // navigation.navigate('ListUsers');
  };

  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{flex: 1}}>
          <Conatiner>
            <ContainerInput>
              <TextInput
                placeholder="Nome"
                value={name}
                onChangeText={text => setName(text)}
              />
            </ContainerInput>

            <ContainerInput>
              <TextInput
                placeholder="Sobrenome"
                onChangeText={text => setSobrenome(text)}
                value={sobrenome}
              />
            </ContainerInput>

            <ContainerInput>
              <TextInput
                placeholder="Data Nascimento"
                keyboardType="numeric"
                onChangeText={text => setDataNascimento(text)}
                value={dataNascimento}
              />
            </ContainerInput>

            <ContainerInput>
              <TextInput
                placeholder="Endereço"
                onChangeText={text => setEndereco(text)}
                value={endereco}
              />
            </ContainerInput>

            <TouchableOpacity onPress={() => setEnderecoEntrega(endereco)}>
              <CheckAddress>
                <Icon name="check" size={30} color="#900" />
                <Text>Utilizar como endereço de entrega</Text>
              </CheckAddress>
            </TouchableOpacity>

            <ContainerInput>
              <TextInput
                placeholder="Endereço de entrega"
                onChangeText={text => setEnderecoEntrega(text)}
                value={enderecoEntrega}
              />
            </ContainerInput>

            <ContainerButton onPress={handleSubmit}>
              <ButtonText>Enviar</ButtonText>
            </ContainerButton>
            <ContainerButton onPress={removeValue}>
              <ButtonText>Teste</ButtonText>
            </ContainerButton>
          </Conatiner>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};

export default Dashboard;
