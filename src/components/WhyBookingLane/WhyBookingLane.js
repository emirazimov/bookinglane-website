import whyBookinglane from "../../assets/WhyBookinglane-min.png"
import React, { forwardRef, useState } from "react"
import { useSpring, animated, config } from "react-spring"
import { InView } from "react-intersection-observer"
import {
  ImageBlock,
  Img,
  Text,
  TextBlock,
  Title,
  WhyBookingLaneContainer,
  WhyBookingLaneContainerWithMargin,
  WhyBookingLaneWithBackground,
} from "./WhyBookingLane.style"

const WhyBookingLane = forwardRef(({ ref }) => {
  const [showH1, setShowH1] = React.useState(false)
  const onInViewChange = (inview) => {
    if (!showH1 && inview) setShowH1(true)
  }
  const [flip, set] = useState(false)
  const firstText = useSpring({
    // to: {  },
    from: {
      transform: showH1 && "translateX(-200px)",
      opacity: showH1 && 0,
    },
    // reset: true,
    // opacity: showH1 && 1,
    reverse: flip,
    transform: "translateX(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })
  const secondText = useSpring({
    // to: {  },
    from: {
      transform: showH1 && "translateX(-200px)",
      opacity: showH1 && 0,
    },
    // reset: true,
    reverse: flip,
    transform: "translateX(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })
  const imgBlock = useSpring({
    // to: {  },
    from: { transform: showH1 && "translateX(200px)", opacity: showH1 && 0 },
    // reset: true,
    reverse: flip,
    transform: "translateX(0)",
    opacity: 1,
    delay: 200,
    config: config.molasses,
    // onRest: () => set(!flip),
  })

  return (
    <>
      <WhyBookingLaneWithBackground ref={ref}>
        <WhyBookingLaneContainerWithMargin>
          <Title>WHY BOOKINGLANE?</Title>

          <div>
            <WhyBookingLaneContainer>
              <TextBlock>
                <InView
                  tag="div"
                  onChange={onInViewChange}
                  threshold={1}
                  initialInView={true}
                >
                  <animated.div style={firstText}>
                    <Text>
                      The limousine and town car industry has been notoriously
                      slow to adopt technological advancements for over 15
                      years. Transportation businesses like yours are
                      continuously losing out on potential revenue as a result
                      of inefficient booking, payment and customer relationship
                      management systems. Bookinglane addresses all of these
                      issues. You can manage your business and increase your
                      earnings with a couple of clicks on your smartphone!
                    </Text>
                  </animated.div>
                </InView>
                <animated.div style={secondText}>
                  <Text>
                    We target helping small and mid-sized businesses like yours
                    to become more visible on the market, develop affiliate
                    networks and subsequently increase your earnings. You don’t
                    need to have access to a computer to manage daily business
                    anymore. Your entire business is in your smartphone. Take
                    your business with you anywhere you go!
                  </Text>
                </animated.div>
              </TextBlock>

              <animated.div style={imgBlock}>
                <ImageBlock>
                  <Img alt="Why Bookinglane" src={whyBookinglane} />
                </ImageBlock>
              </animated.div>
            </WhyBookingLaneContainer>
          </div>
        </WhyBookingLaneContainerWithMargin>
      </WhyBookingLaneWithBackground>
    </>
  )
})

export default WhyBookingLane
