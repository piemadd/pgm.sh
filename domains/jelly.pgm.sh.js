addSubDomain({
  description: 'Jellyfin',
  domain: 'pgm.sh',
  subdomain: 'jelly',
  owner: {
    repo: 'https://github.com/piemadd/pgm.sh',
  },
  record: {
    CNAME: 'd8bdd76f-256c-43aa-8053-835e48e76f7e.cfargotunnel.com',
  },
  proxy: true,
})