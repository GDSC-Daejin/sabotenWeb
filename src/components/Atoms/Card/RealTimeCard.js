import tw from "twin.macro";
import { MdAccountCircle } from "react-icons/md";
import styled from "styled-components";

const Box = tw.div`
    items-center
    rounded-[20px]
    text-2xl
    py-8
    px-8
    w-[400px]
    // xl:w-2/6
    mt-5
    mr-10
    shadow-lg
`
const Info = tw.div`
    flex
    justify-between
    text-gray-500 
    text-lg
`
const Title = tw.div`
    text-xl
    font-bold
    mt-4
`
const User = styled.div`
  ${tw`flex m-1 items-center font-bold`},
  & > p { ${tw`mx-3`}}
`


const RealTimeCard = () => {

    const contents = "무인도에 떨어졌는데 음식 둘 중 하나만 먹어야한다면?"
    const userName = "Want"
    const uploadTime = "5분전"
    return (
        <div>
            <Box>
                <Info>
                    <User>
                        <MdAccountCircle/>
                        <p>{userName}</p>
                    </User>
                    <p>{uploadTime}</p>
                </Info>
                <Title>
                    <p>{contents}</p>
                </Title>
            </Box>
        </div>
    )
}
export default RealTimeCard