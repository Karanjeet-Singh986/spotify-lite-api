const request = require('supertest');
const app = require('../app/index');

describe('Playlist API', () => {
  it('GET /playlists should return empty array', async () => {
    const res = await request(app).get('/playlists');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual([]);
  });

  it('POST /playlists should add playlist', async () => {
    const res = await request(app)
      .post('/playlists')
      .send({ name: 'Chill Vibes' });
    expect(res.statusCode).toBe(201);
    expect(res.body).toEqual({ message: 'Playlist added' });
  });
});
