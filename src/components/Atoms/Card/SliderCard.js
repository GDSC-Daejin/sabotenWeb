import tw from "twin.macro";
import styled from "styled-components";

const CardWrapper = tw.div`
    flex
    flex-row
    flex-nowrap
`
const Card = tw.div`
    w-1/6
    h-[450px]
    // bg-category_love
    // bg-cover
    // overflow-hidden
    hover:mt--8
    hover:pt-0
    mt-3
    px-4
    pt-5
    mx-[2px]
    font-bold
    text-2xl
    hover:w-full
    hover:p-7
    duration-300
    ease-in-out
    cursor-pointer
    rounded-[20px]
    opacity-50
    hover:opacity-100
    hover:shadow-xl
    hover:text-3xl
    hover:text-white
`
const CardLove = tw.div(Card)`
    bg-gradient-to-r from-pink-400 to-red-400
`
const CardFood = tw.div(Card)`
    bg-gradient-to-r  from-red-400 to-yellow-500
`
const CardMbti = tw.div(Card)`
    bg-gradient-to-r  from-yellow-500 to-green-300
`
const CardWorry = tw.div(Card)`
    bg-gradient-to-r  from-green-300 to-green-500
`
const CardFashion = tw.div(Card)`
    bg-gradient-to-r  from-green-500 to-blue-400
`
const CardJob = tw.div(Card)`
    bg-gradient-to-r  from-blue-400 to-indigo-500
`
const CardFinance = tw.div(Card)`
    bg-gradient-to-r  from-indigo-500 to-purple-500
`
const CardChild = tw.div(Card)`
    bg-gradient-to-r  from-purple-500 to-blue-800
`


const SliderCard = () => {
    return (
        <CardWrapper>
            <CardLove><p>연애</p></CardLove>
            <CardFood>음식</CardFood>
            <CardMbti>MBIT</CardMbti>
            <CardWorry>고민</CardWorry>
            <CardFashion>패션</CardFashion>
            <CardJob>일/취업</CardJob>
            <CardFinance>제테크</CardFinance>
            <CardChild>육아</CardChild>
        </CardWrapper>
    )
}
export default SliderCard