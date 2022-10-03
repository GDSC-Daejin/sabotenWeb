import tw from "twin.macro";
import SliderCard from "./Card/SliderCard";

const Box = tw.div`
    items-center
    md:visible
    invisible
    my-10
    xl:mx-28
    mx-5
`

const MainBottom = () => {
    return (
        <div>
            <Box>
                <SliderCard/>
            </Box>
        </div>
    )
}
export default MainBottom