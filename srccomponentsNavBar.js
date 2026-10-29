import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
  const getStyle = ({ isActive }) => ({
    color: isActive ? 'red' : 'black',
    fontWeight: isActive ? 'bold' : 'normal'
  });

  return (
    <nav>
      <NavLink to="/" style={getStyle} end>Trang chủ</NavLink> |{' '}
      <NavLink to="/questions" style={getStyle}>Ngân hàng câu hỏi</NavLink> |{' '}
      <NavLink to="/history" style={getStyle}>Lịch sử</NavLink>
    </nav>
  );
};