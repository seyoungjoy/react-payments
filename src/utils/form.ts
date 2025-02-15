import { SLASH } from '../constant';
import { CardCompanyType } from '../components/modal/ModalSelectCompany';
import { COMPANY_DATA } from '../constant/company';
import { COLOR } from '../constant/color';

export const maxLengthCheck = (value: string, max: number) => {
  return value.slice(0, max);
};

export const validateExpire = (digit: string) => {
  const value = digit.replace(/\D+/g, '');
  return insertSlash(value, value.length);
};

const insertSlash = (value: string, length: number) => {
  const DIGIT_BEFORE_SLASH_LENGTH = 3;
  const DIGIT_AFTER_SLASH_LENGTH = 5;

  let result = '';
  if (length < DIGIT_BEFORE_SLASH_LENGTH) result = value;
  else if (length < DIGIT_AFTER_SLASH_LENGTH) {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2);
  } else {
    result += value.substring(0, 2);
    result += SLASH;
    result += value.substring(2, 4);
  }

  return result;
};

export const computeCompany = (digit: string): CardCompanyType => {
  // 카드숫자 첫번째 자리로 회사별 카드 추정
  const firstNum = digit[0];
  switch (firstNum) {
    case '1':
      return { ...COMPANY_DATA.RED_CARD };
    case '2':
      return { ...COMPANY_DATA.BLUE_CARD };
    case '3':
      return { ...COMPANY_DATA.GREEN_CARD };
    case '4':
      return { ...COMPANY_DATA.PINK_CARD };
    case '5':
      return { ...COMPANY_DATA.ORANGE_CARD };
    case '6':
      return { ...COMPANY_DATA.GREY_CARD };
    case '7':
      return { ...COMPANY_DATA.YELLOW_CARD };
    case '8':
      return { ...COMPANY_DATA.AQUA_CARD };
    default:
      return {
        company: '',
        color: COLOR.GREY,
      };
  }
};
