import { createSelector } from 'reselect';

export const getDataIsLoaded = (state) => state.movies.isLoading;
export const getMoviesData = (state) => state.movies.moviesData;
export const getFilterText = (state) => state.movies.filterText;

export const getSortMoviesByName = createSelector(getMoviesData, (items) =>
  items.sort(({ title: curTitle }, { title: nextTitle }) => {
    if (curTitle > nextTitle) {
      return 1;
    }
    if (curTitle < nextTitle) {
      return -1;
    }

    return 0;
  })
);

export const getFilterMovies = createSelector(
  getFilterText,
  getSortMoviesByName,
  (searchText, movies) =>
    movies.filter(({ title, stars }) => {
      const itemData = `${title.toUpperCase()} ${stars.toUpperCase()}`;

      return itemData.indexOf(searchText.toUpperCase()) > -1;
    })
);
