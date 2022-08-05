import styled from "styled-components";
import { motion } from "framer-motion";
import { useRef } from "react";

const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BigBox = styled(motion.div)`
  width: 200px;
  height: 200px;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Box = styled(motion.div)`
  width: 70px;
  height: 70px;
  display: grid;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
`;

const boxVariants = {
  hover: { scale: 1.5, rotate: 90 },
  click: { scale: 1, borderRadius: "50%" },
};

function App() {
  const bigBoxRef = useRef<HTMLDivElement>(null);
  return (
    <Wrapper>
      <BigBox ref={bigBoxRef}>
        <Box
          drag
          dragSnapToOrigin
          dragElastic={0.5}
          dragConstraints={bigBoxRef}
          variants={boxVariants}
          whileHover="hover"
          whileTap="click"
        />
      </BigBox>
    </Wrapper>
  );
}

export default App;
