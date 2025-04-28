// libs
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

// components
import { Heading, HStack, Text, VStack } from "@gluestack-ui/themed";
import { Group, HomePageHeader, ExerciseCard } from "components";
import { FlatList } from "react-native";

// routes
import { AppNavigatorRouterProps } from "routes/app.routes";

export function Home() {
  const [groups, setGroups] = useState(['Costas', 'Bíceps', 'Peito', 'Tríceps', 'Ombro', 'Perna', 'Glúteo']);
  const [activeGroup, setActiveGroup] = useState('Costas');
  const [exercises, setExercises] = useState(['Puxada frontal', 'Remada curvada', 'Remada unilateral', 'Levantamento terra', '1', '2', '3', '4']);

  const navigation = useNavigation<AppNavigatorRouterProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise')
  }

  return (
    <VStack flex={1}>
      <HomePageHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={activeGroup.toLowerCase() === item.toLowerCase()}
            onPress={() => setActiveGroup(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px={'$8'} flex={1}>
        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <Heading color={'$gray200'} fontFamily={'$heading'} fontSize={'$md'}>Exercícios</Heading>
          <Text color={'$gray200'} fontFamily={'$body'} fontSize={'$sm'}>{exercises.length}</Text>
        </HStack>

        <FlatList
          data={exercises}
          keyExtractor={item => item}
          renderItem={() => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBlock: 20 }}
        />
      </VStack>
    </VStack>
  )
}