"use client";
import React, { useEffect, useState } from "react";
import styles from "./loader.module.css";

interface IProps {
  onChangeVisible: (isSwitch: boolean) => void;
}

export default function Loader({ onChangeVisible }: IProps) {
  const [style, setStyle] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setStyle({ transform: "scaleX(0)" });
      setTimeout(() => {
        onChangeVisible(true);
      }, 1800);
    }, 1000);
  }, []);

  const shadeCal = 15;
  const shades = [];

  for (let i = 0; i < shadeCal; i++) {
    shades.push(<div key={i.toString()} style={{ transitionDelay: `${0.05 * i + 1}s`, ...style }} className={styles.shade}></div>);
  }

  return (
    <div className={styles.loader}>
      <div className={styles.shades}>{shades}</div>
      <div className={styles.logoFrame}>
        <div className={styles.top}></div>
        <div className={styles.bottom}></div>
      </div>
    </div>
  );
}
