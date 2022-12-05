import { Box, Button, Checkbox, Flex, Heading, Icon, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";



export default function UsersList() {
    const { data, isLoading, isFetching, error } = useUsers()

    console.log(data)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    
    useEffect(()=>{
        
    }, [])

    return (
        <>
        <Head>.Nucle | Lista de Usuários</Head>
        <Box>
            <Header />

            <Flex w='100%' my='6' maxW={1480} mx='auto' px={['4', '4','6']}>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p={['6', '8']}>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>
                            Usuários  
                            {!isLoading && isFetching && <Spinner size='sm' color="gray.500" ml='4' />}
                        </Heading>

                        <Link href='/users/create'>
                            <Button 
                                as='a'
                                size='sm'
                                fontSize='sm'
                                colorScheme='green'
                                cursor='pointer'
                                leftIcon={<Icon as={RiAddLine}/>}
                            >
                                Criar novo
                            </Button>
                        </Link>
                    </Flex>

                    {isLoading ? (
                        <Flex justify='center' w='100%'>
                            <Spinner/>
                        </Flex>
                    ): error ? (
                        <Flex justify='center'>
                            <Text>Falha ao obter dados dos usuários</Text>
                        </Flex>
                    ): (
                        <>
                            <Table colorScheme='whiteAlpha'>
                                <Thead>
                                    <Tr>
                                        <Th>
                                            <Checkbox colorScheme='green'/>
                                        </Th>

                                        <Th>Usuários</Th>
                                        {isWideVersion && <Th>Data de cadastro</Th>}
                                        <Th w='8'></Th>
                                    </Tr>
                                </Thead>

                                <Tbody>
                                    {data?.map((user)=>{
                                        return(
                                            <Tr key={user.id}>
                                                <Td px={['4','4','6']}>
                                                    <Checkbox colorScheme='green'/>
                                                </Td>

                                                <Td>
                                                    <Box>
                                                        <Text fontWeight='bold'>{user.name}</Text>
                                                        <Text fontSize='sm' color='gray.300'>{user.email}</Text>
                                                    </Box>
                                                </Td>

                                                {isWideVersion && <Td>{user.createdAt}</Td>}

                                                <Td>
                                                    {isWideVersion && <Button 
                                                        as='a'
                                                        size='sm'
                                                        fontSize='sm'
                                                        colorScheme='purple'
                                                        cursor='pointer'
                                                        leftIcon={<Icon as={RiPencilLine}/>}
                                                    >
                                                        { isWideVersion && 'Editar'}
                                                    </Button>}
                                                </Td>
                                            </Tr>
                                    )})}
                                </Tbody>
                            </Table>

                            <Pagination/>
                        </>
                    )}
                </Box>

            </Flex>
        </Box>
        </>
    )
}