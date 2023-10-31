import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Alert, SectionList } from "react-native";
import { getMovies } from "../api/api";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMovies("https://reactnative.dev/movies.json");
        setMovies([{ title: "Movies", data: response.movies }]);
      } catch (error) {
        Alert.alert("Error", error.message.toUpperCase());
      }
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <SectionList
        sections={movies}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => (
          <Text style={styles.movieTitle}>{item.title.toUpperCase()}</Text>
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: "lightgray",
  },
  movieTitle: {
    fontSize: 16,
    marginLeft: 16,
    color: "#333333",
    marginVertical: 8,
    fontWeight: "bold",
  },
  sectionHeader: {
    padding: 12,
    fontSize: 20,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "green",
  },
});

export default MoviesList;