import React from 'react'
import styled from 'styled-components'
import Intro from '../components/intro'
import Content from '../components/content'

const IntroCont = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  max-width: 100%;
  background-color: #272727;
  display: flex;
  -webkit-box-shadow: inset 0px 0px 82px 0px rgba(255, 198, 0, 0.3);
  -moz-box-shadow: inset 0px 0px 82px 0px rgba(255, 198, 0, 0.3);
  box-shadow: inset 0px 0px 82px 0px rgba(255, 198, 0, 0.3);

  /* @media (max-width: 700px) {
    -webkit-box-shadow: unset;
    -moz-box-shadow: unset;
    box-shadow: unset;
  } */
`
const ContentCont = styled.div`
  padding-top: 100vh;
  position: relative;
  max-width: 100%;
  display: flex;
  justify-content: center;
  background-color: transparent;
  z-index: 20;
`

const IndexPage = () => (
  <div>
    <IntroCont>
      <Intro />
    </IntroCont>
    <ContentCont>
      <Content />
    </ContentCont>
    {/* <IntroCont /> */}
  </div>
)

export default IndexPage
