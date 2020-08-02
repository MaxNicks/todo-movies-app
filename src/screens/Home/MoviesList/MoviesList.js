import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import { StyleSheet, ScrollView, View } from 'react-native';
import { Text } from 'react-native-elements';

import MoviesListItem from './MoviesListItem';

class MoviesList extends PureComponent {
  renderItem = (movies) => {
    const { handleDeleteMovie, handleOpenMovie } = this.props;

    return movies.map((item) => (
      <MoviesListItem
        key={item.id}
        movie={item}
        handleDeleteMovie={handleDeleteMovie}
        handleOpenMovie={handleOpenMovie}
      />
    ));
  };

  render() {
    const { movies } = this.props;

    return (
      <View style={styles.container}>
        {movies.length ? (
          <ScrollView showsVerticalScrollIndicator={false}>{this.renderItem(movies)}</ScrollView>
        ) : (
          <Text style={styles.text}>Nothing</Text>
        )}
      </View>
    );
  }
}

MoviesList.propTypes = {
  handleDeleteMovie: PropTypes.func,
  handleOpenMovie: PropTypes.func,
  movies: PropTypes.array,
};

export default MoviesList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    marginTop: 10,
  },
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});
