// libs
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Center, Image, VStack, Text, Heading, ScrollView } from "@gluestack-ui/themed";
import { Button, Input } from "components"

// routes
import { AuthNavigatorRouterProps } from "routes/auth.routes";

// assets
import Logo from "assets/logo.svg"

type FormDataProps = {
  email: string;
  password: string;
}

const signUpSchema = yup.object({
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.')
})

export function SignIn() {
  const { control, handleSubmit, formState: {
    errors
  } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation<AuthNavigatorRouterProps>();

  function handleNewAccount() {
    navigation.navigate('signUp');
  }

  function handleSignUp(data: FormDataProps) {
    console.log('data: ', data)
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

          <Center gap={'$2'}>
            <Heading color={'$gray100'}>Acessa a sua conta</Heading>

            <Controller
              control={control}
              name={'email'}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder={'E-mail'}
                  keyboardType="email-address"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  errorMessage={errors.email?.message}
                />
              )}
            />

            <Controller
              control={control}
              name={'password'}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder={'Senha'}
                  secureTextEntry
                  onChangeText={onChange}
                  errorMessage={errors.password?.message}
                />
              )}
            />

            <Button title={'Acessar'} onPress={handleSubmit(handleSignUp)} />
          </Center>

          <Center flex={1} justifyContent="flex-end" mt={'$4'}>
            <Text color={'$gray100'} fontSize={'$sm'} mb={'$3'} fontFamily={'$body'}>Ainda não tem acesso?</Text>
            <Button title="Criar conta" variant={'outline'} onPress={handleNewAccount} />
          </Center>
        </VStack>

      </VStack>
    </ScrollView>
  )
}