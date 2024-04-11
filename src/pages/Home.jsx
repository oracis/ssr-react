import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeData } from "../store/slice/homeSlice";
import { Helmet } from "react-helmet";

const Home = () => {
  const dispatch = useDispatch();

  const articles = useSelector((state) => {
    return state.home.articles;
  });

  const handleClick = () => {
    console.log("Clicked");
  };

  useEffect(() => {
    if (articles && articles.length === 0) {
      dispatch(fetchHomeData());
    }
  }, [articles]);

  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <div>{article.title}</div>
            <div>{article.content}</div>
          </li>
        ))}
        <button onClick={handleClick}>Click</button>
      </ul>
    </>
  );
};

Home.getInitData = async (store) => {
  return store.dispatch(fetchHomeData());
};

export default Home;
