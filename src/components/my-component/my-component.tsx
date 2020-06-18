import { Component, Prop, h, State, Element } from '@stencil/core';
import * as dragula from 'dragula';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  @Element() el: HTMLMyComponentElement;
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @State() items = [1, 2, 3, 4, 5];

  componentDidLoad() {
    dragula(this.el);
  }

  render() {
    return this.items.map(item => <div>{item}</div>);
  }
}
