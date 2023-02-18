import { useState, useEffect, useRef } from 'react';
import './properties.style.scss';

const products = [
  {
    id: 1,
    backgroundImg: '../../images/abudhabi.jpg',
    name: 'Abu Dhabi',
  },
  {
    id: 2,
    backgroundImg: '../../images/sharja.jpg',
    name: 'Sharjah',
  },
  {
    id: 3,
    backgroundImg: '../../../images/dabui.jpg',
    name: 'Dhabi',
  },
  {
    id: 4,
    backgroundImg: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1596&q=80',
    name: 'testOne',
  },
  {
    id: 5,
    backgroundImg: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80',
    name: 'testTwo',
  },
  {
    id: 6,
    backgroundImg: 'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=710&q=80',
    name: 'testFour',
  },
  {
    id: 7,
    backgroundImg: 'https://images.unsplash.com/photo-1565953522043-baea26b83b7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'testFive',
  },
  {
    id: 8,
    backgroundImg: 'https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=725&q=80',
    name: 'testSex',
  },
  {
    id: 9,
    backgroundImg: 'https://images.unsplash.com/photo-1544984243-ec57ea16fe25?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    name: 'testSeven',
  },
];

const HomeProperties = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentProducts, setCurrentProducts] = useState(
    products.slice(currentIndex, currentIndex + 3)
  );
  const [showIndexes, setShowIndexes] = useState([]);
  const timeoutRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % products.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setCurrentProducts(products.slice(currentIndex, currentIndex + 3));
    setShowIndexes([]);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setShowIndexes([(currentIndex + 2) % 3, (currentIndex + 1) % 3, currentIndex % 3]);
    }, 150);
  }, [currentIndex]);

  return (
    <>
      <div id="properties">
        <h1>UAE Properties</h1>
      </div>
      <div className="main-properties">
        {currentProducts.map(({ id, backgroundImg, name }, index) => {
          return (
            <div
              className={`prop-home ${
                showIndexes.includes(index) ? 'show' : ''
              }`}
              key={id}
            >
              <div className="propBackgroundContainer">
                <div
                  className="prop-home-background"
                  style={{ background: `url(${backgroundImg}) center center no-repeat` }}
                ></div>
              </div>
              <div className="sale-white-container">
                <div className="sale-container">
                  <h2 className="sale">SALE</h2>
                </div>
              </div>
              <h1>{name}</h1>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default HomeProperties;
