import {
  Button,
  RadioGroup,
  Dialog,
  Portal
} from "@chakra-ui/react";

export default function Transaction({ isOpen, onClose }) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
        <Dialog.Trigger asChild>
        <Button variant="outline" size="sm">
          Open Dialog
        </Button>
      </Dialog.Trigger>
      <Portal>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log("Submitted!");
          onClose();
        }}
      >
        <Dialog.Backdrop />
        <Dialog.Positioner>
          <Dialog.Content>
            <Dialog.Header>
              <Dialog.Title>Add New Transaction</Dialog.Title>
              <Dialog.CloseButton />
            </Dialog.Header>

            <Dialog.Body>
              <RadioGroup name="type" defaultValue="income">
                <RadioGroup.Item value="income" colorScheme="blue" mr={4}>
                  Income
                </RadioGroup.Item>
                <RadioGroup.Item value="expense" colorScheme="red">
                  Expense
                </RadioGroup.Item>
              </RadioGroup>
            </Dialog.Body>

            <Dialog.Footer>
              <Button mr={4} onClick={onClose}>
                Cancel
              </Button>
              <Button type="submit">Add</Button>
            </Dialog.Footer>
          </Dialog.Content>
        </Dialog.Positioner>
      </form>
      </Portal>
    </Dialog.Root>
  );
}
