addSubDomain({
  description: 'Water Taxi Display',
  domain: 'pgm.sh',
  subdomain: 'cwtd',
  owner: {
    repo: 'https://github.com/piemadd/cwt-display',
  },
  record: {
    CNAME: 'cwt-display.pages.dev',
  },
  proxy: true,
})
