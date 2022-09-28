import tw from "twin.macro";

const Box = tw.div`
    items-center
    border-2
    border-gray-300
    rounded-[30px]
    text-2xl
    md:visible
    invisible
    p-5
    mt-5
    h-72
    bg-gray-100
    mx-28
`

function MainMiddle(){
    return (
        <div>
            <Box>

            </Box>
        </div>
    )
}
export default MainMiddle