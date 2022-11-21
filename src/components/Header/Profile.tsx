import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
    return (
        <Flex align='center'>
            <Box mr='4' textAlign='right'>
                <Text>Ramiro Nzau</Text>
                <Text color='gray.300' fontSize='small'>
                    ramironzau@gmail.com
                </Text>
            </Box>

            <Avatar size='md' name="Ramiro Nzau" src="https://github.com/Ramiro-Rfn.png"/>
        </Flex>
    )
}