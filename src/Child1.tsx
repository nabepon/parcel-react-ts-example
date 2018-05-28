import * as React from 'react';

export default class Child1 extends React.Component<{ name: string }> {
  private handleClick = async () => {
    console.log('click', this);

    const foo = {
      bar: 0,
      baz: 0,
    };

    console.log(foo);

    const result = await new Promise(resolve => {
      setTimeout(() => resolve(2), 200);
    });

    console.log('click after', result);
  };

  render() {
    return <div onClick={this.handleClick}>child!</div>;
  }
}
