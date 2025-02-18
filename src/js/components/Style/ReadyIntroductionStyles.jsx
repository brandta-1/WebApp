import styled from 'styled-components';

export const Dot = styled('div')`
  padding-top: 1px;
  text-align: center;
  vertical-align: top;
`;

export const OuterWrapper = styled('div')(({ theme }) => (`
  display: flex;
  justify-content: center;
  padding: 0 !important;
  ${theme.breakpoints.down('lg')} {
    min-width: 450px;
  }
  ${theme.breakpoints.down('sm')} {
    min-width: 0;
    min-width: unset;
  }
`));

export const InnerWrapper = styled('div')`
  width: 100%;
`;

export const IntroHeader = styled('div', {
  shouldForwardProp: (prop) => !['titleCentered', 'titleLarge'].includes(prop),
})(({ titleCentered, titleLarge, theme }) => (`
  color: #2e3c5d;
  padding-top: 0;
  padding-bottom: 0;
  ${titleLarge ? 'font-size: 26px;' : 'font-size: 18px;'}
  font-weight: 800;
  margin: 0 !important;
  ${titleCentered ? 'text-align: center;' : ''}
  ${theme.breakpoints.down('xs')} {
    font-size: 15px;
  }
`));

export const ListMaxWidth = styled('div')`
  max-width: 450px;
  width: 100%;
`;

export const ListTitleRow = styled('div')`
  cursor: pointer;
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
  padding-top: 8px;
`;

export const ListRow = styled('div')`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-start;
`;

export const ListWrapper = styled('div')`
  display: flex;
  justify-content: center;
`;

export const ShowMoreWrapper = styled('div')`
  margin-left: 20px;
`;

export const StepNumber = styled('div')(({ theme }) => (`
  background: ${theme.colors.brandBlue};
  border-radius: 4px;
  color: white;
  font-size: 15px;
  width: 20px;
  height: 20px;
  padding-top: 0;
`));

export const StepTitle = styled('div')`
  font-size: 16px;
  font-weight: 600;
  padding: 0 8px;
  text-align: left;
  vertical-align: top;
`;

export const StepText = styled('div')`
  color: #555;
  font-size: 15px;
  font-weight: 200;
  padding: 0 8px;
  text-align: left;
  vertical-align: top;
`;

export const StepNumberPlaceholder = styled('div')`
  width: 20px;
  height: 20px;
`;
