import PropTypes from 'prop-types'
import { KeyboardArrowDown } from '@styled-icons/material-outlined'
import { useRouter } from 'next/router'

import Base from 'templates/Base'
import ExploreSidebar from 'components/ExploreSidebar'
import { Grid } from 'components/Grid'
import GameCard from 'components/GameCard'

import * as S from './styles'
import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import Empty from 'components/Empty'

const GamesTemplate = ({ filterItems }) => {
  const { push, query } = useRouter()

  const { data, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort
    }
  })

  const handleFilter = (items) =>
    push({
      pathname: '/games',
      query: items
    })

  const handleShowMore = () => {
    fetchMore({ variables: { limit: 15, start: data?.games.length } })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        <section>
          {data?.games.length ? (
            <>
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
            </>
          ) : (
            <Empty
              title=":("
              description="We didn't find any games with this filter"
              hasLink
            />
          )}
        </section>
      </S.Main>
    </Base>
  )
}

GamesTemplate.propTypes = {
  filterItems: PropTypes.array.isRequired
}

export default GamesTemplate
