addSubDomain({
  description: 'Root domain',
  domain: 'pgm.sh',
  subdomain: '@',
  owner: {
    repo: 'https://github.com/piemadd/pgm.sh',
  },
  record: {
    A: [
      '192.64.119.103',
    ],
  },
  proxy: true,
})
