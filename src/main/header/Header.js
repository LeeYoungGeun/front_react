import styled from "styled-components";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { MainHeader } from "../Main";

const MainHeaderLogoArea = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: hotpink;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
`;

const MainHeaderSearchArea = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  padding-right: 40px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  outline: none;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const SearchIcon = styled(FaSearch)`
  position: relative;
  left: -35px;
  color: white;
  cursor: pointer;
`;

const SearchBar = () => {
  return (
      <>
        <SearchInput type="text" placeholder="검색어를 입력해 주세요." />
        <Link to="/search"><SearchIcon /></Link>
      </>
  );
};

const MainHeaderButtonArea = styled.div`
  width: 20%;
  display: flex;
  margin-left: 50px;
  align-items: center;
`;

const Button = styled.button`
  background-color: rgba(255, 255, 255, 0.15);
  color: white;
  border: none;
  padding: 8px 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease;
  
  &:hover {
    background-color: transparent;
    color: hotpink;
    border-color: white;
  }

  &:focus {
    outline: none;
  }


  @media (max-width: 768px) {
    font-size: 14px;
    padding: 6px 10px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
    padding: 4px 8px;
  }

  /* 버튼이 줄바꿈되지 않도록 설정 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/');
    alert("로그아웃 되었습니다.");
  };

  return (
    <MainHeader>
      <MainHeaderLogoArea>
        <Link to="/">TFT</Link>
      </MainHeaderLogoArea>
      <MainHeaderSearchArea>
        <SearchBar></SearchBar>
      </MainHeaderSearchArea>
      <MainHeaderButtonArea>
            <Button onClick={handleLogout}>로그아웃</Button> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/login"><Button>로그인</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;
            <Link to="/signup"><Button>회원가입</Button></Link> &nbsp;&nbsp;&nbsp;&nbsp;
      </MainHeaderButtonArea>
    </MainHeader>
  );
}

export default Header;