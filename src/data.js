import { FaBehance, FaCalendarAlt, FaFacebook, FaFolderOpen, FaHome, FaLinkedin, FaSketch, FaTwitter, FaUserFriends, FaWpforms } from "react-icons/fa";

export const links  = [
    {
        id: 1,
        url: '/',
        name: 'Home',
        icon: <FaHome />
    },
     {
        id: 2,
        url: '/team',
        name: 'team',
        icon: <FaUserFriends />
    },
     {
        id: 3,
        url: '/projects',
        name: 'projects',
        icon: <FaFolderOpen />
    },
     {
        id: 4,
        url: '/calender',
        name: 'calender',
        icon: <FaCalendarAlt />
    },
     {
        id: 5,
        url: '/documnents',
        name: 'documents',
        icon: <FaWpforms />
    }
]

export const social = [
  {
    id: 1,
    url: 'https://www.twitter.com',
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: 'https://www.twitter.com',
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: 'https://www.twitter.com',
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: 'https://www.twitter.com',
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: 'https://www.twitter.com',
    icon: <FaSketch />,
  },
];