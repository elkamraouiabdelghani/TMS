// Chakra Imports
import {
    Avatar,
    Button,
    Flex,
    Icon,
    Link,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorModeValue,
    useColorMode,
} from '@chakra-ui/react';
// Custom Components
import { SidebarResponsive } from 'components/sidebar/Sidebar';
import PropTypes from 'prop-types';
import React from 'react';
// Assets
import { IoMdMoon, IoMdSunny } from 'react-icons/io';
import { FaEthereum } from 'react-icons/fa';
import routes from 'routes';
import { useNavigate } from 'react-router-dom';
export default function HeaderLinks(props) {
    const url = useNavigate();
    const { secondary } = props;
    const { colorMode, toggleColorMode } = useColorMode();
    // Chakra Color Mode
    const navbarIcon = useColorModeValue('gray.400', 'white');
    const menuBg = useColorModeValue('white', 'navy.800');
    const textColor = useColorModeValue('secondaryGray.900', 'white');
    const ethColor = useColorModeValue('gray.700', 'white');
    const borderColor = useColorModeValue('#E6ECFA', 'rgba(135, 140, 189, 0.3)');
    const ethBg = useColorModeValue('secondaryGray.300', 'navy.900');
    const ethBox = useColorModeValue('white', 'navy.800');
    const shadow = useColorModeValue(
        '14px 17px 40px 4px rgba(112, 144, 176, 0.18)',
        '14px 17px 40px 4px rgba(112, 144, 176, 0.06)',
    );
    return (
        <Flex
            w={{ sm: '100%', md: 'auto' }}
            alignItems="center"
            flexDirection="row"
            bg={menuBg}
            flexWrap={secondary ? { base: 'wrap', md: 'nowrap' } : 'unset'}
            p="10px"
            borderRadius="30px"
            boxShadow={shadow}
        >
            <Flex
                bg={ethBg}
                display={secondary ? 'flex' : 'none'}
                borderRadius="30px"
                ms="auto"
                p="6px"
                align="center"
                me="6px"
            >
                <Flex
                    align="center"
                    justify="center"
                    bg={ethBox}
                    h="29px"
                    w="29px"
                    borderRadius="30px"
                    me="7px"
                >
                    <Icon color={ethColor} w="9px" h="14px" as={FaEthereum} />
                </Flex>
                <Text
                    w="max-content"
                    color={ethColor}
                    fontSize="sm"
                    fontWeight="700"
                    me="6px"
                >
          1,924
                    <Text as="span" display={{ base: 'none', md: 'unset' }}>
                        {' '}
            ETH
                    </Text>
                </Text>
            </Flex>
            <SidebarResponsive routes={routes} />

            <Button
                variant="no-hover"
                bg="transparent"
                p="0px"
                minW="unset"
                minH="unset"
                h="18px"
                w="max-content"
                onClick={toggleColorMode}
            >
                <Icon
                    me="10px"
                    h="18px"
                    w="18px"
                    color={navbarIcon}
                    as={colorMode === 'light' ? IoMdMoon : IoMdSunny}
                />
            </Button>

            <Menu>
                <MenuButton p="0px">
                    <Avatar
                        _hover={{ cursor: 'pointer' }}
                        color="white"
                        name="Adela Parkson"
                        bg="#11047A"
                        size="sm"
                        w="40px"
                        h="40px"
                    />
                </MenuButton>
                <MenuList
                    boxShadow={shadow}
                    p="0px"
                    mt="10px"
                    borderRadius="20px"
                    bg={menuBg}
                    border="none"
                >
                    <Flex w="100%" mb="0px">
                        <Text
                            ps="20px"
                            pt="16px"
                            pb="10px"
                            w="100%"
                            borderBottom="1px solid"
                            borderColor={borderColor}
                            fontSize="sm"
                            fontWeight="700"
                            color={textColor}
                        >
              👋&nbsp; Hey, {
                                localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')).fullname : ''
                            }
                        </Text>
                    </Flex>
                    <Flex flexDirection="column" p="10px">
                        <MenuItem
                            _hover={{ bg: 'none' }}
                            _focus={{ bg: 'none' }}
                            borderRadius="8px"
                            px="14px"
                        >
                            <Link href='/admin/profile' fontSize="sm">Profile Settings</Link>
                        </MenuItem>
                        <MenuItem
                            _hover={{ bg: 'none' }}
                            _focus={{ bg: 'none' }}
                            color="red.400"
                            borderRadius="8px"
                            px="14px"
                        >
                            <Link onClick={() => {
                                localStorage.removeItem('token');
                                localStorage.removeItem('user');
                                url('/');
                            }} fontSize="sm">Log out</Link>
                        </MenuItem>
                    </Flex>
                </MenuList>
            </Menu>
        </Flex>
    );
}

HeaderLinks.propTypes = {
    variant: PropTypes.string,
    fixed: PropTypes.bool,
    secondary: PropTypes.bool,
    onOpen: PropTypes.func,
};
