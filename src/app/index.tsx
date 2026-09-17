import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";

import { MyJobs, PopularJobs, Search } from "../components";

export default function Index() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#eee" }}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <Search />
        <MyJobs />
        <PopularJobs />
      </ScrollView>
    </SafeAreaView>
  );
}
