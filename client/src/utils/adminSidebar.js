import icons from '../asset/icon'
import {path} from './constant'

const { ImPencil2, MdOutlineLibraryBooks, BiUserPin, AiOutlineLogout } = icons

const memuSidebar = [
    {
        id: 1,
        text: 'Quản lý bài đăng',
        path: path.ADMIN_POST,
        icon: <ImPencil2 />
    },
    {
        id: 2,
        text: 'Quản lý danh mục',
        path: path.ADMIN_CATEGORY,
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Quản lý người dùng',
        path: path.ADMIN_USER,
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