import styled from 'styled-components/native';
import {RectButton} from 'react-native-gesture-handler';

export const Conatiner = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  margin: 25px;
`;
export const ContainerInput = styled.View`
  width: 100%;
  height: 60px;
  padding: 0 16px;
  background: #fff;
  border-radius: 10px;
  margin-bottom: 8px;
  border-width: 2px;
  border-color: #232129;
  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #232129;
  font-size: 16px;
  margin-top: 2px;
`;

export const TextDate = styled.Text`
  flex: 1;
  color: #232129;
  font-size: 16px;
  margin-top: 2px;
`;

export const Text = styled.Text`
  font-size: 25px;
`;

export const CheckAddress = styled.View`
  flex-direction: row;
  justify-content: space-between;
  /* margin-left: 5px; */
  align-items: center;
`;

export const Button = styled(RectButton)`
  width: 100%;
  height: 60px;
  background: #ff9000;
  border-radius: 10px;
  margin-top: 50px;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  color: #312e38;
  font-size: 18px;
`;
