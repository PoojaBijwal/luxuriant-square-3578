import { ReactNode } from 'react';
import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';

// import AppStoreBadge from '@/components/AppStoreBadge';
// import PlayStoreBadge from '@/components/PlayStoreBadge';

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children }
    </Text>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export default function Footer() {
  return (
    <Box
      bg={'#343aeb'}
      color={"white"}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>PRODUCT CATEGORIES</ListHeader>
            <Link href={'#'}>smartphones</Link>
            <Link href={'#'}>Laptops</Link>
            <Link href={'#'}>DSLR Cameras</Link>
            <Link href={'#'}>Televisions</Link>
            <Link href={'#'}>Air Conditioners</Link>
            <Link href={'#'}>Refrigrators</Link>
            <Link href={'#'}>Kitchen Appliances</Link>
            <Link href={'#'}>Accessories</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>SITE INFO</ListHeader>
            <Link href={'#'}>About Reliance Digital</Link>
            <Link href={'#'}>resQ Services</Link>
            <Link href={'#'}>Site Map</Link>
            <Link href={'#'}>Gift Cards</Link>
            <Link href={'#'}>Corporate Enquires</Link>
            <Link href={'#'}>Contact Us</Link>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>RESOURCES CENTRE</ListHeader>
            <Link href={'#'}>Product reviews</Link>
            <Link href={'#'}>Buying </Link>
            <Link href={'#'}>How Tos</Link>
            <Link href={'#'}>Featured Stories</Link>
          </Stack>


          <Stack align={'flex-start'}>
            <ListHeader>POLICIES</ListHeader>
            <Link href={'#'}>Terms of Use</Link>
            <Link href={'#'}>FAQs</Link>
            <Link href={'#'}>Cancellation and Return Policy</Link>
            <Link href={'#'}>Pricing and Payments Policy</Link>
            <Link href={'#'}>Shipping and Delivery Policy</Link>
            <Link href={'#'}>Privacy Policy</Link>
            <Link href={'#'}>E-waste Recycling Policy</Link>
            <Link href={'#'}>EMI and Recycling policy</Link>
            <Link href={'#'}>Caution Notice</Link>
          </Stack>

        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2022 Reliance Digital. All Rights Reserved.</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'#'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'#'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'#'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}