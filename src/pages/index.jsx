import Home from 'templates/Home'

import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const Index = (props) => <Home {...props} />

// getStaticProps => gera os estáticos em build time (tal como no gatsby)
// getServerSideProps => gera via SSR a cada request (nunca vai para o bundle do client, o bundle.js acaba por ficar menor)
// getInitialProps => gera via SSR a cada request (vai para o client, faz hydrate do lado do client depois do 1 request)
export const getServerSideProps = async () => ({
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
