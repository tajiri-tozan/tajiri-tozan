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
  padding: 50px;
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
        title={"陣馬山"}
        description="2014/12/07"
        imgSrc="/images/20141207-jinbasan.jpg"
      />
      <Yama
        animation={Animation.SlideInRight}
        title={"槍ヶ岳"}
        description="2015/09/20"
        imgSrc="/images/yarigadake.jpg"
      />
      <Yama
        animation={Animation.SlideInLeft}
        title={"八ヶ岳"}
        description="2018/07/21"
        imgSrc="/images/20180721-yatsugatake.jpg"
      />
    </Contents>
  );
}
