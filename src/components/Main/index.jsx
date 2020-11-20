import * as S from './styles'

const Main = ({
  title = 'Advanced React',
  description = 'JavaScript, ReactJS, Next.js and Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Atom image and course description side-by-side."
    />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="A developer in front of his computer."
    />
  </S.Wrapper>
)

export default Main
