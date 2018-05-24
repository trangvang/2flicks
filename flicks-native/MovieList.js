import React from 'react';
import PropTypes from 'prop-types';
import { View, FlatList, ActivityIndicator } from 'react-native';
import MovieCard from './MovieCard';
import { SearchBar } from 'react-native-elements';

class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: this.props.screenProps.movies
        };
    }

    componentWillReceiveProps(receivedProps) {
        this.setState({
            movies: receivedProps.screenProps.movies
        });
    }


    render() {
        const props = this.props.screenProps;
        const movies = this.state.movies;

        return (
            <View>
                <SearchBar
                    showLoading
                    lightTheme
                    round
                    onChangeText={this.filterMovie}
                    onClear={this.resetSearch}
                    platform="android"
                    cancelButtonTitle="Cancel"
                    placeholder="Search..."
                />
                <FlatList
                    refreshing={props.loading}
                    onRefresh={props.loadMore}
                    data={movies}
                    keyExtractor={movie => movie.id}
                    onEndReachedThreshold={0.05}
                    onEndReached={props.loadMore}
                    renderItem={movieItem => (
                            <MovieCard
                                movie={movieItem.item}
                                loadDetails={() => {
                                    this.props.navigation.navigate('MovieDetails', movieItem.item);
                                }}
                            />
                        )
                    }
                    ListFooterComponent={() => (
                        <View>
                            <ActivityIndicator size="large" />
                        </View>
                    )}
                />
            </View>
        );
    }
}

MovieList.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }),
    screenProps: PropTypes.shape({
        movies: PropTypes.array,
        loading: PropTypes.bool,
        loadMore: PropTypes.func,
    }),
};

export default MovieList;
