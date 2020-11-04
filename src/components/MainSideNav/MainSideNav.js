import React, {useState, useCallback, useEffect} from "react";
import {Icon, Nav, Container, Content} from "rsuite";

import {
    MainContainer,
    MainSidebar,
    MainSideNavDiv,
    SideNavBody,
    DropdownItem,
    MainDashboardHeader,
    MainIconDiv,
    CarouselDivMine,
    SidenavHeader,
    SideHeaderText,
    DropDownDiv,
    NavItemMain,
    MainSideNavLangPicker,
    MainSideNavLangPickerItem,
    CustomUserDiv,
    CarouselDivItem,
    MainLightDiv,
} from "./MainSideNavStyle";

import User from "../../images/user.jpg";

import MainLogo from "../Icons/MainLogo";
// import Pound from "../Icons/Pound";
import SunLight from "../Icons/SunLight";
import SettingTwo from "../Icons/SettingTwo";
// import OrganizationsLight from "../Icons/OrganizationsLight";
import MainSideButton from "../MainSideButton/MainSideButton";
import {useTranslation} from "react-i18next";
import i18n from "../../i18next/i18next";
// import NextArrow from "../Icons/NextArrow";
import MainBack from "../../images/backDrop.jpg";

import {useHistory} from "react-router-dom";

const headerStyles = {
    padding: 18,
    fontSize: 16,
    // width: '100%',
    // marginLeft: '40px',
    height: 66,
    color: "#fff",
    whiteSpace: "nowrap",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
};

