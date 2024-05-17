import React, { useState } from 'react';
import { Avatar, AvatarBadge, VStack, Text, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalCloseButton, ModalBody, Button, useDisclosure } from '@chakra-ui/react';

function Profile() {
  const [userName, setUserName] = useState(''); // Initialisation de l'état userName à une chaîne vide

  const firstLetter = userName.charAt(0).toUpperCase();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = () => {
    onOpen();
  };

  const handleChange = (e) => {
    setUserName(e.target.value);
  };

  return (
    <VStack spacing={3} py={5} borderBottomWidth={1} borderColor="brand.light">
      <Avatar
        size="2xl"
        name={userName}
        cursor="pointer"
        onClick={handleClick}
        bg="brand.blue"
      >
        <AvatarBadge bg="brand.blue" boxSize="1em">
          {firstLetter}
        </AvatarBadge>
      </Avatar>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Edit User Name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Edit your user name:</Text>
            <input type="text" value={userName} onChange={handleChange} />
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <VStack spacing={1}>
        <Text fontSize="xl" color="brand.dark">
          {userName}
        </Text>
        <Text fontSize="sm" color="brand.gray">
          CEO of Apple
        </Text>
      </VStack>
    </VStack>
  );
}

export default Profile;
