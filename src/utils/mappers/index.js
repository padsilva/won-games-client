export const bannerMapper = (banners) =>
  banners.map((banner) => ({
    img: `http://localhost:1337${banner.image.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button.label,
    buttonLink: banner.button.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))

export const gamesMapper = (games) =>
  games
    ? games.map((game) => ({
        id: game.id,
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover.url}`,
        price: game.price
      }))
    : []

export const highlightMapper = (highlight) =>
  highlight
    ? {
        title: highlight.title,
        subtitle: highlight.subtitle,
        backgroundImage: `http://localhost:1337${highlight.background.url}`,
        floatImage: `http://localhost:1337${highlight.floatImage.url}`,
        buttonLabel: highlight.buttonLabel,
        buttonLink: highlight.buttonLink,
        alignment: highlight.alignment
      }
    : {}
