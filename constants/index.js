import { FiHome, FiBell, FiSettings } from "react-icons/fi";
import { CgOrganisation } from "react-icons/cg";
import { HiOutlineCube } from "react-icons/hi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";

export const sideMenu = [
    {
        id: 1,
        title: 'Home',
        icon: <FiHome />,
    },
    {
        id: 2,
        title: 'Organization',
        icon: <CgOrganisation />
    },
    {
        id: 3,
        title: 'Assets',
        icon: <HiOutlineCube />,
    },
    {
        id: 4,
        title: 'Trade',
        icon: <RiArrowUpDownFill />,
    },
    {
        id: 5,
        title: 'Wallet',
        icon: <IoWalletOutline />,
    },
]

export const sideBottomMenu = [
    {
        id: 1,
        title: 'Notifications',
        icon: <FiBell />
    },
    {
        id: 2,
        title: 'Support',
        icon: <IoMdHelpCircleOutline />
    },
    {
        id: 3,
        title: 'Settings',
        icon: <FiSettings />,
    },
]

