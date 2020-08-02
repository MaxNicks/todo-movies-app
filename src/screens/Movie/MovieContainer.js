import React, { PureComponent } from 'react';
import { Alert, StyleSheet, ScrollView, View } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';
import { Field, reduxForm, SubmissionError } from 'redux-form';
import { connect } from 'react-redux';

import apiClient from '../../services/api';
import CustomInput from '../../components/Input/Input';
import { moviesFetchRequested } from '../../store/movies/actions';

const fields = ['title', 'releaseYear', 'format', 'stars'];
const errorMessage = 'Empty field';

class MovieContainer extends PureComponent {
  handleSubmit = async ({ title, releaseYear, format, stars }) => {
    const { navigation, moviesFetchRequested } = this.props;

    if (!title) {
      throw new SubmissionError({
        title: errorMessage,
      });
    }

    if (!releaseYear) {
      throw new SubmissionError({
        releaseYear: errorMessage,
      });
    }

    if (!format) {
      throw new SubmissionError({
        format: errorMessage,
      });
    }

    if (!stars) {
      throw new SubmissionError({
        format: errorMessage,
      });
    }

    try {
      await apiClient.addMovie({
        title,
        release_year: releaseYear,
        format,
        stars,
      });
      moviesFetchRequested();
      Alert.alert('Sent Successfully', ':)');
      navigation.navigate('Home');
    } catch ({ message }) {
      Alert.alert('Error', message);
    }
  };

  render() {
    const {
      handleSubmit,
      route: { params },
    } = this.props;

    return (
      <ScrollView style={styles.container}>
        <View style={styles.inner}>
          <Field
            name="title"
            placeholder="The Sting"
            label="Movie Title"
            type="text"
            defaultValue={params?.title}
            component={CustomInput}
          />
          <Field
            name="releaseYear"
            placeholder="1997"
            label="Release year"
            type="text"
            defaultValue={params?.releaseYear?.toString()}
            component={CustomInput}
          />
          <Field
            name="format"
            placeholder="DVD"
            label="Format"
            type="text"
            defaultValue={params?.format}
            component={CustomInput}
          />
          <Field
            name="stars"
            placeholder="Audrey Hepburn"
            label="Stars"
            type="text"
            defaultValue={params?.stars}
            component={CustomInput}
          />
          {!params && <Button title="Add" onPress={handleSubmit(this.handleSubmit)} />}
        </View>
      </ScrollView>
    );
  }
}

const mapDispatchToProps = {
  moviesFetchRequested,
};

MovieContainer.propTypes = {
  handleSubmit: PropTypes.func,
  moviesFetchRequested: PropTypes.func,
  route: PropTypes.object,
  navigation: PropTypes.object,
};

export default reduxForm({
  form: 'movieForm',
  fields,
})(connect(null, mapDispatchToProps)(MovieContainer));

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    justifyContent: 'center',
    padding: 20,
  },
});
