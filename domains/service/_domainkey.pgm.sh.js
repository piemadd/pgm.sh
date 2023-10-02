addSubDomain({
  description: 'DKIM record',
  domain: 'pgm.sh',
  subdomain: '*._domainkey',
  owner: {
    repo: 'https://github.com/piemadd/pgm.sh',
  },
  record: {
    TXT: [
      'v=DKIM1; p=',
    ],
  },
})
