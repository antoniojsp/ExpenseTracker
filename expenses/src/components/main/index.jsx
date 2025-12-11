import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react"
import Summary from "../summary"
import ExpenseView from "../expense-view"
import Transaction from "../add-transaction"; // make sure path is correct
export default function Main() {
    const {isOpen, onOpen, onClose} = useDisclosure();
    console.log(isOpen, onOpen, onClose)
    return <Flex textAligh={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
        <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
            <Heading color={'blue.400'}
                display={['none', 'block', 'block', 'block', 'block']}>
                Expense Tracker
            </Heading>
            <Flex alignItems={'center'}>
                <Button onClick={onOpen} bg={'blue.300'} color={'black'} ml={"4"}>
                    Add New Transaction
                </Button>
            </Flex>
            </Flex>
        <Summary />
        <Transaction isOpen={isOpen} onClose={onClose} />            <Flex w="full" 
                  alignItems={'flex-start'}
                  justifyContent={'space-evenly'}
                  flexDirection={['column', 'column', 'column', 'row', 'row']}
                  >
                <ExpenseView />
                <ExpenseView />
            </Flex>
    </Flex>
}