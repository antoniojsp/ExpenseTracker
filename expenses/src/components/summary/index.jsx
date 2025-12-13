import { Box, Flex, Heading, Text } from "@chakra-ui/react"
import Transaction from "../add-transaction"
import ChartGraph from "../chart"
export default function Summary({ onClose, isOpen, totalIncome, totalExpense }) {
    return <Box p={'6'}
        border={"1px solid"}
        borderColor={"gray.100"}
        overflow={'hidden'}
        borderRadius={'10'}
        background={'white'}
        display={'flex'}
    >
        <Flex
            w={'full'}
            justifyContent={'center'}
            alignItems={'center'}
            flexDirection={
                {
                    base: 'column',
                    sm: 'column',
                    md: 'column',
                    lg: "row",
                    xl: 'row'
                }
            }
        >
            <Flex flex={'1'}
                w={'full'}
                flexDirection={'column'}
                alignItems={'center'}
                justifyContent={'space-evenly'}
                ml={'-20'}
                mr={'2'}
            >
                <Heading
                    size={'md'}
                    mb={'4'}
                    color={'gray.600'}>
                    Balance is ${totalIncome - totalExpense}
                </Heading>
                <Flex justifyContent={'space-evenly'}
                    alignItems={'center'}
                    bg={'gray.50'}
                    w={'full'}
                    h={'100px'}
                    border={'1px solid'}
                    borderColor={'gray.100'}
                >
                    <Flex flexDirection={'column'}>
                        <Heading color={'gray.670'}>
                            ${totalIncome}
                        </Heading>
                        <Text color={'gray.600'}>
                            Total Income
                        </Text>
                    </Flex>

                </Flex>
                <Flex justifyContent={'space-evenly'}
                    alignItems={'center'}
                    bg={'gray.50'}
                    w={'full'}
                    h={'100px'}
                    border={'1px solid'}
                    borderColor={'gray.100'}
                >
                    <Flex flexDirection={'column'}>
                        <Heading color={'gray.670'}>
                            ${totalExpense}
                        </Heading>
                        <Text color={'gray.600'}>
                            Total expense
                        </Text>
                    </Flex>

                </Flex>
            </Flex>
            <Box flex={'1'}
                mt={'10'}
                ml={'-90'}
                mr={'5'}
                width={'300px'}
                height={'300px'}
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}>
                <Heading>
                    <ChartGraph
                        expenses={totalExpense}
                        income={totalIncome}
                    />
                </Heading>
            </Box>
        </Flex>
        <Transaction onClose={onClose} isOpen={isOpen} />
    </Box>
}