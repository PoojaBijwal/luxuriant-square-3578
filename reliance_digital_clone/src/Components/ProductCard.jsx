// Bhavik Dholu fw20_0582
import {
  Badge,
  Box,
  Card,
  CardBody,
  Divider,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";

function ProductCard(props) {
  const { id, image, title, desc, price } = props;

  const handleClick = () => {};
  return (
    <Box>
      <Card maxW="sm" onClick={handleClick}>
        <CardBody align="center">
          <Image
            src={image}
            alt="product_image"
            borderRadius="lg"
            boxSize="200px"
            w="130px"
            align="center"
          />
          <Stack mt="6" spacing="3">
            <Heading size="md">{title}</Heading>
            <Text color="blue.600" fontSize="xl">
              Deal Price: ₹{price}
            </Text>
            <Badge
              variant="outline"
              borderRadius="10px"
              fontSize="0.8em"
              colorScheme="green"
            >
              Offers Available
            </Badge>
          </Stack>
        </CardBody>
        <Divider />
      </Card>
    </Box>
  );
}

export default ProductCard;
