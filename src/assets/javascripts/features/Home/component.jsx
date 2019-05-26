import React from 'react';
import Layout from 'HOCs/Layout';
import { Link } from 'react-router-dom';

const catsData = [
  {
    id: 1,
    name: 'Arthroscopy',
    uri: 'arthroscopy',
    created_at: '2019-05-24T11:17:35Z',
    updated_at: '2019-05-24T11:17:35Z',
  },
  {
    id: 2,
    name: 'Urology',
    uri: 'urology',
    created_at: '2019-05-24T11:17:56Z',
    updated_at: '2019-05-24T11:17:56Z',
  },
  {
    id: 3,
    name: 'Laparoscopy',
    uri: 'laparoscopy',
    created_at: '2019-05-24T11:18:09Z',
    updated_at: '2019-05-24T11:18:09Z',
  },
  {
    id: 4,
    name: 'Orthopedic',
    uri: 'orthopedic',
    created_at: '2019-05-24T11:18:09Z',
    updated_at: '2019-05-24T11:18:09Z',
  },
  {
    id: 5,
    name: 'Shaver Blades',
    parent_category_id: 1,
    uri: 'shaver_blades',
    created_at: '2019-05-24T11:18:51Z',
    updated_at: '2019-05-24T11:18:51Z',
  },
  {
    id: 6,
    name: 'RF Wands',
    parent_category_id: 1,
    uri: 'rf_wands',
    created_at: '2019-05-24T11:18:51Z',
    updated_at: '2019-05-24T11:18:51Z',
  },
  {
    id: 7,
    name: 'Stryker',
    parent_category_id: 6,
    uri: 'stryker',
    created_at: '2019-05-24T11:18:51Z',
    updated_at: '2019-05-24T11:18:51Z',
  },
  {
    id: 8,
    name: 'Olympus',
    parent_category_id: 6,
    uri: 'olympus',
    created_at: '2019-05-24T11:18:51Z',
    updated_at: '2019-05-24T11:18:51Z',
  },
];

const findUri = node => {
  if (!node.parent_category_id) {
    return `/category/${node.uri}`;
  }
  const parentNode = catsData.find(x => x.id === node.parent_category_id);
  return `${findUri(parentNode)}/${node.uri}`;
};

const MakeChild = ({ main }) => {
  const childNodes = catsData.filter(x => x.parent_category_id === main.id);
  return (
    <div className="tab">
      {childNodes.length > 0 && <input type="checkbox" id={String(main.id)} />}

      <label className="tab-label" htmlFor={String(main.id)}>
        <Link to={findUri(main)}>{main.name}</Link>
      </label>

      {childNodes.map(x => (
        <div key={x.id} className="tab-content">
          <div className="tabs">
            <MakeChild key={x.id} main={x} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Home = () => (
  <div>
    <div className="tabs">
      {catsData.map(
        x => !x.parent_category_id && <MakeChild key={x.id} main={x} />,
      )}
    </div>
  </div>
);

export default Layout(Home);
