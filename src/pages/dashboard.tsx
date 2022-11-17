import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import { Header } from "../components/Header";

export default function DashBoard() {
    return (
        <>
            <Head>Nucle | Dashboard</Head>
            <Flex flexDir='column' h='100vh'>
                <Header/>

                <Flex w=''>

                </Flex>
            </Flex>
        </>
    )
}