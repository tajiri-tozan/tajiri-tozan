import React from "react";
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
  font-size: 5rem;
`;

export default function () {
  return (
    <Contents>
      <Header>
        <SiteTitle>Tajiri Tozan</SiteTitle>
      </Header>
      <Yama
        title={"陣馬山"}
        description="2014/12/07"
        imgSrc="/images/20141207-jinbasan.jpg"
      />
      <Yama
        title={"槍ヶ岳"}
        description="2015/09/20"
        imgSrc="/images/20150920-yarigadake.jpg"
      />
      <Yama
        title={"八ヶ岳"}
        description="2018/07/21"
        imgSrc="/images/20180721-yatsugatake.jpg"
      />
    </Contents>
  );
}
