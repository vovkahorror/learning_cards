import styled, { css } from 'styled-components'

import { theme } from 'styles/theme'

type SuperButtonPropsType = {
  variant?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning'
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

const variants = {
  ['primary']: css`
    background-color: ${theme.btn.primary.bg};
    border-color: ${theme.btn.primary.borderColor};
    color: ${theme.btn.primary.color};
    box-shadow: ${theme.btn.primary.boxShadow};
  `,
  ['secondary']: theme.colors.secondary,
  ['success']: theme.colors.success,
  ['danger']: theme.colors.danger,
  ['warning']: theme.colors.warning,
}

const sizes = {
  small: css`
    font-size: 13px;
    padding: 4px 10px;
  `,
  medium: css`
    font-size: 14px;
    padding: 8px 16px;
  `,
  large: css`
    font-size: 15px;
    padding: 10px 22px;
  `,
}

// export const ButtonStyled = (props: any) => {
//     props.type === 'link' && return <Link />
// }

export const Button = styled.button<SuperButtonPropsType>`
  ${p => variants[p.variant || 'primary']};
  border-width: 1px;
  border-style: solid;
  //sizes
  ${p => sizes[p.size || 'medium']}
  font-weight: 500;
  margin: 0;

  width: ${props => (props.fullWidth ? '100%' : 'auto')};

  color: white;
  border-radius: 30px;
  cursor: pointer;
  outline: none;
  text-decoration: none;
`
