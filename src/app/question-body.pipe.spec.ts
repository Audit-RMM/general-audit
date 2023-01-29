import { QuestionBodyPipe } from './question-body.pipe';

describe('QuestionBodyPipe', () => {
  it('create an instance', () => {
    const pipe = new QuestionBodyPipe();
    expect(pipe).toBeTruthy();
  });
});
