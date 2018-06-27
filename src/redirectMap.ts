interface IRedirectMap {
  [key: string]: IPaths
}

interface IPaths {
  [key: string]: string
}

const redirectMap: IRedirectMap = {
  'www.sites.dev.ana.dj': {
    '/2847b958-736f-48d9-999d-bc5bba76b0fd': '/tango',
    '/4e1a24b-29bd-4fc0-b0ed-ff3ed100bbe8': '/bravo'
  },
  'aaaaa-kskf.envatositesdev.com': {
    '/2847b958-736f-48d9-999d-bc5bba76b0fd': '/tango',
    '/4e1a24b-29bd-4fc0-b0ed-ff3ed100bbe8': '/bravo'
  }
}

export default redirectMap
