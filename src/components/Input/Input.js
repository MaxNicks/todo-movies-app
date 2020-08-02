import { Input } from 'react-native-elements';
import React from 'react';
import PropTypes from 'prop-types';

export default function CustomInput(props) {
  const {
    input,
    meta: { error },
    defaultValue,
    ...inputProps
  } = props;
  return (
    <Input
      {...inputProps}
      onChangeText={input.onChange}
      onBlur={input.onBlur}
      onFocus={input.onFocus}
      value={defaultValue}
      errorMessage={error}
    />
  );
}

CustomInput.propTypes = {
  input: PropTypes.object,
  meta: PropTypes.object,
  defaultValue: PropTypes.string,
};
