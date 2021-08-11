import styled from "styled-components";

import baseImage from '@/assets/img/sprite_footer_01.png';
import baseImage2 from '@/assets/img/sprite_footer_02.png'
export const FooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;
  .content {
    display: flex;
    justify-content: space-between;
  }
`
export const FooterConentLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
      &::after {
        content: '|';
        margin:0 10px;
        color: #999;
      }
      &:last-of-type:after {
        content: ' ';
        margin: 0;
      }
    }
  }

  .copyright {
    span {
      margin-right: 15px;
    }
  }
`
export const FooterRight = styled.ul`
  display: flex;
  align-items: center;
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${baseImage2});
      background-size: 110px 450px;
    }

    :nth-child(1) .link {
      background-position: -60px -101px;
    }
    :nth-child(2) .link {
      background-position: 0 0;
    }
    :nth-child(2) .link {
      background-position: -60px -50px;
    }
    :nth-child(2) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${baseImage});
      background-size: 180px 100px;
    }

    :nth-child(1) .title {
      background-position: -1px -90px;
    }
    :nth-child(2) .title {
      background-position: 0 0;
      margin-top: 7px;
    }
    :nth-child(3) .title {
      background-position: 0 -54px;
      margin-top: 6px;
    }

    :nth-child(4) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`
