import { S } from '../../styles/Input';
import Input from '../common/Input';
import React, { RefObject } from 'react';
import { useCardValidation } from '../../context/CardContext';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: string;
  refs: RefObject<HTMLInputElement>;
}

const InputExpire = ({ onChange, value, refs }: IProps) => {
  const { validExpire } = useCardValidation();
  return (
    <S.InputContainer>
      <S.InputTitle>만료일</S.InputTitle>
      <S.InputBox className={'w-50'}>
        <Input
          id="expire"
          name="expire"
          onChange={onChange}
          type={'text'}
          placeholder={'MM / YY'}
          value={value}
          ref={refs}
        />
      </S.InputBox>
      {!validExpire && value && <S.Error>유효한 날짜를 입력해 주세요.</S.Error>}
    </S.InputContainer>
  );
};

export default InputExpire;
