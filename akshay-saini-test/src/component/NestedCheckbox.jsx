import React, { useState } from "react";
const json = [
  {
    id: 123,
    name: "public",
    isFolder: true,
    children: [
      {
        id: 1231,
        name: "vite.svg",
        isFolder: false,
        children: [],
      },
    ],
  },
  {
    id: 124,
    name: "src",
    isFolder: true,
    children: [
      {
        id: 1241,
        name: "component",
        isFolder: true,
        children: [
          {
            id: 12411,
            name: "App.jsx",
            isFolder: false,
            children: [],
          },
          {
            id: 12412,
            name: "FileNav.jsx",
            isFolder: false,
            children: [],
          },
        ],
      },
    ],
  },
  {
    id: 125,
    name: "index.html",
    isFolder: false,
    children: [],
  },
];

const NestedCheckbox = () => {
  const [checked, setChecked] = useState({});

  return (
    <div className="mainCheckBox">
      <List data={json} checked={checked} setChecked={setChecked} />
    </div>
  );
};
const List = ({ data, checked, setChecked }) => {
  const onHandleCheck = (isChecked, node) => {
    setChecked((prev) => {
      const newState = { ...prev, [node.id]: isChecked };
      const updateChildren = (subNode) => {
        subNode.children?.forEach((child) => {
          newState[child.id] = isChecked;
          child.children && updateChildren(child);
        });
      };
      updateChildren(node);

      const verifyChecked = (subNode) => {
        if (subNode.children < 1) return newState[subNode.id] || false;
        const allChildrenChecked = subNode.children.every((child) =>
          verifyChecked(child)
        );
        newState[subNode.id] = allChildrenChecked;
        return allChildrenChecked;
      };

      json.forEach((node) => verifyChecked(node));
      return newState;
    });
  };
  return (
    <>
      {data.map((node) => {
        return (
          <div className="checkBoxItem" key={node.id}>
            <input
              type="checkbox"
              checked={checked[node.id] || false}
              onChange={(e) => onHandleCheck(e.target.checked, node)}
            ></input>
            {node.name}
            {node.children.length > 0 && (
              <List
                data={node.children}
                checked={checked}
                setChecked={setChecked}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default NestedCheckbox;
