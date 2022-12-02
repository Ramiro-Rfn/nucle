import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
    showProfileData: boolean;
}

export function Profile({ showProfileData=true }: ProfileProps) {
    return (
        <Flex align='center'>
            {
                showProfileData && (
                    <Box mr='4' textAlign='right'>
                        <Text>Ramiro Nzau</Text>
                        <Text color='gray.300' fontSize='small'>
                            ramironzau@gmail.com
                        </Text>
                    </Box>
                )
            }

            <Avatar size='md' name="Ramiro Nzau" src="https://github.com/Ramiro-Rfn.png"/>
        </Flex>
    )
}