import React, { PureComponent } from 'react';
import { Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import SearchBarMovies from './SearchBarMovies';

class ToolsContainer extends PureComponent {
  render() {
    const { onAddMovie, changeFilterText, filterText } = this.props;

    return (
      <View style={styles.container}>
        <Button
          title="Add Movie"
          containerStyle={styles.buttonContainer}
          buttonStyle={styles.button}
          onPress={onAddMovie()}
        />
        <SearchBarMovies filterText={filterText} changeFilterText={changeFilterText} />
      </View>
    );
  }
}

ToolsContainer.propTypes = {
  onAddMovie: PropTypes.func,
  changeFilterText: PropTypes.func,
  filterText: PropTypes.string,
};

export default ToolsContainer;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  buttonContainer: {
    alignItems: 'center',
    marginVertical: 10,
    marginHorizontal: 6,
  },
  button: {
    width: '100%',
    borderRadius: 16,
  },
});
