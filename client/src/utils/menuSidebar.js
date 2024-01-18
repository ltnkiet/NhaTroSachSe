import icons from '../asset/icon'
import {path} from './constant'


const { ImPencil2, MdOutlineLibraryBooks, BiUserPin, AiOutlineLogout } = icons

const memuSidebar = [
    {
        id: 1,
        text: 'Đăng tin cho thuê',
        path: path.CREATE_POST,
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý bài đăng',
        path: path.MANAGE_POST,
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Thông tin cá nhân',
        path: path.USER,
        icon: <BiUserPin />
    },
    {
        id: 4,
        text: 'Thoát',
        path: '/*',
        icon: <AiOutlineLogout />
    }
]

export default memuSidebar