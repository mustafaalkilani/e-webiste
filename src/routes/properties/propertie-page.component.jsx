import { useContext, useEffect } from "react";
import { PropDataFetchContext } from "../../context/properties-data.context";
import Contact from "../../compoenets/Contact/contact.component";

import './properties-page.style.scss';

const PropertiePage = () => {
  const {getProp, getSelectedProp} = useContext(PropDataFetchContext);
  const filteredList = getProp.filter(product => product.id === getSelectedProp);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [getProp]);
  return (
      <div className="prop-first-main-container">
        <div className="main-background-prop"></div>
        <div className="background-prop-page" style={{ backgroundImage: `url(${filteredList[0].image})` }}>
        </div>
        <div className="prop-page-main-container">
          <h1 className="prop-page-h1-title">{filteredList[0].title}</h1>
          <div className="prop-page-text">
          <p className="p-one">{filteredList[0].explanation}</p>
          </div>
        </div>
        <div className="image-prop-page" style={{ backgroundImage: `url(${filteredList[0].imageTwo})` }}>  
        </div>
        <div className="prop-page-main-container">
          <h1 className="prop-page-h1-title">{filteredList[0].titleTwo}</h1>
          <div className="prop-page-text">
          <p className="p-one">{filteredList[0].messageTwo}</p>
          </div>
        </div>
        <Contact />
      </div>
    )
  }

  
export default PropertiePage;