import {Flex, Image, Button} from "@chakra-ui/react";


const RightNavBar = () => {

    return (
        <Flex height = {'85vh'} backgroundColor = {'#E5E5E5'} borderTopLeftRadius = {15} direction={'column'} position = {'fixed'} bottom = {'0'} right = {'0'} paddingTop = {'2%'}>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
            <Button borderRadius={15} background={'transparent'} flex={1}><Image src = {require("../images/profile.png")} width={'3vw'} height={'3vw'}/></Button>
        </Flex>
    );
}

export default RightNavBar;