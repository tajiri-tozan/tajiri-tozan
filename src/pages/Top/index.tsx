import React from "react";
import { Animation } from "react-genie-styled-components";
import styled from "styled-components/macro";
import Yama from "./Yama";

const Contents = styled.div`
  background: #151515 url("/images/yarigadake.jpg") no-repeat fixed center
    bottom;
  background-size: cover;
  color: #fff;
  text-align: center;
`;

const Header = styled.header`
  padding: 170px 30px 80px;
`;

const SiteTitle = styled.h1`
  margin: 50px 0 40px;
  font-size: 7.6rem;
`;

export default function () {
  return (
    <Contents>
      <Header>
        <SiteTitle>Tajiri Tozan</SiteTitle>
      </Header>
      <Yama
        animation={Animation.SlideInLeft}
        title={"槍ヶ岳"}
        description="槍ヶ岳です"
        imgSrc="/images/yarigadake.jpg"
      />
      <Yama
        animation={Animation.SlideInRight}
        title={"槍ヶ岳"}
        description="槍ヶ岳です"
        imgSrc="/images/yarigadake.jpg"
      />
    </Contents>
  );
}
