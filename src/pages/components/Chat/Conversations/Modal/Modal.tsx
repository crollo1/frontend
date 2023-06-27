import {  
    ModalOverlay, 
    ModalContent, 
    ModalHeader, 
    ModalCloseButton, 
    ModalBody,
    Text 
} from "@chakra-ui/react";

interface ModalProps {

}

const Modal: React.FC<ModalProps> = () => {
    return (
        <>
          <Modal>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Modal Body</Text>
              </ModalBody>
            </ModalContent>
          </Modal>
        </>
      )
};

export default Modal;