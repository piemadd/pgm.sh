addSubDomain({
  description: 'DMARC record',
  domain: 'pgm.sh',
  subdomain: '_dmarc',
  owner: {
    repo: 'https://github.com/piemadd/pgm.sh',
  },
  record: {
    TXT: [
      'v=DMARC1; p=reject; sp=reject; adkim=s; aspf=s;',
    ],
  },
})
