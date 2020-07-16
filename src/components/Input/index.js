import React, {useEffect, useRef, forwardRef} from 'react';
import {useField} from '@unform/core';

import {Container, TextInput} from './styles';

const Input = ({name, icon, ...rest}) => {
  const inputElementRef = useRef(null);

  const {registerField, defaultValue = '', fieldName, error} = useField(name);
  const inputValueRef = useRef({value: defaultValue});

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputValueRef.current,
      path: 'value',
    });
  }, [fieldName, inputElementRef, inputValueRef, registerField]);

  return (
    <Container isErrored={!!error}>
      <TextInput
        ref={inputElementRef}
        keyboardAppearance="dark"
        placeholderTextColor="#666360"
        defaultValue={defaultValue}
        onChangeText={value => {
          inputValueRef.current.value = value;
        }}
        {...rest}
      />
    </Container>
  );
};

export default forwardRef(Input);
