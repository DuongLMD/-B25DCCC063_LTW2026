import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { LEVELS, LETTERS } from '../data';
import { NavBar } from '../components/NavBar';

export const QuestionDetail = ({ questions }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const q = questions.find(item => item.id === Number(id));

  return (
    <div>
      <NavBar />
      {!q ? (
        <div><h2>Không tìm thấy câu hỏi</h2><button onClick={() => navigate(-1)}>Quay lại</button></div>
      ) : (
        <div>
          <h2>Câu hỏi số {q.id} ({LEVELS[q.level]})</h2>
          <p><strong>{q.question}</strong></p>
          <ul>
            {q.options.map((opt, idx) => (
              <li key={idx}>
                {LETTERS[idx]}. {opt} {idx === q.answer && <strong>(Đáp án đúng)</strong>}
              </li>
            ))}
          </ul>
          <button onClick={() => navigate(-1)}>Quay lại</button>
        </div>
      )}
    </div>
  );
};