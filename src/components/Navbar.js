import tw from "twin.macro";
import { FaAlignJustify } from "react-icons/fa";
import {useState} from "react";

const StyledNav = tw.nav`
  shadow-md
  w-full
  fixed
  top-0
  left-0
`
const StyledDiv = tw.div`
    md:flex 
    bg-white
    py-4
    items-center
    justify-around
`
const InnerDiv = tw.div`
    cursor-pointer 
    flex 
    items-center
    ml-2
`
const Ul = tw.ul`
    md:flex
    md:items-center
    absolute
    md:static
    bg-white
    md:z-auto z-[-1]
    left-0
    w-full
    md:w-auto
    md:pl-0 pl-9
    transition-all 
    duration-500 
    ease-in
`

const Li = tw.li`
    md:ml-8
    md:my-0
    mr-5 my-7
    font-bold
    text-xl
    hover:text-saboten
    duration-200
`
const LiInput = tw.li(Li)`
    w-80
`
const Input = tw.input`
    bg-gray-200 
    text-gray-900 text-sm 
    rounded-lg focus:outline-none
    block w-3/4 p-2.5 
    md:w-full
    hover:border-2 hover:border-saboten
`

const Icon = tw.div`
 text-3xl
 absolute
 right-8 top-6 
 cursor-pointer
 md:hidden
`


function Navbar(){
    let Links = [
            {name:"메인", link:"/"},
            {name:"카테고리", link:"/category"},
            {name:"게시판", link:"/board"},
            {name:"마이페이지", link:"/mypage"},
        ]
    let [open,setOpen] = useState(false);

    return(
     <StyledNav>
         <StyledDiv>
            <InnerDiv>
                <span><img src="/icon.png" alt="로고"/></span>
                <span><img src="/logo.png" alt="로고"/></span>
            </InnerDiv>
             <Icon onClick={()=>setOpen(!open)}><FaAlignJustify/></Icon>
             <Ul open={open}>
                 {
                     Links.map((link)=>(
                         <Li key={link.name}>
                             <a href={link.link}>{link.name}</a>
                         </Li>
                     ))
                 }
                 <LiInput>
                     <Input type="text" id="first_name" placeholder="제목이나 설명으로 검색하기"/>
                 </LiInput>
             </Ul>

         </StyledDiv>
     </StyledNav>
    )
}
export default Navbar