// libs
import { useNavigation } from "@react-navigation/native";

// components
import { Center, Image, VStack, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import { Button, Input } from "components"

// routes
import { AuthNavigatorRouterProps } from "routes/auth.routes";

// assets
import Logo from "assets/logo.svg"

export function SignUp() {
  const navigation = useNavigation<AuthNavigatorRouterProps>();

  function handleGoBack() {
    navigation.navigate('signIn');
  }

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
      <VStack flex={1}>
        <Image
          w={'$full'}
          h={624}
          source={require('../assets/background.png')}
          defaultSource={require('../assets/background.png')}
          alt={'Pessoas treinando'}
          position={'absolute'}
        />

        <VStack flex={1} px={'$10'} pb={'$16'}>
          <Center my={'$24'}>
            <Logo />

            <Text color={'$gray100'} fontSize={'$sm'}>
              Treine sua mente e o seu corpo.
            </Text>
          </Center>

          <Center flex={1} gap={'$2'}>
            <Heading color={'$gray100'}>Crie sua conta</Heading>

            <Input
              placeholder={'Nome'}
            />
            <Input
              placeholder={'E-mail'}
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input
              placeholder={'Senha'}
              secureTextEntry
            />
            <Input
              placeholder={'Confirma a senha'}
              secureTextEntry
            />

            <Button title={'Criar e acessar'} />
          </Center>

          <Button title="Voltar para o login" variant={'outline'} mt={'$12'} onPress={handleGoBack} />
        </VStack>

      </VStack>
    </ScrollView>
  )
}