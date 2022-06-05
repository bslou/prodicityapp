import { Box, Text, Flex, Image, Button, Link } from "@chakra-ui/react";

const LeftSideEnterReg = () => {

    return (
        <Flex direction={'column'} alignItems = {'center'} justifyContent = {'center'} height={'100vh'} width={'40vw'} marginBottom = {'10vw'}>
            <Image src = {require("../images/prodlogo1.png")} />
            <Text color={'white'} fontSize = {'1.3vw'}>
                Welcome to
            </Text>
            <Text color={'white'} fontSize = {'5vw'} fontWeight={500}>
                Prodicity
            </Text>
            <Text color={'white'} fontSize = {'1.3vw'} display = {'flex'} direction = {'column'} alignItems={'center'} alignContent={'center'}>
                Gamify Your Work And Improvements! Join groups and compete with friends!
            </Text>
            <Flex direction={'row'} justifyContent = {'center'} alignItems = {'center'} marginTop={'3vw'}>
                <Link href = "../pages/logPage" color={'black'} border={'1px solid black'} fontSize= {'1.4vw'} paddingTop={'1.2vw'} paddingBottom={'1.2vw'} paddingLeft={'2.5vw'} paddingRight={'2.5vw'} backgroundColor = {'transparent'} borderTopLeftRadius = {20} borderTopRightRadius = {0} borderBottomLeftRadius = {20} borderBottomRightRadius = {0}>
                Login
                </Link>
                <Link color={'white'} fontSize= {'1.4vw'} paddingTop={'1.2vw'} paddingBottom={'1.2vw'} paddingLeft={'2.5vw'} paddingRight={'2.5vw'} backgroundColor = {'black'} border={'1px solid black'} borderTopLeftRadius = {0} borderTopRightRadius = {20} borderBottomLeftRadius = {0} borderBottomRightRadius = {20}>
                Register
                </Link>
            </Flex>
        </Flex>
    );
}

export default LeftSideEnterReg;