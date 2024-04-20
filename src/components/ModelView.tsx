import React, { Suspense } from "react";
import * as THREE from "three";
import { View, PerspectiveCamera } from "@react-three/drei";
import Lights from "./Lights";
import Iphone from "./Iphone";

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

const ModelView: React.FC<ModelViewProps> = ({
  index,
  groupRef,
  gsapType,
  controlRef,
  setRotation,
  item,
  size,
}) => {
  return (
    <View
      index={index}
      id={gsapType}
      className={`border-2 border-red-600 w-full h-full ${
        index === 2 ? "right-[-100%]" : ""
      }`}
    >
      {/* Ambient light */}
      <ambientLight intensity={0.3} />
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <Lights />
      <Suspense fallback={<>loading ....</>}>
        <Iphone />
      </Suspense>
    </View>
  );
};

export default ModelView;
