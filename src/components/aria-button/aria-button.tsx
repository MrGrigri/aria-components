import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'aria-button',
  styleUrl: 'aria-button.css',
  shadow: true,
})
export class AriaButtonComponent {
  @Prop() isToggle: boolean = false;

  private handleOnClick() {
    this.handleInteraction();
  }

  private handleKeyboard(event: KeyboardEvent) {
    if (event.code !== 'Enter' && event.code !== 'Space') return;

    this.handleInteraction();
  }

  private handleInteraction() {
    console.log('handling user interaction');
  }

  render() {
    return (
      <div class="button" role="button" tabIndex={0} onClick={this.handleOnClick.bind(this)} onKeyUp={this.handleKeyboard.bind(this)}>
        <span class="button__icon button__icon--pre" part="pre-icon">
          <slot name="pre-icon"></slot>
        </span>
        <span class="button__text" part="text">
          <slot name="text"></slot>
        </span>
        <span class="button__icon button__icon--post" part="post-icon">
          <slot name="post-icon"></slot>
        </span>
      </div>
    );
  }
}
