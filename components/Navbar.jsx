import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc'
import { BsSearch } from 'react-icons/bs'
import { FiKey } from 'react-icons/fi'

const Navbar = () => (
    <Flex  p="2" borderBottom="1px" borderColor="gray.100">
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
            <Link href="/" paddingLeft="2">LN Estates</Link>
        </Box>
        
        <Spacer />
       
        <Box>
            <Menu>
                <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
                <MenuList>
                    <Link href="/" passHref>
                        <MenuItem icon={<FcHome />}>Home</MenuItem>
                    </Link>
                    <Link href="/search" passHref>
                        <MenuItem icon={<BsSearch />}>Search</MenuItem>
                    </Link>
                    <Link href="/search?purpose=for-sale" passHref>
                        <MenuItem icon={<FiKey />}>Buy A Property</MenuItem>
                    </Link>
                    <Link href="/seach?purpose=for-rent" passHref>
                        <MenuItem icon={<FcAbout />}>Rent A Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
            {/* <Breadcrumb>
                
                <Link href="/" passHref>
                    <BreadcrumbItem>
                        <BreadcrumbLink icon={<FcHome />}>Home</BreadcrumbLink>
                    </BreadcrumbItem>
                </Link>

                <Link href="/search" passHref>
                    <BreadcrumbItem>
                        <BreadcrumbLink icon={<BsSearch />}>Search</BreadcrumbLink>
                    </BreadcrumbItem>
                </Link>

                <Link href="/search?purpose=for-sale" passHref>
                    <BreadcrumbItem>
                        <BreadcrumbLink icon={<FiKey />}>Buy A Property</BreadcrumbLink>
                    </BreadcrumbItem>
                </Link>

                <Link href="/search?purpose=for-rent" passHref>
                    <BreadcrumbItem>
                        <BreadcrumbLink icon={<FcAbout />}>Rent A Property</BreadcrumbLink>
                    </BreadcrumbItem>
                </Link>

            </Breadcrumb> */}
        </Box>
    </Flex>
)

export default Navbar;