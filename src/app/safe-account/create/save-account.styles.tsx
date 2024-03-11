import { styled } from '@mui/system';

export const GridContainer = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 14px;
  justify-content: center;

  @media (min-width: 1068px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const GridButtonStyled = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 12px;
`;

export const WrapperStyled = styled('div')`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-top: 4rem;
  max-width: 1114px;

  @media (max-width: 1068px) {
    padding: 4rem 2rem 0 2rem;
  }

  & > .safe-account_main-header {
    padding: 0 0.5rem;
    margin-bottom: 0.5rem;

    @media (max-width: 1068px) {
      text-align: center;
    }
  }
`;

export const styleWalletPaper: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '7px',
};

export const StepStyled = styled('div')(
  ({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${theme.palette.base};
    border-radius: 50%;
    color: ${theme.palette.textLight};
    height: 28px;
    width: 28px;
    margin-right:${theme.spacing(3)};
`
);
