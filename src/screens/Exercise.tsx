// libs
import { useNavigation } from "@react-navigation/native";

// components
import { ScrollView, TouchableOpacity } from "react-native";
import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";

// assets
import { ArrowLeft } from "lucide-react-native";
import BodySVG from "assets/body.svg";
import SeriesSVG from "assets/series.svg";
import RepetitionsSVG from "assets/repetitions.svg";

// routes
import { AppNavigatorRouterProps } from "routes/app.routes";
import { Box } from "@gluestack-ui/themed";
import { Button } from "components";

export function Exercise() {
  const navigation = useNavigation<AppNavigatorRouterProps>();

  function handleGoBack() {
    navigation.goBack();
  }

  return (
    <VStack flex={1}>
      <VStack px={'$8'} bg={'$gray600'} pt={'$12'}>
        <TouchableOpacity onPress={handleGoBack}>
          <Icon as={ArrowLeft} color={'$green500'} size={'xl'} />
        </TouchableOpacity>

        <HStack
          justifyContent={'space-between'}
          alignItems={'center'}
          mt={'$4'}
          mb={'$8'}
        >
          <Heading
            color={'$gray100'}
            fontFamily={'$heading'}
            fontSize={'$lg'}
            flexShrink={1}
          >
            Puxada frontal
          </Heading>
          <HStack alignItems={'center'}>
            <BodySVG />
            <Text
              color={'$gray200'}
              ml={'$1'}
              textTransform={'capitalize'}
            >
              Costas
            </Text>
          </HStack>
        </HStack>
      </VStack>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 32 }}
      >
        <VStack p={'$8'}>
          <Image
            source={{
              uri: 'https://static.wixstatic.com/media/b29f80_0eefbbfce6bb4179ab607f7ab175f42e~mv2.jpg/v1/fill/w_980,h_717,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b29f80_0eefbbfce6bb4179ab607f7ab175f42e~mv2.jpg'
            }}
            alt={'Imagem do exercício'}
            w={'$full'}
            h={'$80'}
            rounded={'$lg'}
            mb={'$3'}
            resizeMode={'cover'}
          />

          <Box
            bg={'$gray600'}
            rounded={'$md'}
            pb={'$4'}
            px={'$4'}
          >
            <HStack
              alignItems={'center'}
              justifyContent={'space-around'}
              pb={'$4'}
              px={'$4'}
              mt={'$5'}
            >
              <HStack >
                <SeriesSVG />
                <Text color={'$gray200'} ml={'$2'}>3 séries</Text>
              </HStack>
              <HStack>
                <RepetitionsSVG />
                <Text color={'$gray200'} ml={'$2'}>12 repetições</Text>
              </HStack>
            </HStack>

            <Button title={'Marcar como realizado'} />
          </Box>
        </VStack>
      </ScrollView>
    </VStack>
  )
}