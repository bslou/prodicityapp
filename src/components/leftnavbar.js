import {Flex, Image, Button} from "@chakra-ui/react";


const LeftNavBar = () => {

    return (
        <Flex height = {'75vh'} backgroundColor = {'#E5E5E5'} borderTopRightRadius = {15} direction={'column'} position = {'fixed'} bottom = {'0'} left = {'0'} paddingTop = {'2%'}>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/prodlogo1.png")} width={'2vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/one.png")} width={'2vw'} height={'2vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/two.png")} width={'2vw'} height={'2vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/three.png")} width={'2vw'} height={'2vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/four.png")} width={'2vw'} height={'2vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/five.png")} width={'2vw'} height={'2vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/six.png")} width={'2vw'} height={'2vw'}/></Button>
        </Flex>
    );
}

export default LeftNavBar;