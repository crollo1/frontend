import {  
    Modal,
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton,  
    ModalBody,
    Text, 
    Stack,
    Input,
    Button,
    chakra
} from "@chakra-ui/react";
import { ChangeEvent, useState } from "react";

const CustomInput = chakra(Input, {
    baseStyle: {
        "::placeholder": {
            color: "whiteAlpha.900",
        },
    },
});

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const ConversationModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    const [username, setUsername] = useState("");
    return (
        <>
          <Modal isOpen={isOpen} onClose={onClose} >
            <ModalOverlay />
            <ModalContent bg="blue.500" pb={4}>
              <ModalHeader color='whiteAlpha.800'>Modal Title</ModalHeader>
              <ModalCloseButton color='whiteAlpha.800'/>
              <ModalBody>
                {/* <Text color='whiteAlpha.800'>Modal Body</Text> */}
                <form>
                    <Stack spacing={4}>
                        <CustomInput 
                            placeholder="Enter a username"
                            color='whiteAlpha.800'
                            value={username} 
                            onChange={(event: ChangeEvent<HTMLInputElement>) => setUsername(event.target.value)}
                        />
                        <Button />
                    </Stack>
                </form>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
    )
};

export default ConversationModal;