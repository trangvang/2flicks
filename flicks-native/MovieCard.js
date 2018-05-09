import React from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight } from 'react-native';

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
    }
})
const moviePosterApi = 'https://image.tmdb.org/t/p/w342';

class MovieCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const props = this.props.movie;
        const img = {
            uri: moviePosterApi + props.poster_path
        };
        return (
            <TouchableHighlight onPress={this.props.loadDetails}>
                <View style={styles.container}>
                    <Image
                        style={styles.image}
                        source={img}
                        resizeMode='contain'
                    />
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}> {props.title} </Text>
                    <Text numberOfLines={3}> {props.overview} </Text>

                </View>
            </TouchableHighlight>
        )
    }
}
export default MovieCard;
