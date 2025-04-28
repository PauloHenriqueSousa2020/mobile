// components
import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed"

type Props = React.ComponentProps<typeof InputField> & {
  isReadOnly?: boolean
}

export function Input({ isReadOnly, ...rest }: Props) {
  return (
    <GlueStackInput
      h={'$14'}
      borderRadius={'$md'}
      borderWidth={'$0'}
      $focus={{
        borderWidth: 1,
        borderColor: '$green500'
      }}
      isReadOnly={isReadOnly}
      opacity={isReadOnly ? 0.5 : 1}
    >
      <InputField
        bg={'$gray700'}
        px={'$4'}
        color={'$white'}
        fontFamily={'$body'}
        placeholderTextColor={'$gray300'}
        {...rest}
      />
    </GlueStackInput>
  )
}