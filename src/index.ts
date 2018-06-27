import redirectMap from './redirectMap'

addEventListener('fetch', (event: FetchEvent) => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request: Request) {
  let url = new URL(request.url)
  const hostname = url.hostname
  const pathname = url.pathname
  const redirectPath = redirectMap[hostname] && redirectMap[hostname][pathname]

  if (redirectPath) {
      url.pathname = redirectPath
      return Response.redirect(url.toString(), 301)
  } else {
     return fetch(request)
  }
}
