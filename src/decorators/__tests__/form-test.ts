import { form } from '../form';

import 'reflect-metadata';

describe('@form', () => {
  it("should decorate the class with 'typedform:type'='form'", () => {
    @form()
    class TestForm {}

    const type = Reflect.getMetadata('typedform:type', TestForm);
    expect(type).toBe('form');
  });
});
