// components
import { Heading, HStack, Icon, Image, Text, VStack } from "@gluestack-ui/themed";
import { ChevronRight } from "lucide-react-native";
import { TouchableOpacity, TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps;

export function ExerciseCard({ ...rest }: Props) {
  return (
    <TouchableOpacity {...rest}>
      <HStack
        bg={'$gray500'}
        alignItems={'center'}
        p={'$2'}
        pr={'$4'}
        rounded={'$md'}
        mb={'$3'}
      >
        <Image
          source={{
            uri: 'https://static.wixstatic.com/media/b29f80_0eefbbfce6bb4179ab607f7ab175f42e~mv2.jpg/v1/fill/w_980,h_717,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b29f80_0eefbbfce6bb4179ab607f7ab175f42e~mv2.jpg'
          }}
          alt={'Imagem do exercício'}
          w={'$16'}
          h={'$16'}
          rounded={'$md'}
          mr={'$4'}
          resizeMode={'cover'}
        />

        <VStack flex={1}>
          <Heading
            fontSize={'$lg'}
            color={'$white'}
            fontFamily={'$heading'}
          >
            Puxada frontal
          </Heading>
          <Text
            fontSize={'$sm'}
            color={'$gray200'}
            mt={'$1'}
            numberOfLines={2}
          >
            3 séries x 12 repetições
          </Text>
        </VStack>

        <Icon as={ChevronRight} color={'$gray300'} />
      </HStack>
    </TouchableOpacity>
  )
}