// components
import { Input as GlueStackInput, InputField } from "@gluestack-ui/themed"

type Props = React.ComponentProps<typeof InputField>

export function Input({ ...rest }: Props) {
  return (
    <GlueStackInput
      bg={'$gray700'}
      h={'$14'}
      px={'$4'}
      borderRadius={'$md'}
      borderWidth={'$0'}
      $focus={{
        borderWidth: 1,
        borderColor: '$green500'
      }}
    >
      <InputField
        color={'$white'}
        fontFamily={'$body'}
        placeholderTextColor={'$gray300'}
        {...rest}
      />
    </GlueStackInput>
  )
}