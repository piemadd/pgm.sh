addSubDomain({
  description: 'All the Boats Client',
  domain: 'pgm.sh',
  subdomain: 'atb',
  owner: {
    repo: 'https://github.com/piemadd/all-the-boats',
  },
  record: {
    CNAME: 'all-the-boats.pages.dev',
  },
  proxy: true,
})
