import { useState, useEffect } from "react";
import Header from "../../components/header/Header";
import AboutComponent from "../../components/aboutComponent/AboutComponent";
import Store from "../../components/store/Store";
import Footer from "../../components/footer/Footer";
import Spinner from "../../components/spinner/Spinner";
import useFirebase from "../../services/firebase";
import ErrorBoundary from "../../components/errorBoundary/ErrorBoundary";
import ErrorMessage from "../../components/errorMessage/ErrorMessage";
import bg from "../../assets/img/pleasure_bg.jpg";
import secondImg from "../../assets/img/pleasurePhoto.jpg";
export const Pleasure = () => {
  const { getData, loading, error } = useFirebase();

  const [data, setData] = useState([]);

  useEffect(() => {
    onRequest();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onRequest = () => {
    getData().then(onDataLoaded);
  };

  const onDataLoaded = (newData) => {
    setData(newData);
  };
  const spinner = loading ? (
    <div className="store-wrapper">
      <Spinner />
    </div>
  ) : null;
  const view = !(loading || error) ? <Store storeItem={data} /> : null;
  const errorMessage = error ? <ErrorMessage /> : null;
  return (
    <div>
      <Header tittle={"For your pleasure"} path={bg} />
      <AboutComponent title={"About our goods"} path={secondImg} />
      <hr style={{ width: "240px", marginTop: "60px" }} />
      <ErrorBoundary>{view}</ErrorBoundary>
      {spinner}
      {errorMessage}
      <Footer />
    </div>
  );
};

export default Pleasure;
