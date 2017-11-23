import * as React from 'react';
import { create } from 'react-test-renderer';
import { makeForm } from '../makeForm';

describe('makeTest', () => {
  it('should return the child render prop', () => {
    class Schema {}
    const Form = makeForm(Schema);
    const component = create(<Form>{() => <div />}</Form>);
    const tree = component.toJSON();

    expect(tree.type).toBe('div');
  });
});
