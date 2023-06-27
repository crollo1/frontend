import { Session } from "next-auth";
import { Box } from "@chakra-ui/react";
import ConversationList from "./ConversationList";

interface ConversationsWrapperProps {
    session: Session;
}

const ConversationsWrapper: React.FC<ConversationsWrapperProps> = ({
    session,
}) => {
    return ( 
        <Box width={{ base: "100%", md: "400px" }}  
             bg="whiteAlpha.200"
             py={6} px={3}>
            {/* {Skeleton Loader} */}
            <ConversationList session={session}/>
        </Box>
    )
};

export default ConversationsWrapper;