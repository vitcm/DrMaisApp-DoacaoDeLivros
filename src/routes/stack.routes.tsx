import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Dashboard } from "../screens/Dashboard";
import { Cadastro } from "../screens/Cadastro";
import { Detalhes } from "../screens/Detalhes";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Rota de tela única
// function DetalhesScreen() {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Detalhes"
//         component={Detalhes}
//         options={{ headerShown: false }}
//       />
//     </Stack.Navigator>
//   );
// }

// // Rota do BottomTabNavigator
// function AppRoutes() {
//   return (
//     <Tab.Navigator>
//       <Tab.Screen
//         name="LivrosDisponíveis"
//         component={Dashboard}
//         options={{
//           tabBarIconStyle: { display: "none" },
//           tabBarLabelStyle: { margin: 15 },
//           headerShown: false,
//         }}
//       />
//       <Tab.Screen
//         name="Doar"
//         component={Cadastro}
//         options={{
//           tabBarIconStyle: { display: "none" },
//           tabBarLabelStyle: { margin: 15 },
//           headerShown: false,
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// Rota do StackNavigator

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Livros Disponíveis" component={Dashboard} />
      <Stack.Screen name="Detalhes" component={Detalhes} />
      <Stack.Screen name="Doar" component={Cadastro} />
    </Stack.Navigator>
  );
}

export default RootNavigator;
