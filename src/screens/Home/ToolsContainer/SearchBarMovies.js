import React, { PureComponent } from 'react';
import { SearchBar } from 'react-native-elements';
import PropTypes from 'prop-types';
import { colors } from '../../../assets/styles/color';
import { StyleSheet } from 'react-native';

class SearchBarMovies extends PureComponent {
  onChangeText = (text) => {
    const { changeFilterText } = this.props;

    changeFilterText(text);
  };

  render() {
    const { filterText } = this.props;

    return (
      <SearchBar
        placeholder="Type Here..."
        onChangeText={this.onChangeText}
        value={filterText}
        round
        lightTheme
        containerStyle={styles.container}
      />
    );
  }
}

SearchBarMovies.propTypes = {
  changeFilterText: PropTypes.func,
  filterText: PropTypes.string,
};

export default SearchBarMovies;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.grey,
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
});
