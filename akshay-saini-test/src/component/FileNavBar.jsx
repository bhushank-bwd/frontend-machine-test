import React, { useEffect, useState } from "react";
import json from "../data/fileList.json";
const FileNavBar = () => {
  const [fileList, setFileList] = useState(json);

  return (
    <div className="mainNav">
      <List list={fileList} />
    </div>
  );
};
const List = ({ list }) => {
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
            {node.name}
            {expand?.[node.name] && node.isFolder && (
              <List list={node.children} />
            )}
          </div>
        );
      })}
    </>
  );
};

export default FileNavBar;
