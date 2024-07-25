addSubDomain({
  description: 'Segment Frequency Display',
  domain: 'pgm.sh',
  subdomain: 'segfreq',
  owner: {
    repo: 'https://github.com/piemadd/seg-freq-disp',
  },
  record: {
    CNAME: 'seg-freq-disp.pages.dev',
  },
  proxy: true,
})
