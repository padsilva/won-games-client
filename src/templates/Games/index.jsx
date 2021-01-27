import PropTypes from 'prop-types'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'

import Base from 'templates/Base'
import ExploreSidebar from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'

import * as S from './styles'

const GamesTemplate = ({ games = [], filterItems }) => {
  const handleFilter = () => {}

  const handleShowMore = () => {}

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.slug} {...item} />
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
  games: PropTypes.array,
  filterItems: PropTypes.array.isRequired
}

export default GamesTemplate
