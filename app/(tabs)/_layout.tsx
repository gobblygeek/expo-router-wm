import { Tabs } from "expo-router";
import { useTheme } from "tamagui";
import { Beef, Cog } from "@tamagui/lucide-icons";

export default function TabLayout() {
  const theme = useTheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: theme.pink9Light.val,
        tabBarActiveBackgroundColor: theme.blue5Light.val,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ color }) => <Cog color={color} />,
        }}
      />
      <Tabs.Screen
        name="feed"
        options={{
          title: "Feed",
          headerShown: false,
          tabBarIcon: ({ color }) => <Beef color={color} />,
        }}
      />
    </Tabs>
  );
}
