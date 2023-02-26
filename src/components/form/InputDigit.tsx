import { S } from '../../styles/Input';
import Input from '../common/Input';
import React from 'react';
import { DigitType } from '../../context/CardContext';

interface IProps {
  onChange: (e: React.ChangeEvent) => void;
  value: DigitType;
}

const InputDigit = ({ onChange, value }: IProps) => {
  return (
    <S.InputContainer>
      <S.InputTitle>카드 번호</S.InputTitle>
      <S.InputBox>
        <Input
          id={'digit1'}
          name={'digit1'}
          onChange={onChange}
          type={'text'}
          value={value.digit1}
          maxLength={4}
        />
        {String(value.digit1)?.length === 4 && <S.Hyphen>-</S.Hyphen>}
        <Input
          id={'digit2'}
          name={'digit2'}
          onChange={onChange}
          type={'text'}
          value={value.digit2}
          maxLength={4}
        />
        {String(value.digit2)?.length === 4 && <S.Hyphen>-</S.Hyphen>}
        <Input
          id={'digit3'}
          name={'digit3'}
          onChange={onChange}
          type={'password'}
          value={value.digit3}
          maxLength={4}
        />
        {String(value.digit3)?.length === 4 && <S.Hyphen>-</S.Hyphen>}
        <Input
          id={'digit4'}
          name={'digit4'}
          onChange={onChange}
          type={'password'}
          value={value.digit4}
          maxLength={4}
        />
      </S.InputBox>
    </S.InputContainer>
  );
};

export default InputDigit;
