import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifiers = {
  lineLeft: (theme) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors.secondary};
  `,

  lineBottom: (theme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      bottom: -0.5rem;
      content: '';
      width: 5rem;
      border-bottom: 0.5rem solid ${theme.colors.primary};
    }
  `
}

export const Wrapper = styled.h2`
  ${({ theme, color, lineLeft, lineBottom }) => css`
    color: ${theme.colors[color]};
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
    ${lineLeft && wrapperModifiers.lineLeft(theme)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
  `}
`
