import LeftSideEnter from "../components/leftsideenter"
import {Box, Flex} from "@chakra-ui/react";
import RightSideLog from "../components/rightsidelog";
import RightSideReg from "../components/rightsidereg";
import LeftSideEnterReg from "../components/leftsideenterreg";

const RegPage = () => {
    return (
        <Flex bgImage={require("../images/bgimgreg.png")} backgroundSize={'100% 100%'} gap={'5%'} width={'100vw'} height = {'100vh'} direction = {'row'} justifyContent = {'center'} alignItems = {'center'}>
            <LeftSideEnterReg />
            <RightSideReg />
        </Flex>
        
    )
}

export default RegPage;