import { Flex, Text, Input, Button, Image, Checkbox, Link } from "@chakra-ui/react";

const RightSideReg = () => {

    return (
        <form>
        <Image src = {require("../images/rocket.png")} position={'absolute'} top = {'0vw'} right = {'24.5vw'} width={'5vw'} height = {'5vw'} />
   
        <Flex direction={'column'} bgColor = {'#1D2333'} width={'30vw'} alignItems = {'center'} borderRadius={20} paddingTop = {'3vw'} marginTop = {'2vw'}>
            <Text color={'white'} fontSize = {'2vw'} marginBottom={'1vw'}>
                Account Login
            </Text>
            <Input type={'email'} border={'1px solid white'} background = {'transparent'} color = {'white'} paddingLeft = {'3%'} paddingRight = {'3%'} paddingTop = {'6%'} paddingBottom = {'6%'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} placeholder = {'Email'}/>
            <br />
            <Input type={'text'} border={'1px solid white'} background = {'transparent'} color = {'white'} paddingLeft = {'3%'} paddingRight = {'3%'} paddingTop = {'6%'} paddingBottom = {'6%'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} placeholder = {'Username'}/>
            <br />
            <Input type={'text'} border={'1px solid white'} background = {'transparent'} color = {'white'} paddingLeft = {'3%'} paddingRight = {'3%'} paddingTop = {'6%'} paddingBottom = {'6%'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} placeholder = {'Full Name'}/>
            <br />
            <Input type={'password'} border={'1px solid white'} background = {'transparent'} color = {'white'} paddingLeft = {'3%'} paddingRight = {'3%'} paddingTop = {'6%'} paddingBottom = {'6%'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} placeholder = {'Password'} />
            
            <br/>
            <Input type = "submit" value = "Get Started!" color = "white" backgroundColor={'#40D04F'} height={'3.5vw'} fontSize= {'1vw'} width = {'60%'} borderRadius = {15} />
        
            <br/>
            
            <Text fontSize={'0.8vw'} color={'white'} width={'80%'}>
                You'll receive a confirmation email in your inbox with a link to activate your account. If you have any problems, <Link color={'#40D04F'}>contact us!</Link>
            </Text>
            <br />
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

export default RightSideReg;