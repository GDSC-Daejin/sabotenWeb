import tw from "twin.macro";
import { FaAlignJustify } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import {useEffect, useState} from "react";
import {FaSistrix} from "react-icons/fa";
import styled from "styled-components";

const StyledNav = tw.nav`
  w-full
  fixed
  xl:static
  top-0
  left-0
  z-10
  block
`
const StyledDiv = tw.div`
    xl:flex 
    bg-white
    w-full
    h-[80px]
    top-0
    absolute
    xl:relative
    items-center
    justify-around
    container
`
const InnerDiv = tw.div`
    cursor-pointer 
    flex 
    items-center
    ml-2
    md:w-[170px]
    w-[150px]
    mt-5
    md:mt-2
`

const Ul = styled.ul((props)=>[
    tw`
        lg:flex
        lg:items-center
        xl:static
        xl:w-auto
        xl:pl-0 pl-9
        bg-white
        w-full
        transition-all 
        duration-500 
        ease-in
        z-10
        pb-4
        lg:pb-0
    `,
    props.open && tw`hidden`
])

const A = styled.a((props)=>[
    tw`text-[20px] font-bold p-2`,
    props.locationState === 'main' && props.name==='메인' && tw`md:text-saboten md:border-b-4 md:border-saboten`,
    props.locationState==='category'&& props.name==='카테고리' && tw`md:text-saboten md:border-b-4 md:border-saboten`,
    props.locationState === 'board' && props.name==='게시판' && tw`md:text-saboten md:border-b-4 md:border-saboten`,
    props.locationState==='mypage'&& props.name==='마이페이지' && tw`md:text-saboten md:border-b-4 md:border-saboten`
])

const Li = tw.li`
    xl:my-0
    mr-5 my-7
    xl:mx-6
    relative
    xl:left--28
    right-0
    duration-200
    md:hover:text-saboten
`

const LiInput = tw.li`
    w-80
    items-center
    lg:hidden
    xl:flex
    md:flex
    flex
`
const I = tw.i`
    text-center
    relative
    right-10
    hover:text-saboten

`
const Input = tw.input`
    bg-gray-200 
    text-gray-900 text-sm 
    rounded-lg focus:outline-none
    block w-5/6 p-2.5 
    md:w-full
    hover:border-2 
    hover:border-saboten
`

const Icon = tw.div`
    text-3xl
    absolute
    right-8 top-6 
    cursor-pointer
    lg:hidden
`


function Navbar(){
    let Links = [
            {name:"메인", link:"/"},
            {name:"카테고리", link:"/category"},
            {name:"게시판", link:"/board"},
            {name:"마이페이지", link:"/mypage"},
        ]
    let [open,setOpen] = useState(true);
    const locationURL = useLocation();
    let [locationState,setLocationState] = useState('main');

    useEffect(() => {
        if(locationURL !== undefined && locationURL !== null){
            const locationIndex = locationURL.pathname.indexOf('/')+1
            if(locationURL.pathname[locationIndex]==='c') setLocationState('category')
            else if(locationURL.pathname[locationIndex]==='b') setLocationState('board')
            else if(locationURL.pathname[locationIndex+1]==='y') setLocationState('mypage')
            else if(locationURL.pathname[locationIndex+1]==='a') setLocationState('main')
        }
    }, [locationState, locationURL])

    return(
     <StyledNav>
         <StyledDiv>
            <InnerDiv>
                <span><img src="/icon.png" alt="로고"/></span>
                <span><img src="/logo.png" alt="로고"/></span>
            </InnerDiv>
             <Icon onClick={()=>{setOpen(!open)}}><FaAlignJustify/></Icon>
             <Ul open={open}>
                 {
                     Links.map((link)=>(
                             <Li key={link.name} >
                                 <A href={link.link} name={link.name} locationState={locationState}>{link.name}</A>
                             </Li>
                     ))
                 }
                 <LiInput>
                         <Input type="text" id="first_name" placeholder="제목이나 설명으로 검색하기"/>
                         <I><FaSistrix/></I>
                 </LiInput>
             </Ul>

         </StyledDiv>
     </StyledNav>
    )
}
export default Navbar