import React, { useState } from 'react';

const DragAndDrop = ({ values, setValues, ItemComponent, ...restProps }) => {
  // Номер активного элемента.
  const [draggedFrom, setDraggedFrom] = useState(null);
  // Номер положения активного элемента.
  const [draggedTo, setDraggedTo] = useState(null);
  // Исходный список.
  const [originalList, setOriginalList] = useState([]);
  // Новый список.
  const [updatedList, setUpdateList] = useState([]);

  const onDragStart = (e) => {
    const position = parseInt(e.currentTarget.dataset.position);

    setDraggedFrom(position);
    setOriginalList(values);

    e.dataTransfer.setData('text/html', '');
  };

  const onDragOver = (e) => {
    e.preventDefault();
    const position = parseInt(e.currentTarget.dataset.position);

    if (draggedTo !== position) {
      const item = originalList[draggedFrom];
      const filteredValues = originalList.filter((item, index) => index !== draggedFrom);
      const saveList = [
        ...filteredValues.slice(0, position),
        item,
        ...filteredValues.slice(position),
      ];

      setDraggedTo(position);
      setUpdateList(saveList);
    }
  };

  const onDrop = () => {
    setValues(updatedList);
    setDraggedFrom(null);
    setDraggedTo(null);
  };

  const onDragLeave = () => {
    setDraggedTo(null);
  };

  return values ? values.map((value, index) => (
    <div
      key={index}
      data-position={index}
      className={draggedTo === index ? 'drop-area' : ''}
      onDragStart={onDragStart}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
      draggable
    >
      <ItemComponent {...restProps} value={value} />
    </div>
  )) : null;
};

export default DragAndDrop;
