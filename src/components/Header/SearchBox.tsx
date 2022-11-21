import { Flex, Icon, Input } from "@chakra-ui/react";
import { RiSearchLine } from "react-icons/ri";

export function SearchBox() {
    return (
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
    )
}