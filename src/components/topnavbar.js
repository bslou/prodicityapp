import {Flex, Image, Button, Text, Box, Input} from "@chakra-ui/react";


const TopNavBar = () => {

    return (
        <Flex direction={'row'} position = {'fixed'} top = {'0'} left = {'0'} gap = {'3vw'} justifyContent = {'center'} alignItems = {'top'} paddingTop = {'1.2vw'}>
            <Button background={'transparent'} marginLeft = {'1vw'} marginRight = {'3.3vw'} marginTop = {'3vw'}><Image width = {'7vw'} height = {'7vw'} src = {require('../images/rocket.png')} /></Button>
            <Flex direction={'row'} gap = {'0.5vw'}>
                <Image src={require('../images/coins.png')} width = {'2vw'} height = {'2vw'} />
                <Text fontWeight={700}>100</Text>
            </Flex>
            <Flex direction={'row'} gap = {'0.5vw'}>
                <Image src={require('../images/diamonds.png')} width = {'2vw'} height = {'2vw'} />
                <Text fontWeight={700}>10</Text>
            </Flex>
            <Input type = {'text'} width = {'40vw'} borderRadius = {15} backgroundColor = {'#D9D9D9'} placeholder = "Search for anything in the app..." color = {'black'} fontWeight = {700} />
            <Button background = {'transparent'} ><Image src={require('../images/profile.png')} width = {'4vw'} height = {'4vw'} borderRadius = {10} /></Button>
            <Button background={'transparent'} fontWeight={700} fontSize = {'1.7vw'}>Ivan Yeung</Button>
            <Button background={'transparent'}>
                <Image src={require('../images/settings.png')} width = {'2vw'} height = {'2vw'} />
            </Button>
        </Flex>
    );
}

export default TopNavBar;