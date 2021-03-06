//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import MovieList from './MovieList';
import MovieDetails from './MovieDetails';

import { createStackNavigator } from 'react-navigation';

const Routes = createStackNavigator({
    MovieList: {
        screen: MovieList,
        navigationOptions: ({ navigation }) => ({
            headerTitle: <Text style={{
                alignSelf: 'center',
                fontSize: 18,
                textAlign: 'center',
                marginLeft: 20,
                textAlign: 'center',
                flexGrow: 1,
                fontWeight: 'bold'
            }}>
                WELCOME TO FLICKS
              </Text>
        })
    },
    MovieDetails: {
        screen: MovieDetails,
        navigationOptions: ({ navigation }) => ({
            title: `${navigation.state.params.title}`
        })
    }
});

// create a component
class TopRated extends Component {
    constructor(props) {
        super(props);

        this.state = {
            movies: [],
            loading: false,
            page: 1
        }

        this.fetchWithPage = this.fetchWithPage.bind(this);
        this.loadMore = this.loadMore.bind(this);
    }

    componentWillMount() {
        this.fetchWithPage(1)
    }

    static navigationOptions = {
        tabBarLabel: "Top Rated"
    }

    async fetchWithPage(page) {
        this.setState({
            loading: true,
        });
        const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed';
        const response = await fetch(`${apiUrl}&page=${page}`);
        const data = await response.json();

        await this.setState({
            movies: data.results,
            loading: false,
        });
    }

    async loadMore() {
        const newPage = this.state.page + 1;
        await this.fetchWithPage(newPage);
        this.setState({
            page: newPage
        });
    }

    render() {
        return (
            <Routes
                screenProps={{
                    movies: this.state.movies,
                    loadMore: this.loadMore,
                    loading: this.state.loading
                }} />
        );
    }
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        flexGrow: 1,
        marginLeft: 30,
    },
});

//make this component available to the app
export default TopRated;
