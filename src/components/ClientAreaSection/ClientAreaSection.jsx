import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import { animated } from 'react-spring';
import useAnimation from '../../hooks/useAnimation';
import FollowIcon from '../../assets/img/follow.svg?component';
import CopyIcon from '../../assets/img/copyClip.svg?component';
import DownArrowIcon from '../../assets/img/downArrow.svg?component';
import './ClientAreaSection.scss';

export default function ClientAreaSection() {
  const [login, setLogin] = useState('infinGameAdmin');
  const [password, setPassword] = useState('ny23!Pass');
  const [isLoginCopied, setIsLoginCopied] = useState(false);
  const [isPasswordCopied, setIsPasswordCopied] = useState(false);
  const animProps = useAnimation();

  useEffect(() => {
    if (isLoginCopied) {
      toast.success('Login is copied to clipboard');
      setTimeout(() => {
        setIsLoginCopied(!isLoginCopied);
      }, 3000);
    }
    if (isPasswordCopied) {
      toast.success('Password is copied to clipboard');
      setTimeout(() => {
        setIsPasswordCopied(!isPasswordCopied);
      }, 3000);
    }
  }, [isLoginCopied, isPasswordCopied]);

  return (
    <animated.div className="casWrapper" style={animProps}>
      <h3>Links</h3>
      <div className="casItemsWrapper">
        <div className="casItem">
          <div className="headingWrapper">
            <p>Back Office</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Infingame Back office is a statistics tool that works in conjunction with casino
              software. This tool allows you to view statistics on gaming rounds, players and the
              financial side of the games project.
            </p>
          </div>
          <NavLink to={'/home'} className="casBtn">
            Open link
            <FollowIcon />
          </NavLink>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Integration API DOC</p>
          </div>
          <div className="textWrapper">
            <p className="description">Credentials:</p>
            <div className="credsWrapper">
              <p className="description">
                <span>
                  Login:{' '}
                  <span>
                    <strong>{login}</strong>
                  </span>
                </span>
              </p>
              <CopyToClipboard
                text={login}
                style={{ marginRight: 35 }}
                onCopy={() => setIsLoginCopied(!isLoginCopied)}
              >
                <button className="copyBtn">
                  <CopyIcon style={{ fill: isLoginCopied ? 'grey' : '#ED1438' }} />
                </button>
              </CopyToClipboard>
              <p className="description" style={{ marginLeft: '35px' }}>
                <span>
                  Password:{' '}
                  <span>
                    <strong>{password}</strong>
                  </span>
                </span>
              </p>
              <CopyToClipboard
                text={password}
                onCopy={() => setIsPasswordCopied(!isPasswordCopied)}
              >
                <button className="copyBtn">
                  <CopyIcon style={{ fill: isPasswordCopied ? 'grey' : '#ED1438' }} />
                </button>
              </CopyToClipboard>
            </div>
          </div>
          <div className="btnsWrapper">
            <NavLink to={'/home'} className="casBtn">
              Open link
              <FollowIcon />
            </NavLink>
            <button className="detailsBtn">
              Show Details
              <DownArrowIcon />
            </button>
          </div>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Gamelist [PRODUCTION]</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Use it to access the list of games in PROD. Where login=xxxxx and password=xxxxx, is
              your prod ADM credentials, which you received during the integration.
            </p>
          </div>
          <div className="btnsWrapper">
            <NavLink to={'/home'} className="casBtn">
              Open link
              <FollowIcon />
            </NavLink>
            <button className="detailsBtn">
              Show Details
              <DownArrowIcon />
            </button>
          </div>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Service Desk</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Storage with provider graphic materials. Banners, icons and game screens which can be
              useful for visual placement on your project and marketing promotions.
            </p>
          </div>
          <div className="btnsWrapper">
            <NavLink to={'/home'} className="casBtn">
              Open link
              <FollowIcon />
            </NavLink>
            <button className="detailsBtn">
              Show Details
              <DownArrowIcon />
            </button>
          </div>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Game graphics storage</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Storage with provider graphic materials. Banners, icons and game screens which can be
              useful for visual placement on your project and marketing promotions.
            </p>
          </div>
          <div className="btnsWrapper">
            <NavLink to={'/home'} className="casBtn">
              Open link
              <FollowIcon />
            </NavLink>
            <button className="detailsBtn">
              Show Details
              <DownArrowIcon />
            </button>
          </div>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Auto test</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida ligula mollis
              fringilla faucibus. Cras ut imperdiet elit, ut tincidunt tellus.
            </p>
          </div>
          <NavLink to={'/home'} className="casBtn">
            Open link
            <FollowIcon />
          </NavLink>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Gamelist [STAGING]</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Storage with provider graphic materials. Banners, icons and game screens which can be
              useful for visual placement on your project and marketing promotions.
            </p>
          </div>
          <div className="btnsWrapper">
            <NavLink to={'/home'} className="casBtn">
              Open link
              <FollowIcon />
            </NavLink>
            <button className="detailsBtn">
              Show Details
              <DownArrowIcon />
            </button>
          </div>
        </div>
        <div className="casItem">
          <div className="headingWrapper">
            <p>Auto test</p>
          </div>
          <div className="textWrapper">
            <p className="description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce gravida ligula mollis
              fringilla faucibus. Cras ut imperdiet elit, ut tincidunt tellus.
            </p>
          </div>
          <NavLink to={'/home'} className="casBtn">
            Open link
            <FollowIcon />
          </NavLink>
        </div>
      </div>
    </animated.div>
  );
}
