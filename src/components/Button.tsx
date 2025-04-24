// components
import { ButtonSpinner, Button as GlueStackButton, Text } from "@gluestack-ui/themed"

type Props = React.ComponentProps<typeof GlueStackButton> & {
  title: string;
  isLoading?: boolean;
  variant?: 'solid' | 'outline';
}

export function Button({ title, isLoading, variant = 'solid', ...rest }: Props) {
  return (
    <GlueStackButton
      w={'$full'}
      h={'$14'}
      bg={variant === 'solid' ? '$green700' : 'transparent'}
      borderWidth={variant === 'solid' ? '$0' : '$1'}
      borderColor={'$green500'}
      rounded={'$sm'}
      $active-bg={variant === 'solid' ? '$green500' : '$gray500'}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? <ButtonSpinner color={'$white'} /> : (
        <Text
          color={variant === 'solid' ? '$white' : '$green500'}
          fontFamily={'$heading'}
          fontSize={'$sm'}
        >
          {title}
        </Text>
      )}
    </GlueStackButton>
  )
}