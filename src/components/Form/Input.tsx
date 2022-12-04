import { FormControl, FormErrorMessage, FormLabel, Input as ChakraInput, InputProps as ChakraInputProps } from '@chakra-ui/react';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
    name: string,
    label?: string,
    register: UseFormRegisterReturn;
    error?: FieldError | undefined;
}
export function Input({ name, register, error, label }: InputProps) {
    return(
        <FormControl isInvalid={!!error}>
            {!!label && <FormLabel htmlFor={name} color='white'>{label}</FormLabel>}

            <ChakraInput 
                {...register}
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

            {!!error && (
                <FormErrorMessage>
                    {error.message}
                </FormErrorMessage>
            )}
        </FormControl>
    )
}