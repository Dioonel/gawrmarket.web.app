import { HttpFilterPipe } from './http-filter.pipe';

describe('HttpFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new HttpFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
