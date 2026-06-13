import { Redis } from '@upstash/redis'


const redis = new Redis({
  url: 'https://light-vervet-115866.upstash.io',
  token: 'gQAAAAAAAcSaAAIgcDFmNDAyMDM1NTYwMTU0Zjc0YjM1MWFhNjliMmE0ZDdlOA',
})


export default redis;