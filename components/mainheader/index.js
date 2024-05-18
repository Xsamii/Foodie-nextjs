const { default: Link } = require("next/link");
import logoImg from "@/assets/logo.png";
import style from "./main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "./MainHeaderBaclground";
import NavLink from "./HeaderLink/NavLink";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={style.header}>
        <Link href="/" className={style.logo}>
          <Image src={logoImg} alt="logo" priority />
          NextLevel Food
        </Link>
        <nav className={style.nav}>
          <ul>
            <li>
              <NavLink href="/meals">meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">community</NavLink>
            </li>
            <li>
              <NavLink href="/user/signin">Signin</NavLink>
            </li>
            <li>
              <NavLink href="/user/signup">Signup</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
