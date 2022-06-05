import { Button, Flex, Text } from "@chakra-ui/react";

const DashboardIn = () => {

    return (
        <Flex direction={'row'} justifyContent = {'center'} alignItems = {'center'} height = {'100vh'} width = {'100vw'} gap = {'2vw'} marginRight = {'1vw'}>
            <Flex direction = 'column' padding={10} width = {'28vw'} backgroundColor = {'#D9D9D9'} borderRadius = {15}>
                <Text>ToDo</Text>
                <Button width={'100%'} fontWeight={800} fontSize = {'2vw'} backgroundColor = {'white'}>+</Button>
            </Flex>
            <Flex direction = 'column' padding={10} width = {'28vw'} backgroundColor = {'#D9D9D9'} borderRadius = {15}>
                <Text>Habits</Text>
                <Button width={'100%'} fontWeight={800} fontSize = {'2vw'} backgroundColor = {'white'}>+</Button>
            </Flex>
            <Flex direction = 'column' padding={10} width = {'28vw'} backgroundColor = {'#D9D9D9'} borderRadius = {15}>
                <Text>Personal Achievements</Text>
                <Button width={'100%'} fontWeight={800} fontSize = {'2vw'} backgroundColor = {'white'}>+</Button>
            </Flex>
        </Flex>
    );
}

export default DashboardIn;