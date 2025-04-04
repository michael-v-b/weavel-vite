import "../InfoPages.css";
import { useState,useEffect } from "react";
import useStore from "../../../../DevTools/store";

const OpenField = ({ object }) => {
  const [objectData,setObjectData] = useState(object.userData.meshData);
  const [isOpen, setOpen] = useState(objectData.open);
  const projectFile = useStore((state) => state.projectFile);
  const setProjectFile = useStore((state) => state.setProjectFile);

  useEffect(()=>{
    setObjectData(object.userData.meshData);
    setOpen(object.userData.meshData.open);

  },[object]);

  const handleChange = (event) => {
    const checked = event.target.checked;
    objectData.setOpen(checked);
    setOpen(checked);

    //update project file
    const newMesh = projectFile.meshes[object.userData.idNumber];
    newMesh.open = checked;
    setProjectFile({ ...projectFile });
  };

  return (
    <div className="attribute">
      <div className="attribute attribute-name">Open</div>
      <input
        type="checkbox"
        checked={isOpen}
        onChange={(e) => {
          handleChange(e);
        }}
      />
    </div>
  );
};

export default OpenField;
