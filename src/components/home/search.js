import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { COLORS, filterJobTypes, SIZES } from "../../constants";

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
          contentContainerStyle={{ columnGap: SIZES.xSmall }}
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
    marginTop: SIZES.xLarge,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.lightWhite,
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  searchInput: {
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnIcon: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  filterContainer: { alignItems: "center", marginTop: SIZES.large },
  filter: (activeFilterJob, item) => ({
    paddingVertical: SIZES.small / 2,
    paddingHorizontal: SIZES.medium,
    borderWidth: 1,
    borderColor: activeFilterJob === item ? COLORS.secondary : COLORS.gray2,
    backgroundColor:
      activeFilterJob === item ? COLORS.secondary : COLORS.lightWhite,
  }),
  filterTitle: (activeFilterJob, item) => ({
    color: activeFilterJob === item ? COLORS.white : COLORS.gray,
  }),
});
