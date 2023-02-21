import { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { PropDataFetchContext } from '../../context/properties-data.context';
import './properties.style.scss';

const HomeProperties = () => {
  const { getProp, setGetSelectedProp } = useContext(PropDataFetchContext);
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProducts, setCurrentProducts] = useState([]);
  const [showIndexes, setShowIndexes] = useState([]);
  const timeoutRef = useRef(null);
  const navgiate = useNavigate();

  useEffect(() => {
    if (getProp === null) {
      setProducts([]);
    } else {
      setProducts(getProp);
    }
  }, [getProp]);

  useEffect(() => {
    setCurrentProducts(products.slice(currentIndex, currentIndex + 3));
    setShowIndexes([]);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowIndexes([(currentIndex + 2) % 3, (currentIndex + 1) % 3, currentIndex % 3]);
    }, 150);
  }, [currentIndex, products]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [products]);

  const handelPropClick = (id) => {
    setGetSelectedProp(id);
    navgiate('/properties');
  }
  return (
    <>
      <div id="properties">
        <h1>UAE Properties</h1>
      </div>
      <div className="main-properties">
        {currentProducts.map(({ id, proImage, homeTitle }, index) => {
          return (
            <div
              className={`prop-home ${showIndexes.includes(index) ? 'show' : ''}`}
              key={id} onClick={() => handelPropClick(id)}
            >
              <div className="propBackgroundContainer">
                <div
                  className="prop-home-background"
                  style={{ background: `url(${proImage}) center center no-repeat` }}
                ></div>
              </div>
              <div className="sale-white-container">
                <div className="sale-container">
                  <h2 className="sale">SALE</h2>
                </div>
              </div>
              <h1>{homeTitle}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeProperties;
