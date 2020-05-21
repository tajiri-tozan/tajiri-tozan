import React from "react";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
//import styled from "styled-components/macro";

type Props = {
  animation: Animation.SlideInLeft | Animation.SlideInRight;
  title: string;
  description: string;
  imgSrc: string;
};

export default function (props: Props) {
  const { animation, title, description, imgSrc } = props;

  return (
    <Reveal animation={animation}>
      <h1>{title}</h1>
      <div>{description}</div>
      <img src={imgSrc} alt={title} width="50%" />
    </Reveal>
  );
}
