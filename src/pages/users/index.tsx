import { Box, Button, Checkbox, Flex, Heading, Icon, Link as ChakraLink, Spinner, Table, Tbody, Td, Text, Th, Thead, Tr, useBreakpointValue } from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";

import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";
import { useUsers } from "../../services/hooks/useUsers";
import { queryClient } from "../../services/queryClient";



export default function UsersList() {
    const [page, setPage] = useState(1);

    const { data, isLoading, isFetching, error } = useUsers(page)

    console.log(data)

    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    });
    
    async function handlePrefetchUser(userId: number) {
        await queryClient.prefetchQuery(['user', userId],async () => {
            const response = await fetch(`http://localhost:3000/api/users/${userId}`);

            const data = response.json();

            return data;
        }, {
            staleTime: 1000 * 60 * 10, // 10min
        })
    }


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
                                    {data?.users.map((user)=>{
                                        return(
                                            <Tr key={user.id}>
                                                <Td px={['4','4','6']}>
                                                    <Checkbox colorScheme='green'/>
                                                </Td>

                                                <Td>
                                                    <Box>
                                                        {
                                                            <ChakraLink color='purple.400' onMouseEnter={()=>handlePrefetchUser(user.id)}>
                                                                <Text color='inherit' fontWeight='bold'>{user.name}</Text>
                                                            </ChakraLink>
                                                        }
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

                            <Pagination 
                                totalCountOfRegisters={Number(data?.totalCount)}
                                currentPage={page}
                                onPageChange={setPage}
                            />
                        </>
                    )}
                </Box>

            </Flex>
        </Box>
        </>
    )
}