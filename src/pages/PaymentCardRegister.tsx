import React from 'react';
import Title from '../components/common/Title';
import CardRegisterForm from '../components/CardForm';
import Button from '../components/common/Button';
import { useNavigate } from 'react-router-dom';
import {
  useCardDispatch,
  useCardState,
  useCardValidation,
} from '../context/CardContext';
import CardPreview from '../components/CardPreview';
import { useCardListDispatch } from '../context/CardListContext';
import styled from '@emotion/styled';
import { ROUTE } from '../constant/route';

const S = {
  TitleWrapper: styled.div`
    margin-bottom: 30px;
  `,
  ButtonWrapper: styled.div`
    text-align: right;
  `,
};

const PaymentCardRegister = () => {
  const navigate = useNavigate();
  const cardState = useCardState();
  const dispatch = useCardDispatch();
  const { addCard } = useCardListDispatch();
  const { validAllSuccess } = useCardValidation();

  const registerCard = () => {
    addCard({
      ...cardState,
      createdDate: Date.now(),
    });

    navigate(ROUTE.COMPLETE, { state: { isComplete: true } });
  };
  const navigateHome = () => {
    const confirmRes = confirm('카드 등록을 취소하시겠습니까?');
    if (confirmRes) {
      navigate(ROUTE.HOME);
      dispatch({ type: 'INIT' });
    }
  };

  return (
    <>
      <S.TitleWrapper>
        <Title text="카드 추가" onClick={navigateHome} isArrow={true} />
      </S.TitleWrapper>

      <CardPreview {...cardState} />

      <CardRegisterForm />

      <S.ButtonWrapper>
        <Button
          text="다음"
          onClick={registerCard}
          disabled={!validAllSuccess}
        />
      </S.ButtonWrapper>
    </>
  );
};

export default PaymentCardRegister;
