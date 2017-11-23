import * as React from 'react';

type Props<T> = {
  initialValue?: T;
  children: (state: State<T>) => React.ReactElement<any>;
};

type State<T> = {
  fields: {
    [K in keyof T]: {
      value: T[K];
      isDirty: boolean;
      isValid: boolean;
      update: (value: T[K]) => void;
    }
  };
};

export function makeForm<T>(schema: new () => T) {
  if (!schema) {
    throw new ReferenceError('You must provide a valid form schema');
  }

  return class extends React.Component<Props<T>, State<T>> {
    public constructor(props: Props<T>) {
      super(props);
    }

    public render() {
      return this.props.children(this.state);
    }
  };
}
