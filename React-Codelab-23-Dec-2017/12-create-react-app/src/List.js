import React from 'react';

function List(props) {
  return props.list.map((item, i) => (
    <li className={item.completed ? 'row done' : 'row'}>
      <a className="remove" href="#" onClick={() => props.onRemove(i)}>
        <i className="fa fa-trash-o" />
      </a>
      <a className="completed" href="#" onClick={() => props.onComplete(i)}>
        <i className="fa fa-check" />
      </a>
      {item.content}
    </li>
  ));
}

export default List;
