import React from 'react';
import { NavLink } from 'react-router-dom';
import { animated } from 'react-spring';
import useAnimation from '../../hooks/useAnimation';
import financesIcon from '../../assets/img/finances.svg';
import integrationIcon from '../../assets/img/links.svg';
import supportIcon from '../../assets/img/support.svg';
import promoIcon from '../../assets/img/megaphone.svg';
import ArrowIcon from '../../assets/img/arrowRight.svg?component';
import './ClientAreaBlock.scss';

export default function ClientAreaBlock() {
  const animProps = useAnimation();
  return (
    <animated.div className="cabContainer" style={animProps}>
      <h3>Infingame client area</h3>
      <div className="cabWrapper">
        <div className="sectionWrapper">
          <div className="headingWrapper">
            <img src={financesIcon} alt="finances" />
            <span>FINANCES</span>
          </div>
          <div className="textWrapper">
            <p className="heading">Services, links, reports for finance-managers</p>
            <p className="description">
              A short text describing what can be found in this section and who it is for
            </p>
          </div>
          <NavLink to={'/client-area'} className="sectionBtn">
            Open info
            <ArrowIcon />
          </NavLink>
        </div>
        <div className="sectionWrapper">
          <div className="headingWrapper">
            <img src={integrationIcon} alt="integration" />
            <span>INTEGRATION</span>
          </div>
          <div className="textWrapper">
            <p className="heading">Services, links, reports for finance-managers</p>
            <p className="description">
              A short text describing what can be found in this section and who it is for
            </p>
          </div>
          <NavLink to={'/client-area'} className="sectionBtn">
            Open info
            <ArrowIcon />
          </NavLink>
        </div>
        <div className="sectionWrapper">
          <div className="headingWrapper">
            <img src={supportIcon} alt="support" />
            <span>SUPPORT</span>
          </div>
          <div className="textWrapper">
            <p className="heading">Guides and useful information for operators</p>
            <p className="description">
              A short text describing what can be found in this section and who it is for
            </p>
          </div>
          <NavLink to={'/maintenance'} className="sectionBtn">
            Open info
            <ArrowIcon />
          </NavLink>
        </div>
        <div className="sectionWrapper">
          <div className="headingWrapper">
            <img src={promoIcon} alt="promo tools" />
            <span>PROMO TOOLS</span>
          </div>
          <div className="textWrapper">
            <p className="heading">Guides and useful information for operators</p>
            <p className="description">
              A short text describing what can be found in this section and who it is for
            </p>
          </div>
          <NavLink to={'/client-area'} className="sectionBtn">
            Open info
            <ArrowIcon />
          </NavLink>
        </div>
      </div>
      <div className="widgetSection">
        <div className="widgetsWrapper">
          <div className="contentWrapper">
            <div className="headerWrapper">
              <h3>Finance widgets</h3>
              <a href="#">Watch all</a>
            </div>
            <div className="widgets"></div>
          </div>
        </div>
        <div className="widgetsWrapper">
          <div className="contentWrapper">
            <div className="headerWrapper">
              <h3>Integration widgets</h3>
              <a href="#">Watch all</a>
            </div>
            <div className="widgets"></div>
          </div>
        </div>
      </div>
      <div className="newsSection">
        <div className="newsHeaderWrapper">
          <h3>News</h3>
          <NavLink to={'/news'}>Watch all</NavLink>
        </div>
        <div className="articleWrapper">
          <div className="article"></div>
          <div className="article"></div>
          <div className="article"></div>
        </div>
      </div>
    </animated.div>
  );
}
