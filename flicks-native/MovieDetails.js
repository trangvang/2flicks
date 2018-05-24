import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';

const styles = StyleSheet.create({
    container: {
        width: '90%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 350,
        height: 350,
        borderColor: '#000',
        marginBottom: 10
    }
});

const MovieDetails = (props) => {
        const moviePosterApi = 'https://image.tmdb.org/t/p/w342';
        const navigationParams = this.props.navigation.state.params;
        const img = {
            uri: moviePosterApi + navigationParams.poster_path
        };

        return (
            <View>
                <Image
                    style={styles.image}
                    source={img}
                />
                <View>
                    <HTMLView
                        value={navigationParams.overview} />
                </View>
            </View>
        );
    }
};

export default MovieDetails;

