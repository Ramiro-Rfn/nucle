import { Box, Button, Divider, Flex, Heading, HStack, SimpleGrid, Stack } from "@chakra-ui/react";
import { Input } from "../../components/Form/Input";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

export default function CreateUser() {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Heading size='lg' fontWeight='normal'>Usuários</Heading>
                    
                    <Divider my='4' borderColor='gray.700'/>

                    <Stack spacing='8'>
                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input  name="name" label="Nome Completo" />
                            <Input  name="email" type='email' label="Email" />
                        </SimpleGrid>

                        <SimpleGrid minChildWidth='240px' spacing='8' w='100%'>
                            <Input  name="password" type='password' label="Senha" />
                            <Input  name="password_confimation" type='password' label="Confirmação de senha" />
                        </SimpleGrid>
                    </Stack>

                    <Flex mt='8' justify='flex-end'>
                        <HStack spacing='4'>
                            <Button colorScheme='whiteAlpha'>Cancelar</Button>
                            <Button colorScheme='green'>Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>

            </Flex>
        </Box>
    )
}