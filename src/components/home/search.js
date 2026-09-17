import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { filterJobTypes } from "../../constants";

export default function Search() {
  const activeFilter = "Full-time";

  return (
    <View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            placeholder="What are you looking for?"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn}>
          <Image
            source={require("../../../assets/icons/search.svg")}
            style={styles.searchBtnIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <View style={styles.filterContainer}>
        <FlatList
          data={filterJobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.filter(activeFilter, item)}>
              <Text style={styles.filterTitle(activeFilter, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => `filter-job-${item}`}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ columnGap: 10 }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 20,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnIcon: {
    width: "50%",
    height: "50%",
    tintColor: "#fff",
  },
  filterContainer: { alignItems: "center", marginTop: 20 },
  filter: (activeFilterJob, item) => ({
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: activeFilterJob === item ? "#222" : "red",
    backgroundColor: activeFilterJob === item ? "red" : "#fff",
  }),
  filterTitle: (activeFilterJob, item) => ({
    color: activeFilterJob === item ? "#fff" : "#222",
  }),
});
