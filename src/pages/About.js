import React from "react";
import { useParams } from "react-router-dom";
import BtnBack from "../components/BtnBack/BtnBack";
import CountryInfo from "../components/countryInfo/CountryInfo";
import "./styles.css";
import useFetch from "../hooks/useFetch";
import Loading from "../components/loading/Loading";
import NotFound from "./NotFound";

const About = () => {
  const { keyword } = useParams();
  const { isLoading, isError, data } = useFetch(keyword);

  if (isError) return <NotFound />;

  return (
    <>
      <BtnBack />
      {isLoading || data.length === 0 ? (
        <Loading />
      ) : (
        <div className="container container__about">
          <img className="about__img" src={data.flag} alt={data.name} />
          <CountryInfo country={data} />
        </div>
      )}
    </>
  );
};

export default About;
