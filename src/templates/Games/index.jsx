import PropTypes from 'prop-types'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import ExploreSidebar from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'

import * as S from './styles'
import { useQueryGames } from 'graphql/queries/games'

const GamesTemplate = ({ filterItems }) => {
  const { data, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {}

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        <section>
          <Grid>
            {data?.games.map((game) => (
              <GameCard
                key={game.slug}
                slug={game.slug}
                title={game.name}
                developer={game.developers[0].name}
                img={`http://localhost:1337${game.cover.url}`}
                price={game.price}
              />
            ))}
          </Grid>

          <S.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <KeyboardArrowDown size={35} />
          </S.ShowMore>
        </section>
      </S.Main>
    </Base>
  )
}

GamesTemplate.propTypes = {
  filterItems: PropTypes.array.isRequired
}

export default GamesTemplate
