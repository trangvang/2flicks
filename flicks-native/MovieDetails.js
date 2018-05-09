import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import HTMLView from 'react-native-htmlview';

class MovieDetails extends React.Component {
    render() {
        const moviePosterApi = 'https://image.tmdb.org/t/p/w342';
        const props = this.props.navigation.state.params;
        const img = {
            uri: moviePosterApi + props.poster_path
        };

        return (
            <View>
                <Image
                    style={styles.image}
                    source={img}
                />
                <View>
                    <HTMLView
                        value={props.overview} />
                </View>
            </View>
        );
    }
}

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
})

export default MovieDetails;

