import Home from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const Index = (props) => <Home {...props} />

// getStaticProps => gera os estáticos em build time
// getServerSideProps => gera via SSR a cada request
// getInitialProps => gera via SSR a cada request
export const getServerSideProps = () => ({
  props: {
    banners: bannersMock,
    newGames: gamesMock,
    mostPopularHighlight: highlightMock,
    mostPopularGames: gamesMock,
    upcomingGames: gamesMock,
    upcomingHighlight: highlightMock,
    upcomingMoreGames: gamesMock,
    freeHighlight: highlightMock,
    freeGames: gamesMock
  }
})

export default Index
