import { Button, Flex, Stack, Text } from '@chakra-ui/react';
import Head from 'next/head';
import { Input } from '../components/Form/Input';

export default function Home(){
    
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
          <Text color='green.500' fontSize='3rem' fontWeight='bold' mb='10'>.Nucle</Text>

          <Flex 
            as='form' 
            w='100%' 
            maxW={360} 
            bg='gray.800'
            p='8'
            borderRadius={8}
            flexDir='column'
          > 
            <Stack spacing='4'>
              <Input name='email' type='email' label='Email'/>
              <Input name='password' type='password' label='Senha'/>
            </Stack>
            <Button type='submit' colorScheme='green' mt='6'>Entrar</Button>
          </Flex>
        </Flex>
      </>
  )  
}

