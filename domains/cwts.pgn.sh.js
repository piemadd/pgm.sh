addSubDomain({
  description: 'Water Taxi Schedule',
  domain: 'pgm.sh',
  subdomain: 'cwts',
  owner: {
    repo: 'https://github.com/piemadd/cwt-sch',
  },
  record: {
    CNAME: 'cwt-sch.pages.dev',
  },
  proxy: true,
})
