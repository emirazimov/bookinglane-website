import styled from "styled-components"
// import { css } from "styled-components"

export const WhyBookingLaneWithBackground = styled.div`
  display: flex;
  flex-direction: column;

  /* padding: 70px 0 0 90px; */
`
export const WhyBookingLaneContainerWithMargin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1520px;
  margin: 0px auto;
  padding-bottom: 30px;
  @media (max-width: 1607px) {
    margin: 0px 45px;
  }
  @media (max-width: 620px) {
    margin: 0px 16px;
  }
`

export const Title = styled.span`
  font-weight: 700;
  font-size: 34px;
  color: black;

  margin: 70px 0 40px 0;
  @media (max-width: 990px) {
    margin: 40px 0 40px 0;
  }
  @media (max-width: 1024px) {
    font-size: 20px;
  }
`
export const WhyBookingLaneContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1339px) {
    flex-direction: column;
  }
`
export const TextBlock = styled.div``
export const Text = styled.p`
  font-weight: 400;
  font-size: calc(20px + (7 + 7 * 0.7) * ((40vw - 620px) / 1520));
  line-height: 32px;
  margin-bottom: 40px;
  /* opacity: 0; */
  /* visibility: hidden; */
  @media (max-width: 541px) {
    line-height: 26px;
  }
`
export const ImageBlock = styled.div``
export const Img = styled.img`
  @media (max-width: 1339px) {
    width: 100%;
  }
`
export const WhyBookingLaneItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex-basis: 23.5%;
  height: 370px;
  margin-bottom: 100px;
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.08);
`

export const WhyBookingLaneTitle = styled.span`
  color: black;
  font-size: 23px;
  font-weight: 500;
  margin-top: 20px;
`
export const WhyBookingLaneText = styled.p`
  color: black;
  font-size: 16px;
  font-weight: 300;
  line-height: 24px;
  padding: 0 30px 45px 30px;
`
