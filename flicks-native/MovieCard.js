import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';

const styles = StyleSheet.create({
    container: {
        width: '95%',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 10,
        flex: 1,
    },
    image: {
        width: 350,
        height: 350,
        borderColor: '#000',
        borderWidth: 1,
        textAlign: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    }
});

const moviePosterApi = 'https://image.tmdb.org/t/p/w342';

const MovieCard = (props) => {
    const img = {
        uri: moviePosterApi + props.movie.poster_path
    };
    return (
        <TouchableHighlight onPress={props.loadDetails}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    resizeMode="contain"
                    source={img}
                />
                <Text style={styles.title}> {props.movie.title} </Text>
                <Text numberOfLines={3}> {props.movie.overview} </Text>

            </View>
        </TouchableHighlight>
    );
};

MovieCard.propTypes = {
    movie: PropTypes.shape({
        poster_path: PropTypes.string,
        title: PropTypes.string,
        overview: PropTypes.string,
    }),
    loadDetails: PropTypes.func,
};

export default MovieCard;
