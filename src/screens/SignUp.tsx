// libs
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from "@hookform/resolvers/yup";

// components
import { Center, Image, VStack, Text, Heading, ScrollView, useToast } from "@gluestack-ui/themed";
import { Button, Input, ToastMessage } from "components"

// routes
import { AuthNavigatorRouterProps } from "routes/auth.routes";

// services
import { api } from "services/api";

// utils
import { AppError } from "utils/AppError";

// assets
import Logo from "assets/logo.svg"

type FormDataProps = {
  name: string;
  email: string;
  password: string;
  password_confirm: string;
}

const signUpSchema = yup.object({
  name: yup.string().required('Informe o nome.'),
  email: yup.string().required('Informe o e-mail.').email('E-mail inválido.'),
  password: yup.string().required('Informe a senha.').min(6, 'A senha deve ter pelo menos 6 digítos.'),
  password_confirm: yup.string().required('Confirme a senha.').oneOf([yup.ref('password'), ''], 'A confirmação da senha não confere'),
})

export function SignUp() {
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();

  const { control, handleSubmit, formState: {
    errors
  } } = useForm<FormDataProps>({
    resolver: yupResolver(signUpSchema)
  });

  const navigation = useNavigation<AuthNavigatorRouterProps>();

  function handleGoBack() {
    navigation.navigate('signIn');
  }

  async function handleSignUp({ name, email, password }: FormDataProps) {
    setIsLoading(true);

    try {
      const response = await api.post('/users', { name, email, password });
    } catch (error) {
      const isAppError = error instanceof AppError;

      const description = isAppError ? error.message : 'Não foi possível criar a conta. Tente novamente mais tarde'

      toast.show({
        placement: 'top',
        render: ({ id }) => (
          <ToastMessage
            id={id}
            action={'error'}
            title={'Erro ao criar a conta.'}
            description={description}
            onClose={() => toast.close(id)}
          />
        )
      })
    }
    setIsLoading(false);
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

            <Controller
              control={control}
              name={'name'}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder={'Nome'}
                  onChangeText={onChange}
                  errorMessage={errors.name?.message}
                />
              )}
            />

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

            <Controller
              control={control}
              name={'password_confirm'}
              render={({ field: { onChange, value } }) => (
                <Input
                  value={value}
                  placeholder={'Confirma a senha'}
                  secureTextEntry
                  onChangeText={onChange}
                  onSubmitEditing={handleSubmit(handleSignUp)}
                  returnKeyType={'send'}
                  errorMessage={errors.password_confirm?.message}
                />
              )}
            />

            <Button
              title={'Criar e acessar'}
              onPress={handleSubmit(handleSignUp)}
              isLoading={isLoading}
            />
          </Center>

          <Button title="Voltar para o login" variant={'outline'} mt={'$12'} onPress={handleGoBack} />
        </VStack>

      </VStack>
    </ScrollView>
  )
}