addSubDomain({
  description: 'Boat Schedule',
  domain: 'pgm.sh',
  subdomain: 'bsch',
  owner: {
    repo: 'https://github.com/piemadd/boat-sch',
  },
  record: {
    CNAME: 'boat-sch.pages.dev',
  },
  proxy: true,
})
