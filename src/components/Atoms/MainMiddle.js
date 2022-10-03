import tw from "twin.macro";
import RealTimeCard from "./Card/RealTimeCard";

const Box = tw.div`
    items-center
    rounded-[30px]
    text-xl
    md:visible
    invisible
    py-7
    mt-5
    h-auto
    xl:mx-28
    mx-5
`
const Categoty = tw.div`
    font-bold
    text-2xl
`
const RealTime = tw.div`
    flex
    flex-row
    flex-nowrap
    // overflow-x-auto
`
function MainMiddle(){
    return (
        <div>
            <Box>
                <Categoty>🔥실시간 HOT</Categoty>
                <RealTime>
                    <RealTimeCard/>
                    <RealTimeCard/>
                    <RealTimeCard/>
                </RealTime>
            </Box>
        </div>
    )
}
export default MainMiddle