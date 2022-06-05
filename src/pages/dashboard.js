import { Flex } from "@chakra-ui/react";
import DashboardIn from "../components/dasboardin";
import LeftNavBar from "../components/leftnavbar";
import RightNavBar from "../components/rightnavbar";
import TopNavBar from "../components/topnavbar";

const Dashboard = () => {

    return (
        <Flex>
            <LeftNavBar />
            <TopNavBar />
            <RightNavBar />
            <DashboardIn />
        </Flex>
    );
}

export default Dashboard;