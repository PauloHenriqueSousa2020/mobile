// libs
import { useState } from "react";

// components
import { Heading, Text, VStack } from "@gluestack-ui/themed";
import { HistoryCard, ScreenHeader } from "components";
import { SectionList } from "react-native";

export function History() {
  const [exercises, setExercises] = useState([
    { title: '25/04/2025', data: ['Puxada frontal', "Remada unilateral"] },
    { title: '26/04/2025', data: ['Puxada frontal',] }
  ])
  return (
    <VStack flex={1}>
      <ScreenHeader title="Histórico de exercícios" />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading
            fontFamily={'$heading'}
            color={'$gray200'}
            fontSize={'$md'}
            mt={'$10'}
            mb={'$3'}
          >
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color={'$gray100'} textAlign={'center'}>
            Não há exercícios registrados ainda. {"\n"} Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  )
}