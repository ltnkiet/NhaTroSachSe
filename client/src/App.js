import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Login, Homepage, Rental } from "./containers/public";
import { path } from "./utils/constant";
import * as actions from './store/actions'
import { useDispatch, useSelector } from 'react-redux'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(actions.getPrices())
    dispatch(actions.getAreas())
    dispatch(actions.getProvinces())
  }, [])

  return (
    <div className="bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />}>
          <Route path="*" element={<Homepage />} />
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.CHO_THUE_CAN_HO} element={<Rental />} />
          <Route path={path.CHO_THUE_MAT_BANG} element={<Rental />} />
          <Route path={path.CHO_THUE_PHONG_TRO} element={<Rental />} />
          <Route path={path.NHA_CHO_THUE} element={<Rental />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
