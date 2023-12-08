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
        text: 'Quản lý tin đăng',
        path: '/he-thong/quan-ly-bai-dang',
        icon: <MdOutlineLibraryBooks />
    },
    {
        id: 3,
        text: 'Sửa thông tin cá nhân',
        path: '/he-thong/sua-thong-tin-ca-nhan',
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