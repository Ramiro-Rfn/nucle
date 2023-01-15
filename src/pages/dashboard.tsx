import { Box, Flex, SimpleGrid, Text, theme } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import Head from "next/head";

const Chart = dynamic(()=> import('react-apexcharts'), { ssr: false });

import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";

const dateTime: 'category' | 'datetime' | 'numeric' = 'datetime';

const options = {
    chart: {
        toolbar: {
            show: false
        },
        zoom: {
            enabled: false
        }
    },

    grid: {
        show: false,
    },

    dataLabels: {
        enabled: false,
    },
    tooltip: {
        enabled: false,
    },

    xaxis: {
        type: dateTime,
        axisBorder: {
            color: String(theme.colors.gray[600])
        },
        axisTicks: {
            color: String(theme.colors.gray[600])
        },
        categories: [
            '2022-11-18T00:00:00.000Z',
            '2022-11-19T00:00:00.000Z',
            '2022-11-20T00:00:00.000Z',
            '2022-11-21T00:00:00.000Z',
            '2022-11-22T00:00:00.000Z',
            '2022-11-23T00:00:00.000Z',
            '2022-11-24T00:00:00.000Z',
        ]
    },

    fill: {
        opacity: 0.3,
        type: 'gradient',
        gradient: {
            shade: 'dark',
            opacityFrom: 0.7,
            opacityTo: 0.3
        }
    }
}

const series = [
    {
        name: 'series1',
        data: [31, 120, 10, 28, 61, 18, 109]
    }
]

export default function DashBoard() {
    return (
        <>
            <Head>.Nucle | Dashboard</Head>
            <Flex flexDir='column' h='100vh'>
                <Header/>

                <Flex w='100%' my='6' maxW={1480} mx='auto' px='6'>
                    <Sidebar/>

                    <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
                        <Box p={['6','8']} bg='gray.800' borderRadius={8}>
                            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>

                            <Chart type="area" height={160} options={options} series={series}/>
                        </Box>

                        <Box p={['6','8']} bg='gray.800' borderRadius={8}>
                            <Text fontSize='lg' mb='4'>Inscritos da semana</Text>
                            <Chart type="area" height={160} options={options} series={series}/>
                        </Box>
                    </SimpleGrid>
                </Flex>
            </Flex>
        </>
    )
}