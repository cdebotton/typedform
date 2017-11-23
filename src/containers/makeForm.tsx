import React from 'react';

export type Props<T> = {
  initialValue?: T;
};

export function makeForm<T>(_: new () => T) {
  return class extends React.Component<Props<T>> {};
}
