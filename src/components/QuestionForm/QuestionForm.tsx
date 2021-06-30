import React, { FormEvent, useState } from 'react';
import { FormContainer } from './style';
import { Button } from './../Button/Button';
import TextareaAutosize from 'react-textarea-autosize';

type QuestionFormProp = {
  handleSendQuestion: () => void;
  user: {
    avatar: string;
    name: string;
  };
};

export function QuestionForm({ handleSendQuestion, user }: any) {
  const [newQuestion, setNewQuestion] = useState('');

  function handleOnSubmit(event: FormEvent) {
    event.preventDefault();
    if (newQuestion.trim() === '') {
      return;
    }
    handleSendQuestion(newQuestion);
    setNewQuestion('');
  }

  return (
    <FormContainer onSubmit={handleOnSubmit}>
      <TextareaAutosize
        placeholder="O que você quer perguntar?"
        onChange={(event) => setNewQuestion(event.target.value)}
        value={newQuestion}
      />

      <div className="form-footer">
        {user ? (
          <div className="user-info">
            <img src={user.avatar} alt={user.name} />
            <span>{user.name}</span>
          </div>
        ) : (
          <span>
            Para enviar uma pergunta, <button>faça seu login</button>.
          </span>
        )}
        <Button type="submit" disabled={!user}>
          Enviar pergunta
        </Button>
      </div>
    </FormContainer>
  );
}
