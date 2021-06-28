import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styled from 'styled-components';
import { flexCenterStyle } from '../../styles/common';

const Container = styled.nav`
  position: fixed;
  width: 100vw;
  height: 2rem;
  top: 5%;
  z-index: 2;
  color: ${({ color }) => color};
  ${flexCenterStyle}
`;

const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 5%;
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  cursor: pointer;
  ${flexCenterStyle}

  &:hover {
    opacity: 0.6;
  }

  .name {
    margin-left: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-weight: normal;
    font-size: 14px;
    line-height: 17px;
    letter-spacing: 0.1em;
    white-space: pre-wrap;
    text-align: left;
  }
`;

const Links = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .active {
    opacity: 0.5;
  }
`;

const ActiveLink = ({ children, href }) => {
  const { pathname } = useRouter();
  return (
    <Link href={href}>
      <a className={pathname === href ? 'active' : ''}>{children}</a>
    </Link>
  );
};

const Navigation = ({ color = 'inherit' }) => (
  <Container color={color}>
    <Links>
      <ActiveLink href="/aboutme">ABOUT ME</ActiveLink>
      <span>|</span>
      <ActiveLink href="/portfolios/langsup">langsup</ActiveLink>
      <span>|</span>
      <ActiveLink href="/portfolios/music-app">Music App</ActiveLink>
      <span>|</span>
      <ActiveLink href="/portfolios/concerts">Concerts</ActiveLink>
    </Links>
    <Logo>
      <Link href="/portfolios/langsup">
        <>
          <Image
            src="/assets/logo.png"
            width={32}
            height={32}
            alt="logo"
            blurDataURL="data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
            placeholder="blur"
          />
          <div className="name">{`KIM\nSEHYUN`}</div>
        </>
      </Link>
    </Logo>
  </Container>
);

export default Navigation;
