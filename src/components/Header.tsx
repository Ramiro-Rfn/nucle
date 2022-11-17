import { Avatar, Box, Flex, HStack, Icon, Input, Text } from "@chakra-ui/react";
import { RiNotificationLine, RiSearchLine, RiUserAddLine } from 'react-icons/ri';

export function Header() {
    return(
        <Flex
            as='header'
            w='100%'
            maxW={1480}
            h='20'
            mx='auto'
            mt='4'
            px='6'
            align='center'
        >
            <Text color='green.500' fontSize='3xl' fontWeight='bold'>.Nucle</Text>
            
            <Flex
                as='label'
                flex='1'
                py='2'
                px='8'
                ml="8"
                maxW={400}
                alignSelf='center'
                color='gray.200'
                bg='gray.800'
                align='center'
                borderRadius='full'
            >
                <Input
                    color='green.50'
                    variant='unstyled'
                    px='4'
                    mr='4'
                    placeholder="Buscar na plataforma"
                    _placeholder={{
                        color: 'gray.400'
                    }}
                />

                <Icon as={RiSearchLine} fontSize='20'/>
            </Flex>

            <Flex align='center' ml='auto'>
                <HStack 
                    spacing='8'
                    mx='8'
                    pr='8'
                    py='1'
                    color='gray.300'
                    borderRightWidth={1}
                    borderColor='gray.700'
                >
                    <Icon as={RiNotificationLine} fontSize='20'/>
                    <Icon as={RiUserAddLine} fontSize='20'/>
                </HStack>

                <Flex align='center'>
                    <Box mr='4' textAlign='right'>
                        <Text>Ramiro Nzau</Text>
                        <Text color='gray.300' fontSize='small'>
                            ramironzau@gmail.com
                        </Text>
                    </Box>

                    <Avatar size='md' name="Ramiro Nzau" src="https://github.com/Ramiro-Rfn.png"/>
                </Flex>
            </Flex>
        </Flex>
    )
}