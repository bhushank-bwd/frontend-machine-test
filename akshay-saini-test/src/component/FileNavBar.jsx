import React, { useEffect, useState } from "react";
import json from "../data/fileList.json";
const FileNavBar = () => {
  const [fileList, setFileList] = useState(json);
  const handleAddClick = (node, newItemName) => {
    let updateList = (prevState) => {
      const newItemObj = {
        id: Date.now(),
        name: newItemName,
        isFolder: false,
        children: [],
      };
      return prevState.map((prevItem) => {
        if (prevItem.id === node.id) {
          return {
            ...prevItem,
            children: [...prevItem.children, newItemObj],
          };
        }
        if (prevItem.children) {
          return { ...prevItem, children: updateList(prevItem.children) };
        }
        return prevItem;
      });
    };
    setFileList((prev) => updateList(prev));
  };
  const handleDeleteClick = (node) => {
    let updateList = (prevState) => {
      return prevState
        .filter((prevItem) => prevItem.id !== node.id)
        .map((subChildren) => {
          if (subChildren.children) {
            return {
              ...subChildren,
              children: updateList(subChildren.children),
            };
          }
        });
    };
    setFileList((prev) => updateList(prev));
  };
  return (
    <div className="mainNav">
      <List
        list={fileList}
        handleAddClick={handleAddClick}
        handleDeleteClick={handleDeleteClick}
      />
    </div>
  );
};
const List = ({ list, handleAddClick, handleDeleteClick }) => {
  const [expand, setExpand] = useState({});
  return (
    <>
      {list.map((node) => {
        return (
          <div className="nodeItem" key={node.id}>
            {node.isFolder && node.children.length > 0 && (
              <span
                onClick={() =>
                  setExpand((prev) => ({
                    ...prev,
                    [node.name]: !prev?.[node.name],
                  }))
                }
                className="isFolder"
              >
                {expand?.[node.name] ? "-" : "+"}
              </span>
            )}
            {node.name}{" "}
            {node.isFolder && (
              <small
                onClick={() => {
                  let newItemName = prompt(
                    `Enter File name to add in ${node.name}`
                  );
                  handleAddClick(node, newItemName);
                }}
                className="addNode"
              >
                A
              </small>
            )}
            <small
              onClick={() => handleDeleteClick(node)}
              className="deleteNode"
            >
              D
            </small>
            {expand?.[node.name] && node.isFolder && (
              <List
                list={node.children}
                handleAddClick={handleAddClick}
                handleDeleteClick={handleDeleteClick}
              />
            )}
          </div>
        );
      })}
    </>
  );
};

export default FileNavBar;
