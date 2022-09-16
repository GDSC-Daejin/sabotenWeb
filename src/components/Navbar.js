import styled from "styled-components";
import tw from "twin.macro";

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
`
const InnerDiv = tw.div`
    cursor-pointer 
    flex 
    items-center
`

function Navbar(){
    return(
     <StyledNav>
         <StyledDiv>
            <InnerDiv>
                <span><img src="/icon.png" alt="로고"/></span>
                <span><img src="/logo.png" alt="로고"/></span>
            </InnerDiv>
         </StyledDiv>
     </StyledNav>
    )
}
export default Navbar