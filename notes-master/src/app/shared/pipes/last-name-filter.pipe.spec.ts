import { FilterLastNamePipe } from './last-name-filter.pipe';

describe('FilterLastNamePipe', () => {
  it('create an instance', () => {
    const pipe = new FilterLastNamePipe();
    expect(pipe).toBeTruthy();
  });
});
