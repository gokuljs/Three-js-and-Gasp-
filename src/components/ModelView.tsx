import React from "react";
import * as THREE from "three";

interface ModelViewProps {
  index: number;
  groupRef: React.MutableRefObject<THREE.Group<THREE.Object3DEventMap>>;
  gsapType: string;
  controlRef: React.MutableRefObject<undefined>;
  setRotation: React.Dispatch<React.SetStateAction<number>>;
  item: {
    title: string;
    color: string[];
    img: string;
  };
  size: string;
}

const ModelView: React.FC<ModelViewProps> = () => {
  return <div>View</div>;
};

export default ModelView;