const MainSideNav = ({children, pageName}) => {
    const [expand, setExpand] = useState(true);
    const history = useHistory();
    // const [minutes, setMinutes] = useState(3);
    // const [seconds, setSeconds] = useState(0);

    const {t, i18} = useTranslation();

    let settings = {
        slidesToShow: 4,
        duration: 400,
        autoplay: true,
        pauseOnHover: true,
        // centerMode: true,
        // centerPadding: 90,
        shift: 10,
        wheel: true,
        prevArrow: null,
        nextArrow: null,
        // wheelScroll: 1,
        autoplaySpeed: 5000,
        // adaptiveHeight: true,
    };

    const handleToggle = () => {
        setExpand(!expand);
    };

    const handleClick = (lang) => {
        i18n.changeLanguage(lang);
    };
    const handleRedirectHome = () => {
        history.push("/main");
    };

    const handleRedirect = () => {
        history.push("/orders");
    };

    const handleRedirectOrganization = useCallback(() => {
        history.push("/organizations");
    }, [history]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        history.push("/login");
        // document.location.reload();
    };
    // <MainBackDiv src={MainBack} alt="" />

    // useEffect(() => {
    //   setInterval(() => {
    //     setSeconds((seconds) => seconds - 1);
    //   }, 3000);
    // }, []);

    return (
        <MainContainer
            // imgUrl={"../../images/backDrop.png"}
            style={{backgroundImage: `url(${MainBack})`}}
        >
            <MainSidebar width={expand ? 260 : 56} collapsible>
                <SidenavHeader>
                    <div style={headerStyles}>
                        <MainLogo
                            width={22}
                            height={32}
                            style={{verticalAlign: 0, marginTop: "10px"}}
                        />
                        {expand && <SideHeaderText>ORIENTSYSTEM</SideHeaderText>}
                    </div>
                </SidenavHeader>

                <MainSideNavDiv
                    expanded={expand}
                    defaultOpenKeys={["3"]}
                    appearance="subtle"
                >
                    {expand && (
                        <>
                            <hr style={{width: "90%", margin: "10px auto"}}/>
                            <CustomUserDiv>
                                <img src={User} alt="user"/>
                                <p>Муйдинов Азизбек</p>
                            </CustomUserDiv>
                            <hr style={{width: "90%", margin: "10px auto"}}/>
                            <MainSideNavLangPicker>
                                <MainSideNavLangPickerItem onClick={() => handleClick("ru")}>
                                    Ru
                                </MainSideNavLangPickerItem>
                                <MainSideNavLangPickerItem onClick={() => handleClick("uz")}>
                                    Uz
                                </MainSideNavLangPickerItem>
                                <MainSideNavLangPickerItem onClick={() => handleClick("en")}>
                                    En
                                </MainSideNavLangPickerItem>
                            </MainSideNavLangPicker>
                        </>
                    )}
                    <SideNavBody>
                        <Nav>
                            <NavItemMain
                                onClick={handleRedirectHome}
                                eventKey="1"
                                icon={<Icon icon="user"/>}
                            >
                                {t("Пользователи.1")}
                            </NavItemMain>
                            <NavItemMain
                                onClick={handleRedirectOrganization}
                                eventKey="2"
                                icon={<Icon icon="project"/>}
                            >
                                {t("Организации.1")}
                            </NavItemMain>
                            <DropDownDiv
                                eventKey="3"
                                trigger="click"
                                title="Advanced"
                                icon={<Icon icon="magic"/>}
                                placement="rightStart"
                            >
                                <DropdownItem onClick={handleRedirect} eventKey="3-1">
                                    Orders
                                </DropdownItem>
                                <DropdownItem eventKey="3-2">Devices</DropdownItem>
                                <DropdownItem eventKey="3-3">Brand</DropdownItem>
                                <DropdownItem eventKey="3-4">Loyalty</DropdownItem>
                                <DropdownItem eventKey="3-5">Visit Depth</DropdownItem>
                                <DropdownItem onClick={handleLogout} eventKey="3-6">
                                    Exit
                                </DropdownItem>
                            </DropDownDiv>
                        </Nav>
                    </SideNavBody>
                </MainSideNavDiv>
            </MainSidebar>

            <Container>

                <MainDashboardHeader
                    style={{display: "flex", flexDirection: "row",}}
                >
                    <MainIconDiv onClick={handleToggle}>
                        <Icon
                            icon={expand ? "angle-double-left" : "angle-double-right"}
                        />
                    </MainIconDiv>
                    <CarouselDivMine {...settings} imgUrl="../../images/next.png">
                        <CarouselDivItem>
                            <Icon icon="cny"/>
                            <p style={{fontSize: "12px"}}> 1 JPY = 98.16 сум</p>
                        </CarouselDivItem>
                        <CarouselDivItem>
                            <Icon icon="eur"/>
                            <p style={{fontSize: "12px"}}>1 EUR = 12110.87 сум</p>
                        </CarouselDivItem>
                        <CarouselDivItem>
                            <Icon icon="gbp"/>
                            <p style={{fontSize: "12px"}}> 1 GBP = 13370.24 сум</p>
                        </CarouselDivItem>
                        <CarouselDivItem>
                            <Icon icon="cny"/>
                            <p style={{fontSize: "12px"}}> 1 JPY = 98.16 сум</p>
                        </CarouselDivItem>
                        <CarouselDivItem>
                            <Icon icon="eur"/>
                            <p style={{fontSize: "12px"}}>1 EUR = 12110.87 сум</p>
                        </CarouselDivItem>
                        <CarouselDivItem>
                            <Icon icon="gbp"/>
                            <p style={{fontSize: "12px"}}> 1 GBP = 13370.24 сум</p>
                        </CarouselDivItem>
                        <CarouselDivItem>
                            <Icon icon="cny"/>
                            <p style={{fontSize: "12px"}}> 1 JPY = 98.16 сум</p>
                        </CarouselDivItem>
                    </CarouselDivMine>
                    <MainLightDiv>
                        <SunLight/>
                    </MainLightDiv>
                    <MainSideButton
                        MLeft="18px"
                        nameButton={t("Войти в чат.1")}
                        boxColor="#DB2727"
                        bgColor="#DB2727"
                    />
                    <MainSideButton
                        MLeft="25px"
                        nameButton={t("НДС калькулятор.1")}
                        boxColor="#8BA428"
                        bgColor="#8BA428"
                    />
                    <SettingTwo position="fixed" left="90%" MLeft="75px" width="30" height="30"/>
                </MainDashboardHeader>
                <Content
                    style={{width: "99%", height: "95%", paddingLeft: '20px'}}
                >
                    {children}
                </Content>
            </Container>
        </MainContainer>
    );
};

export default React.memo(MainSideNav);
