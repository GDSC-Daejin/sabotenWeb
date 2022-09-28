import tw from "twin.macro";

const StyledDiv = tw.div`
    bg-gray-200
    h-40
    text-center
    bottom-0
    w-full
`
const Ul = tw.ul`
    pt-10
    
`

function Footer(){
    return (
        <footer>
            <StyledDiv>
                <Ul>
                    <li>🌵 GDSC 선인장 프로젝트</li>
                    <li>Want . Winnie . Panda . Toby . Harry . Hazel . Peony . Soopeach . Cindy</li>
                </Ul>
            </StyledDiv>
        </footer>
    )
}
export default Footer