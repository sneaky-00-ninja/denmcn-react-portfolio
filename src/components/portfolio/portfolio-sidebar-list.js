import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";


const PortfolioSidebarList = (props) => {
  const portfolioList = props.data.map((portfolioItem) => {
    return (
      <div key={portfolioItem.id} className="portfolio-item-thumb">

        <div className="portfolio-thumb-img">
          <img src={portfolioItem.thumb_image_url} />
        </div>


        <div className="trash-line">
          <div>
            <h1 className="title">{portfolioItem.name}</h1>
          </div>

          <div className="actions">
            <a className="action-icon" onClick={() => props.handleEditClick(portfolioItem)}>
              <FontAwesomeIcon  icon="pen-to-square"/>
            </a>
            
            <a className="action-icon" onClick={() => props.handleDeleteClick(portfolioItem)}>
              <FontAwesomeIcon  icon="trash" />
            </a>

          </div>

          </div>

          <div>
        </div>
        <h6 className="item-ref-id">{portfolioItem.id}</h6>
      </div>
    );
  });

  return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>;
};

export default PortfolioSidebarList;
