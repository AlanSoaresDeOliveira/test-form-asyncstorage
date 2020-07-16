import React, {useState, useRef, useCallback, useEffect} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as Yup from 'yup';
import {Form} from '@unform/mobile';

import Input from '../../components/Input';
import {
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
  TouchableOpacity,
  Text,
} from 'react-native';
import {
  Conatiner,
  Button,
  ButtonText,
  ContainerInput,
  TextInput,
  CheckAddress,
} from './styles';

const Dashboard = ({navigation}) => {
  const [entrega, setEntrega] = useState(null);
  const formRef = useRef(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     const entrega = formRef.current.getFieldValue('enderecoEntrega');
  //     console.log(entrega);
  //   }, 2000);
  // }, []);

  useEffect(() => {
    const entregas = formRef.current.setFieldValue('enderecoEntrega', entrega);
    console.log(entregas);
  }, [entrega]);

  function functionThatGetsData(data) {
    formRef.current.setFieldValue('enderecoEntrega', data);
    setEntrega(data);

    console.log(data);
    console.log(entrega);
  }

  const handleSignUp = useCallback(
    async user => {
      try {
        formRef.current?.setErrors({});
        const schema = Yup.object().shape({
          name: Yup.string().required('Nome obrigatório'),
          sobrenome: Yup.string().required('Sobrenome obrigatório'),
          dataNascimento: Yup.string().required(
            'Data de Nascimento obrigatório',
          ),
          endereco: Yup.string().required('Endereço Obrigatório'),
          enderecoEntrega: Yup.string().required(
            'Endereço de entrega Obrigatório',
          ),
        });
        await schema.validate(user, {
          abortEarly: false,
        });

        //await api.post('/users', data);

        Alert.alert('Cadastro realizado com successo!');

        navigation.navigate('ListUsers', {user});
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = {};
          err.inner.forEach(error => {
            errors[error.path] = error.message;
          });
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Erro no cadastro',
          'Ocorreu um erro ao fazer o cadastro. Tente novamente!',
        );
      }
    },
    [navigation],
  );

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
            <Form ref={formRef} onSubmit={handleSignUp}>
              <Input autoCapitalize="words" name="name" placeholder="Nome" />
              <Input
                autoCapitalize="words"
                name="sobrenome"
                placeholder="Sobrenome"
              />
              <Input
                autoCapitalize="words"
                name="dataNascimento"
                placeholder="Data de Nascimento"
              />
              <Input
                autoCapitalize="words"
                name="endereco"
                placeholder="Endereço"
              />
              <TouchableOpacity
                onPress={() => {
                  functionThatGetsData(
                    formRef.current.getFieldValue('endereco'),
                  );
                }}>
                <CheckAddress>
                  <Icon name="check" size={30} color="#900" />
                  <Text>Utilizar como endereço de entrega</Text>
                </CheckAddress>
              </TouchableOpacity>
              <Input
                autoCapitalize="words"
                name="enderecoEntrega"
                placeholder="Endereço de Entrega"
              />
              <Button onPress={() => formRef.current.submitForm()}>
                <ButtonText>Enviar</ButtonText>
              </Button>
            </Form>
          </Conatiner>
        </ScrollView>
      </KeyboardAvoidingView>
    </>
  );
};
export default Dashboard;
