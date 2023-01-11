import { LightningElement } from "lwc";

export default class Parent extends LightningElement {
  selected = "";

  // handleSelectメソッドでカスタムイベントを処理します。
  // 子コンポーネントで設定した値は「event.detail」で取り出すことができます。
  handleSelect(event) {
    this.selected = event.detail;
  }
}
