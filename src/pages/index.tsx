import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import Head from 'next/head';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as Yup from 'yup';

import { Input } from '../components/Form/Input';


type SignInFormData = {
  email: string;
  password: string;
}

const signInFormShema = new Yup.ObjectSchema({
  email: Yup.string().required('Email obrigatório!').email('Email inválido!'),
  password: Yup.string().required('Senha obrigatória!')
})


export default function Home(){

  const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm<SignInFormData>({
    resolver: yupResolver(signInFormShema)
  });

  const  handleSignIn: SubmitHandler<SignInFormData> = async (values) => {
    await new Promise((resolve)=> setTimeout(resolve, 2000));

    console.log(values);
  }
    
  return (
      <>
        <Head>
           <title>Nucle | Home</title>
        </Head>
        <Flex 
          h='100vh' 
          w='100vw'
          align='center'
          justify='center'
          flexDir='column'
        >
          <Text color='green.500' fontSize='2.5rem' fontWeight='bold' mb='10'>.Nucle</Text>

          <Flex 
            as='form' 
            w='100%' 
            maxW={360} 
            bg='gray.800'
            p='8'
            borderRadius={8}
            flexDir='column'
            onSubmit={handleSubmit(handleSignIn)}
          > 
            <Stack spacing='4'>
              <Input name='email' error={errors.email} register={register('email')} type='email' label='Email'/>
              <Input name='password' error={errors.password} register={register('password')} type='password' label='Senha'/>
            </Stack>
            <Button type='submit' isLoading={isSubmitting}  colorScheme='green' mt='6'>Entrar</Button>
          </Flex>
        </Flex>
      </>
  )  
}

