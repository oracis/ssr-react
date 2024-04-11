import React, { useEffect } from "react";
import { getUserData } from "../store/slice/personalSlice";
import { useDispatch, useSelector } from "react-redux";
import HelmetExport, { Helmet } from "react-helmet";

const Personal = () => {
  const dispatch = useDispatch();
  const personal = useSelector((state) => state.personal);
  const { userInfo } = personal;

  useEffect(() => {
    dispatch(getUserData());
  }, []);

  return (
    <>
      <Helmet>
        <title>Personal</title>
      </Helmet>
      <div>
        <h4>{userInfo.name}</h4>
        <p>{userInfo.job}</p>
      </div>
    </>
  );
};

Personal.getInitData = (store) => {
  return store.dispatch(getUserData());
};

export default Personal;
