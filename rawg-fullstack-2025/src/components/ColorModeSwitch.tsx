import { Switch, useColorMode, Text, HStack } from '@chakra-ui/react';

export const ColorModeSwitch = () => {
    const { colorMode, toggleColorMode } = useColorMode();

    return <HStack>
        <Switch
            colorScheme='green'
            isChecked={colorMode === "dark"}
            onChange={toggleColorMode}>
        </Switch>;
        <Text> Dark mode </Text>
    </HStack>
}