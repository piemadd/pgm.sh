addSubDomain({
  description: 'Root domain',
  domain: 'pgm.sh',
  subdomain: '@',
  owner: {
    repo: 'https://github.com/piemadd/pgm.sh',
  },
  record: {
    ALIAS: 'pgm-sh.pages.dev',
  },
  proxy: true,
})
