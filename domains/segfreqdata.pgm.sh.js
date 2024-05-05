//segfreqdata.pgm.sh
addSubDomain({
  description: 'Segment Frequency Data',
  domain: 'pgm.sh',
  subdomain: 'segfreqdata',
  owner: {
    repo: 'https://github.com/piemadd/seg-freq-data',
  },
  record: {
    CNAME: 'seg-freq-data.pages.dev',
  },
  proxy: true,
})
