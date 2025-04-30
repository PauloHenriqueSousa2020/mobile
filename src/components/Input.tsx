// components
import { Input as GlueStackInput, InputField, FormControl, FormControlErrorText, FormControlError } from "@gluestack-ui/themed"

type Props = React.ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMessage?: string | null;
  isInvalid?: boolean;
}

export function Input({ isReadOnly, errorMessage, isInvalid, ...rest }: Props) {
  const invalid = !!errorMessage || isInvalid

  return (
    <FormControl isInvalid={invalid} w={'$full'}>
      <GlueStackInput
        isInvalid={invalid}
        h={'$14'}
        borderRadius={'$md'}
        borderWidth={'$0'}
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? '$red500' : '$green500'
        }}
        $invalid={{
          borderWidth: 1,
          borderColor: '$red500'
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

      <FormControlError>
        <FormControlErrorText color={'$red500'}>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  )
}