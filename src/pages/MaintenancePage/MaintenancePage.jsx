import React from 'react';
import { animated } from 'react-spring';
import useAnimation from '../../hooks/useAnimation';
import tableFixtures from '../../../__fixtures__/maintenance.fixture.json';
import './MaintenancePage.scss';

export default function MaintenancePage() {
  const { data } = tableFixtures;
  const animProps = useAnimation();
  return (
    <div className="maintenanceWrapper">
      <h1 className="maintenanceTitle">Maintenance info</h1>
      <animated.div className="tableWrapper" style={animProps}>
        <table className="maintenanceTable">
          <thead>
            <tr>
              <th className="headingTitle">Name</th>
              <th className="headingTitle">Provider</th>
              <th className="headingTitle">Date</th>
              <th className="headingTitle">Impact</th>
              <th className="headingTitle">Additional info</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map(({ id, name, provider, time, impact, info }, idx) => (
                <tr key={id} className="tableRow">
                  <td className="tableRowItem">
                    <span className="listNumber">{idx + 1}</span>
                    {name}
                  </td>
                  <td className="tableRowItem">{provider}</td>
                  <td className="tableRowItem">{time}</td>
                  <td className="tableRowItem">
                    <span
                      className="impactWrapper"
                      style={{
                        backgroundColor: !impact
                          ? 'white'
                          : impact === 'high'
                          ? '#71D66F'
                          : '#E7C074',
                      }}
                    >
                      {impact}
                    </span>
                  </td>
                  <td className="tableRowItem">{info}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </animated.div>
    </div>
  );
}
