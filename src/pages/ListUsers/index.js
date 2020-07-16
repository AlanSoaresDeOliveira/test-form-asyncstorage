import React, {useEffect, useState} from 'react';
import {ScrollView} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import {
  Container,
  TextName,
  TextInputName,
  Header,
  CardImage,
  CardTwo,
  CardOne,
  NameAndTime,
  PostImage,
  CardThree,
  TextTime,
  ContainerImage,
} from './styles';

import Rafa from '../../images/rafa.jpg';
import Alan from '../../images/alan.jpg';
import Turma from '../../images/turma.jpg';

const ListUsers = () => {
  const [users, setUsers] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const jsonValue = await AsyncStorage.getItem('@storage_Key');
        if (jsonValue !== null) {
          setUsers(JSON.parse(jsonValue));
        }
      } catch (e) {
        console.log(e);
      }
    }
    getData();
  }, []);
  return (
    <Container>
      <Header>
        <CardImage source={Alan} />
        <TextInputName placeholder="Digite o que vc está pensando" />
      </Header>
      <ScrollView>
        <CardThree>
          <CardTwo>
            <CardOne source={Rafa} />
            <NameAndTime>
              <TextName>Rafaela Soares</TextName>
              <TextTime>16h</TextTime>
            </NameAndTime>
          </CardTwo>
          <ContainerImage>
            <PostImage source={Turma} />
          </ContainerImage>
        </CardThree>

        <CardThree>
          <CardTwo>
            <CardOne source={Alan} />
            <NameAndTime>
              <TextName>Alan Soares</TextName>
              <TextTime>08h</TextTime>
            </NameAndTime>
          </CardTwo>
          <PostImage source={Alan} />
        </CardThree>
      </ScrollView>
    </Container>
  );
};

export default ListUsers;
