// components
import {
  Toast,
  ToastTitle,
  ToastDescription,
  Pressable,
  Icon,
  VStack,
  HStack
} from "@gluestack-ui/themed";

// assets 
import { X } from "lucide-react-native";

type Props = {
  id: string;
  title: string;
  description?: string;
  action?: "error" | "success";
  onClose: () => void;
}

export function ToastMessage({
  id,
  title,
  description,
  action = 'success',
  onClose
}: Props) {
  return (
    <Toast
      nativeID={`toast-${id}`}
      action={action}
      bgColor={action === 'success' ? '$green500' : '$red500'}
      mt={'$10'}
    >
      <VStack space={'xs'} w={'$full'}>

        <HStack alignItems={'center'} justifyContent={'space-between'}>
          <ToastTitle flexShrink={1} color={'$white'} fontFamily={'$heading'}>
            {title}
          </ToastTitle>

          <Pressable onPress={onClose}>
            <Icon as={X} color={'$coolGray50'} size={'md'} />
          </Pressable>
        </HStack>

        {description && (
          <ToastDescription color={'$white'} fontFamily={'$body'}>
            {description}
          </ToastDescription>
        )}
      </VStack>
    </Toast>
  )
}