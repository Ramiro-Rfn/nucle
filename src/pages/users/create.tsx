import { Box, Button, Divider, Flex, Heading, SimpleGrid, Stack } from "@chakra-ui/react";
import { yupResolver } from '@hookform/resolvers/yup';
import Head from "next/head";
import Link from "next/link";

import { useRouter } from "next/router";
import { SubmitHandler, useForm } from 'react-hook-form';
import { useMutation } from "react-query";
import * as Yup from 'yup';

import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { api } from "../../services/api";
import { queryClient } from "../../services/queryClient";


type CreateUserFormData = {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}
  
const CreateUserFormShema = new Yup.ObjectSchema({
    name: Yup.string().required('Nome obrigatório!'),
    email: Yup.string().required('Email obrigatório!').email('Email inválido!'),
    password: Yup.string().required('Senha obrigatória!').min(6, 'No mínimo 6 caracteres!'),
    //password_confirmation: Yup.string()
    //.required('Confirmação de senha obrigatório!')
    //.oneOf([Yup.ref('password'), null], 'As Senhas devem ser iguais!'),
})

export default function CreateUser() {
    const router = useRouter();

    const createUser = useMutation(async (user: CreateUserFormData)=> {
        const response = await api.post('users', {
            user: {
                ...user,
                created_at: new Date(),
            }
        })

        return response;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries('users')
        },
    })

    const { register, handleSubmit, formState: { errors, isSubmitting} } = useForm<CreateUserFormData>({
        resolver: yupResolver(CreateUserFormShema)
    });

    const  handleCreateUser: SubmitHandler<CreateUserFormData> = async (values) => {
        console.log(values)
        await createUser.mutateAsync(values);

        router.push('/users');

    }

    return (
        <>
        <Head>.Nucle | Criar Usúario</Head>
        <Box>
            <Header />

            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box as="form" onSubmit={handleSubmit(handleCreateUser)} flex='1' borderRadius={8} bg='gray.800' p={['6','8']}>
                    <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                    
                    <Divider my='4' borderColor='gray.700'/>

                    <Stack spacing={['6','8']}>
                        <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                            <Input error={errors.name} register={register('name')}  name="name" label="Nome Completo" />
                            <Input error={errors.email} register={register('email')} name="email" type='email' label="Email" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing={['6','8']} w='100%'>
                            <Input  
                                error={errors.password}
                                register={register('password')} 
                                name="password" 
                                type='password' 
                                label="Senha" 
                            />
                            
                            <Input
                                error={errors.password_confirmation}  
                                register={register('password_confirmation')} 
                                name="password_confimation" 
                                type='password' 
                                label="Confirmação de senha" 
                            />
                        </SimpleGrid>
                    </Stack>

                    <Flex mt='8' justify='flex-end'>
                        <Stack spacing='4' direction='row'>
                            <Link href='/users'>
                                <Button as='a' cursor='pointer' colorScheme='whiteAlpha'>Cancelar</Button>
                            </Link>

                            <Button type="submit" isLoading={isSubmitting} colorScheme='green'>Salvar</Button>
                        </Stack>
                    </Flex>

                </Box>

            </Flex>
        </Box>
        </>
    )
}