import { Box, Flex, Input, Button, Text, Switch, FormControl, FormLabel, VStack } from "@chakra-ui/react";

const Index = () => {
  return (
    <Flex direction={{ base: "column", md: "row" }} height="100vh">
      <Box flex="1" p="4" overflowY="auto">
        <VStack spacing="4">
          <Text fontSize="2xl" fontWeight="bold">Messages</Text>
          <Flex direction="column" width="100%">
            <Box bg="gray.100" p="3" borderRadius="lg" mb="4">
              <Text fontSize="sm">John Doe:</Text>
              <Text fontSize="md">Hey, how are you?</Text>
            </Box>
            <Box bg="gray.100" p="3" borderRadius="lg" mb="4">
              <Text fontSize="sm">Jane Smith:</Text>
              <Text fontSize="md">I'm good, thanks for asking!</Text>
            </Box>
          </Flex>
          <Flex as="form" width="100%">
            <Input placeholder="Type a message..." mr="2" />
            <Button colorScheme="blue">Send</Button>
          </Flex>
        </VStack>
      </Box>
      <Box width={{ base: "100%", md: "30%" }} bg="gray.200" p="4">
        <Text fontSize="2xl" fontWeight="bold" mb="4">Privacy Settings</Text>
        <FormControl display="flex" alignItems="center" mb="4">
          <FormLabel htmlFor="email-alerts" mb="0">
            Email Alerts
          </FormLabel>
          <Switch id="email-alerts" />
        </FormControl>
        <FormControl display="flex" alignItems="center" mb="4">
          <FormLabel htmlFor="sms-notifications" mb="0">
            SMS Notifications
          </FormLabel>
          <Switch id="sms-notifications" />
        </FormControl>
        <FormControl display="flex" alignItems="center">
          <FormLabel htmlFor="profile-visible" mb="0">
            Profile Visible
          </FormLabel>
          <Switch id="profile-visible" />
        </FormControl>
      </Box>
    </Flex>
  );
};

export default Index;