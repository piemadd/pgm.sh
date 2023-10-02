addSubDomain({
  description: 'Root domain',
  domain: 'pgm.sh',
  subdomain: '@',
  owner: {
    repo: 'https://github.com/piemadd/pgm.sh',
  },
  record: {
    CNAME: 'pgm-sh.pages.dev',
  },
  proxy: true,
})
