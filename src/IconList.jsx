import React from 'react';
import IconItem from './IconItem';

const IconList = ({ icons }) => (
  <ul className="iconlist">
    {icons.map(({ icon, text }) => (
      <IconItem text={text} icon={icon} />
    ))}
  </ul>
);

export default IconList;
