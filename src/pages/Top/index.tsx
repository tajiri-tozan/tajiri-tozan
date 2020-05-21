import React from "react";
import { Reveal } from "react-genie";
import { Animation } from "react-genie-styled-components";
import styled from "styled-components/macro";

const Contents = styled.div`
  background: #151515 url("/images/yarigadake.jpg") no-repeat fixed center
    bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

export default function () {
  return (
    <Contents>
      <Reveal animation={Animation.FadeInUp}>
        <h1>Revealing this</h1>
        <img src="/images/yarigadake.jpg" alt="槍ヶ岳" width="50%" />
      </Reveal>
      <Reveal animation={Animation.SlideInLeft}>
        <h1>From The Left</h1>
        <img src="/images/yarigadake.jpg" alt="槍ヶ岳" width="50%" />
      </Reveal>
      <Reveal animation={Animation.SlideInRight}>
        <h1>From The Right</h1>
        <img src="/images/yarigadake.jpg" alt="槍ヶ岳" width="50%" />
      </Reveal>
      <Reveal animation={Animation.FadeIn}>
        <h1>Fade In</h1>
        <img src="/images/yarigadake.jpg" alt="槍ヶ岳" width="50%" />
      </Reveal>
    </Contents>
  );
}
