import tw from "twin.macro";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";

const MainDiv = tw.div`
    text-center
    grid
    grid-cols-1
    xl:grid-cols-3
    w-11/12
    ml-5
    lg:w-auto
    xl:mx-28
    mx-5
`
const FirstBox = tw.div`
    col-span-2
    mr-5
    // md:
    
`
const SecBox = tw.div`
    ml-10
    items-center
    border-2
    border-gray-300
    rounded-[30px]
    text-2xl
    font-semibold
    xl:visible
    invisible
    p-5
    bg-gray-100
`
const Img = tw.img`
    rounded-[30px]
`
const Button = tw.button`
    border-2
    rounded-lg
    block
    items-center
    justify-center
    mx-auto
    my-10
    p-3
`
const KaKaoBtn=tw(Button)`
    // bg-[url('/public/btn/kakao_login_medium_wide.png')]
`
const GoogleBtn=tw(Button)`

`
function MainTop(){
    return (
        <div>
            <MainDiv>
                <FirstBox>
                    <Swiper
                        slidesPerView={1} //한번에 보일 요소수
                        spaceBetween={30} //슬라이드 양옆마진
                        loop={true}
                        pagination={{
                            clickable: true,
                        }}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                        autoplay={true}
                    >
                        <SwiperSlide><Img src="/banner/banner1.png" alt="배너"/></SwiperSlide>
                        <SwiperSlide><Img src="/banner/banner2.png" alt="배너"/></SwiperSlide>
                        <SwiperSlide><Img src="/banner/banner3.png" alt="배너"/></SwiperSlide>
                    </Swiper>
                </FirstBox>
                <SecBox>
                    {/*<h3>로그인 후 진행해 주세요</h3>*/}
                    {/*<KaKaoBtn>카카오로 시작하기</KaKaoBtn>*/}
                    {/*<Button>구글로 시작하기</Button>*/}
                </SecBox>
            </MainDiv>
        </div>
    )
}
export default MainTop