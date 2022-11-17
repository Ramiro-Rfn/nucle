import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Text, Th, Thead, Tr } from "@chakra-ui/react";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UsersList() {
    return (
        <Box>
            <Header />

            <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                <Sidebar/>

                <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
                    <Flex mb='8' justify='space-between' align='center'>
                        <Heading size='lg' fontWeight='normal'>Usuários</Heading>

                        <Button 
                            as='a'
                            size='sm'
                            fontSize='sm'
                            colorScheme='green'
                            leftIcon={<Icon as={RiAddLine}/>}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table colorScheme='whiteAlpha'>
                        <Thead>
                            <Tr>
                                <Th>
                                    <Checkbox colorScheme='green'/>
                                </Th>

                                <Th>Usuários</Th>
                                <Th>Data de cadastro</Th>
                                <Th w='8'></Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {[1,2,3].map(()=>{
                                return(
                                    <Tr>
                                        <Td px='6'>
                                            <Checkbox colorScheme='green'/>
                                        </Td>

                                        <Td>
                                            <Box>
                                                <Text fontWeight='bold'>Ramiro Nzau</Text>
                                                <Text fontSize='sm' color='gray.300'>ramironzau@gmail</Text>
                                            </Box>
                                        </Td>

                                        <Td>17 de Novembro, 2022</Td>

                                        <Td>
                                            <Button 
                                                as='a'
                                                size='sm'
                                                fontSize='sm'
                                                colorScheme='purple'
                                                leftIcon={<Icon as={RiPencilLine}/>}
                                            >
                                                Editar
                                            </Button>
                                        </Td>
                                    </Tr>
                            )})}
                        </Tbody>
                    </Table>

                    <Pagination/>
                </Box>

            </Flex>
        </Box>
    )
}