import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { getDataIsLoaded, getFilterMovies, getFilterText } from '../../store/movies/selectors';
import { moviesFetchRequested, changeFilterText } from '../../store/movies/actions';
import MoviesList from './MoviesList/MoviesList';
import ToolsContainer from './ToolsContainer/ToolsContainer';
import apiClient from '../../services/api';
import PropTypes from 'prop-types';

class HomeContainer extends PureComponent {
  componentDidMount() {
    const { moviesFetchRequested } = this.props;
    moviesFetchRequested();
  }

  handleNavigateToMovie = (params) => () => {
    const { navigation } = this.props;

    navigation.navigate('Movie', params);
  };

  handleDeleteMovie = (id) => async () => {
    const { moviesFetchRequested } = this.props;

    await apiClient.deleteMovie(id);
    moviesFetchRequested();
  };

  render() {
    const { isLoading, movies, changeFilterText, filterText } = this.props;

    return (
      <View style={styles.container}>
        <ToolsContainer
          onAddMovie={this.handleNavigateToMovie}
          changeFilterText={changeFilterText}
          filterText={filterText}
        />
        {isLoading ? (
          <ActivityIndicator size="large" />
        ) : (
          <MoviesList
            movies={movies}
            handleDeleteMovie={this.handleDeleteMovie}
            handleOpenMovie={this.handleNavigateToMovie}
          />
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getDataIsLoaded(state),
  movies: getFilterMovies(state),
  filterText: getFilterText(state),
});

const mapDispatchToProps = {
  moviesFetchRequested,
  changeFilterText,
};

HomeContainer.propTypes = {
  isLoading: PropTypes.bool,
  moviesFetchRequested: PropTypes.func,
  changeFilterText: PropTypes.func,
  movies: PropTypes.array,
  navigation: PropTypes.object,
  filterText: PropTypes.string,
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
});
