import styled from 'styled-components/native';
import {Dimensions} from 'react-native';
import {Platform} from 'react-native';

export const Container = styled.View`
  flex: 1;
  margin-top: ${Platform.OS === 'ios' ? 32 : 0}px;
  background: #ccc;
`;

export const Header = styled.View`
  flex-direction: row;

  align-items: center;

  background: #fff;
  margin: 0px 0px 0px 0px;
  padding: 15px;
`;

export const TextInputName = styled.TextInput.attrs(() => ({
  // placeholderTextColor: #666360;
}))`
  width: 70%;

  border-width: 1.2px;
  border-color: #ccc;
  border-radius: 40px;
  background: #fff;
  padding: 5px 10px;
  font-size: 14px;
  text-align: left;
`;

export const CardImage = styled.Image`
  background: yellow;
  width: 40px;
  height: 40px;
  margin-right: 15px;
  border-radius: 75px;
`;

export const CardOne = styled.Image`
  justify-content: center;
  align-items: center;
  background: blue;
  width: 30px;
  height: 30px;
  border-radius: 75px;
`;

export const CardTwo = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
  margin: 10px 0;
  padding: 15px;
`;

export const CardThree = styled.View`
  flex: 1;
  background: #fff;
  margin: 10px 0 0px 0;
  padding-bottom: 15px;
`;

export const TextName = styled.Text`
  font-size: 14px;
  color: #000;
  margin-left: 15px;
  font-weight: bold;
`;

export const TextTime = styled.Text`
  font-size: 14px;
  color: #404040;
  margin-left: 15px;
`;

export const NameAndTime = styled.View`
  /* flex-direction: row; */
`;

export const ContainerImage = styled.View`
  /* flex: 1;
  width: 100%;
  height: 100%; */
`;

export const PostImage = styled.Image`
  width: ${Dimensions.get('window').width}px;
  height: ${(Dimensions.get('window').width * 3) / 4}px;
  resize-mode: contain;
`;
