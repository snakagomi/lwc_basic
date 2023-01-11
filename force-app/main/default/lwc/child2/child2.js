import { api, LightningElement } from "lwc";

export default class Child2 extends LightningElement {
  // ↓パブリックプロパティです。@apiデコレーターを使用して宣言します。
  // @apiをつけることで親コンポーネントからアクセス可能になります。
  @api
  colorName;

  get backgroundStyle() {
    return `background-color: ${this.colorName}; color: white`;
  }
}
