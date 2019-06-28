import { Todo } from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo('My 1st todo')).toBeTruthy();
  });
});
