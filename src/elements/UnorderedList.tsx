import { css } from '@emotion/react';
import { styled } from '@mui/system';

import { COLORS, fontAvenirBold, fontAvenirRoman, shouldForwardProp } from 'src/theme';

const baseStyle = (isBold: boolean) => css`
  ${isBold ? fontAvenirBold : fontAvenirRoman};
  font-size: 16px;
  line-height: 28px;
  margin-top: 16px;
  margin-bottom: 16px;
  text-align: left;
`;

interface UnorderedListProps {
  bold?: boolean;
}

export const UnorderedList = styled('ul', { shouldForwardProp }) <UnorderedListProps>`
  ${(props) => baseStyle(props.bold || false)}
`;

export default UnorderedList;