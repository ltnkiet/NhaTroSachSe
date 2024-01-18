import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Homepage, Rental, SearchDetail, ResetPassword } from "containers/public";
import {System, CreatePost, ManagePost} from 'containers/system'
import {Admin, Auth} from 'containers/admin'
import { path } from "utils/constant";
import * as actions from 'store/actions'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  const { isLoggedIn } = useSelector(state => state.auth)
  useEffect(() => {
    setTimeout(() => {
      isLoggedIn && dispatch(actions.getUser())
    }, 1000)
  }, [isLoggedIn])
  useEffect(() => {
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
    dispatch(actions.getProvinces())
  }, [])
  return (
    <div className="bg-primary overflow-hidden">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.RESET_PASSWORD} element={<ResetPassword />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
          <Route path={path.SEARCH} element={<SearchDetail />} />
        </Route>
        <Route path={path.SYSTEM} element={<System />} >
          <Route path={path.CREATE_POST} element={<CreatePost />} />
          <Route path={path.MANAGE_POST} element={<ManagePost />} />
        </Route>
        <Route path={path.ADMIN} element={<Admin />} >
          <Route path={path.ADMIN_AUTH} element={<Auth />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
