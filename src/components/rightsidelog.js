import { Flex, Text, Input, Button, Image, Checkbox } from "@chakra-ui/react";

const RightSideLog = () => {

    return (
        <form>
        <Image src = {require("../images/rocket.png")} position={'absolute'} top = {'2.5vw'} right = {'24.5vw'} width={'5vw'} height = {'5vw'} />
   
        <Flex direction={'column'} bgColor = {'#1D2333'} width={'30vw'} alignItems = {'center'} borderRadius={20} paddingTop = {'3vw'}>
            <Text color={'white'} fontSize = {'2vw'} marginBottom={'2vw'}>
                Account Login
            </Text>
            <Input type={'text'} border={'1px solid white'} background = {'transparent'} color = {'white'} paddingLeft = {'3%'} paddingRight = {'3%'} paddingTop = {'6%'} paddingBottom = {'6%'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} placeholder = {'Username or Email'}/>
            <br />
            <Input type={'password'} border={'1px solid white'} background = {'transparent'} color = {'white'} paddingLeft = {'3%'} paddingRight = {'3%'} paddingTop = {'6%'} paddingBottom = {'6%'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} placeholder = {'Password'} />
            <br />
            <Flex width={'70%'} direction={'row'} justifyContent = {'space-between'} alignItems = {'center'} alignContent = {'center'}>
                <Checkbox color={'white'}>Remember Me</Checkbox>
                <Button fontSize={'0.9vw'} color={'gray'} background={'transparent'}>
                    Forgot Password?
                </Button>
            </Flex>
            <br/>
            <Input type = "submit" value = "Login to your Account!" color = "white" backgroundColor={'#7750F8'} height={'3.5vw'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} />
        
            <br/>
            <Flex direction={'row'} justifyContent={'center'} alignItems = {'center'}>
                <hr color = "white" backgroundColor = {'white'} width={'100vw'}/>
                <Text color = "white" marginLeft={'2vw'} marginRight={'2vw'}>or</Text>
                <hr color = "white" backgroundColor = {'white'} width={'100vw'}/>
            </Flex>
            <br/>
            <Flex direction={'row'} justifyContent = {'center'} alignItems = {'center'} >
                <Button background={'transparent'}>
                    <Image src = {require('../images/facebook.png')} marginRight={'2vw'} width = {'3.5vw'} height = {'3.5vw'} />
                </Button> 
                <Button background={'transparent'}>
                    <Image src = {require('../images/google.png')} width = {'3.5vw'} height = {'3.5vw'} />
                </Button> 
            </Flex>
            <br/>
        </Flex>
        </form>
    );
}

export default RightSideLog;