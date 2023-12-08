export const path = {
  // Public
  HOME: '/*',
  HOME__PAGE: ':page',
  LOGIN: 'login',
  CHO_THUE_CAN_HO: 'cho-thue-can-ho',
  CHO_THUE_MAT_BANG: 'cho-thue-mat-bang',
  NHA_CHO_THUE: 'nha-cho-thue',
  CHO_THUE_PHONG_TRO: 'cho-thue-phong-tro',
  DETAL_POST__TITLE__POSTID: 'chi-tiet/:title/:postId',
  SEARCH: 'tim-kiem',
  // System
  SYSTEM: '/he-thong/*',
  CREATE_POST: 'tao-bai-dang',
  // Admin
  ADMIN: '/quan-tri/*',
  // ADMIN_AUTH: '/quan-tri/dang-nhap',
  ADMIN_POST: '/quan-tri/quan-ly-bai-dang',
  ADMIN_CATEGORY: '/quan-tri/quan-ly-danh-muc*',
  ADMIN_USER: '/quan-tri/quan-ly-nguoi-dung',

}

export const text = {
  HOME_TITLE: 'Kênh thông tin Nhà Trọ số 1 Việt Nam',
  HOME_DESCRIPTION: "Kênh thông tin Nhà Trọ số 1 Việt Nam - Website đăng tin cho thuê phòng trọ, nhà nguyên căn, căn hộ, hiệu quả với 100.000+ tin đăng và 2.500.000 lượt xem mỗi tháng."
}

export const location = [
  {
      id: 'hcm',
      name: 'Nhà trọ Hồ Chí Minh',
      image: 'https://phongtro123.com/images/location_hcm.jpg'
  },
  {
      name: 'Nhà trọ Hà Nội',
      image: 'https://phongtro123.com/images/location_hn.jpg',
      id: 'hn',
  },
  {
      name: 'Nhà trọ Đà nẵng',
      image: 'https://phongtro123.com/images/location_dn.jpg',
      id: 'dn',
  },
]
