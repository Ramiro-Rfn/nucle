import { FormControl, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';

interface InputProps extends ChakraInputProps {
    name: string,
    label?: string
}
export function Input({ name, label }: InputProps) {
    return(
        <FormControl>
            {!!label && <FormLabel htmlFor={name} color='white'>{label}</FormLabel>}

            <ChakraInput 
                name={name} 
                id={name}
                _placeholder={{
                color: 'gray.200'
                }}
                color='gray.50'
                placeholder='Digite sua senha'
                focusBorderColor='green.500'
                bgColor='gray.900'
                variant='filled'
                _hover={{
                bgColor: 'gray.900'
                }}
                size='md'
            />
        </FormControl>
    )
}