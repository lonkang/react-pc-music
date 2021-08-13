import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid #c10d0c;
  padding: 0 10px 4px 34px;
  background-position: -225px -156px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keyword {
      display: flex;

      .item {
        &::after {
          content: '|';
          margin: 0 10px;
          color: #999;
        }
        &:last-of-type:after {
          content: ' ';
          margin: 0;
        }
      }
    }
  }

  .right {
    display: flex;
    align-items: center;
    cursor: pointer;
    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      background-position: 0 -240px;
    }
  }
`