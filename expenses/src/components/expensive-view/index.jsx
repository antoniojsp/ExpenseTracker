import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function capitalize(word){
    return word[0].toUpperCase() + word.slice(1);
}

export default function ExpenseView({type, data}){
    return <Box flex={"1"}
                w={"full"}
                bg={"white"}
                mr={"4"}
                mt={"10"}
                p={"5"}
                pb={"4"}
                border={"1px solid"}
                borderColor={"gray.100"}
                borderRadius={"12"}
                >
                <Flex
                    justifyContent={'space-between'}
                    alignItems={"center"}
                >
                    <Heading
                        size={"md"}
                        color={type === "expense" ? 'red.500':'blue.500'}
                    >
                        {capitalize(type)}
                    </Heading>
                </Flex>
                    <Flex direction={"column"}>
                        {   data &&
                            data.map((item, idx) =>
                                 <Flex
                                    bg={type === "expense" ? 'red.50':'blue.50'}
                                    mt={'4'}
                                    justifyContent={"space-between"}
                                    alignItems={"center"}
                                    border={'1px solid'}
                                    borderColor={type === "expense" ? 'red.100':'blue.100'}
                                    p={'4'}
                                    borderRadius={"8"}
                                    key={idx}
                                >
                                    <Flex
                                        w={'full'}
                                        justifyContent={'space-between'}
                                    >
                                        <Text
                                            ml={'3'}
                                            fontWeight={"bold"}
                                            color={"gray.600"}
                                        >
                                            {item.description}
                                        </Text>
                                        <Text
                                            ml={'3'}
                                            fontWeight={"bold"}
                                            color={"gray.600"}
                                        >
                                            $ {item.amount}
                                        </Text>
                                    </Flex>
                                </Flex>
                            )
                        }
                    </Flex>
    </Box>
}