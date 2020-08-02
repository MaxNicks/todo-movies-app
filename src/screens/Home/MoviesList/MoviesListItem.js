import React, { PureComponent } from 'react';
import { Icon, ListItem } from 'react-native-elements';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { colors } from '../../../assets/styles/color';

class MoviesListItem extends PureComponent {
  rightElement = () => {
    const {
      handleDeleteMovie,
      movie: { id },
    } = this.props;

    return (
      <Icon
        size={16}
        name="delete"
        type="antdesign"
        color={colors.blue}
        onPress={handleDeleteMovie(id)}
      />
    );
  };

  render() {
    const {
      movie: { title, release_year: releaseYear, stars, format },
      handleOpenMovie,
    } = this.props;

    return (
      <ListItem
        Component={TouchableOpacity}
        title={title}
        subtitle={`${releaseYear} year`}
        rightSubtitle={`Format: ${format}`}
        containerStyle={styles.container}
        rightElement={this.rightElement}
        onPress={handleOpenMovie({ title, format, stars, releaseYear })}
      />
    );
  }
}

MoviesListItem.propTypes = {
  handleDeleteMovie: PropTypes.func,
  handleOpenMovie: PropTypes.func,
  movie: PropTypes.object,
};

export default MoviesListItem;

const styles = StyleSheet.create({
  container: {
    margin: 6,
    borderRadius: 8,
    borderColor: colors.blue,
    borderWidth: 1,
  },
});
