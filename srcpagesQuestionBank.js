import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LEVELS } from '../data';
import { NavBar } from '../components/NavBar';

export const QuestionBank = ({ questions }) => {
  const [level, setLevel] = useState('All');
  const [search, setSearch] = useState('');
  const filtered = questions.filter(q => (level === 'All' || q.level === Number(level)) && q.question.toLowerCase().includes(search.toLowerCase()));

  return (
    <div>
      <NavBar />
      <h2>Ngân hàng câu hỏi</h2>
      <div>
        <label>Mức độ: </label>
        <select value={level} onChange={(e) => setLevel(e.target.value)}>
          <option value="All">Tất cả</option><option value="1">Dễ</option><option value="2">Trung bình</option><option value="3">Khó</option>
        </select>
        <label> Tìm kiếm: </label>
        <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <p><strong>Có {filtered.length} câu hỏi</strong></p>
      <ul>
        {filtered.map((q, i) => (
          <li key={q.id}>
            {i + 1}. [{LEVELS[q.level]}] <Link to={`/questions/${q.id}`}>{q.question}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};