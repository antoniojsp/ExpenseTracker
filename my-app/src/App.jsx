import { Button, HStack, useToken, useColorMode } from "@chakra-ui/react";

const App = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [brand500] = useToken("colors", ["brand.500"]);

  return (
    <HStack spacing={4} p={6}>
      <Button onClick={toggleColorMode}>
        Toggle Color Mode (Current: {colorMode})
      </Button>
      <Button bg={brand500} color="white">
        Primary Brand Button
      </Button>
    </HStack>
  );
};

export default App;
