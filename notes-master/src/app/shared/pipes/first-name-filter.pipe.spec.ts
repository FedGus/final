import { FilterFirstNamePipe } from './first-name-filter.pipe';

describe('AppFirstnameFilterPipe', () => {
  it('create an instance', () => {
    const pipe = new FilterFirstNamePipe();
    expect(pipe).toBeTruthy();
  });
});
