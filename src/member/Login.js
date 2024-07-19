import React, { useState } from "react";
import api from "../api";
import "./Login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [loginData, setLoginData] = useState({
    mid: '',
    mpw: ''
  });

  const navigate = useNavigate();

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await api.post('/api/auth/login', loginData);
      console.log(response.data);

      // 로그인 성공 시 리디렉션
      navigate('/');
      alert("로그인에 성공하셨습니다.");
      console.log('로그인 성공');
    } catch (error) {
      console.error('로그인 실패:', error);
      alert("아이디 또는 비밀번호가 다릅니다.");
    }
  };

  return (
    <div>
      <div className="login-container">
        <form className="login-form" onSubmit={handleLogin}>
          <h2>로그인</h2>
          <input
            name="mid"
            value={loginData.mid}
            onChange={handleLoginChange}
            placeholder="아이디"
          />
          <input
            name="mpw"
            type="password"
            value={loginData.mpw}
            onChange={handleLoginChange}
            placeholder="비밀번호"
          />
          <button type="submit">로그인</button>
          <Link to="/SignUp"><p>회원가입</p></Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
