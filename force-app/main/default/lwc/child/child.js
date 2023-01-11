import { api, LightningElement } from "lwc";

export default class Child extends LightningElement {
  @api
  name = "";

  // handleClickでは、「select」という名のカスタムイベントを作成し、値として「this.name」を設定しています。
  // dispatchEventメソッドでカスタムイベントをディスパッチし、親コンポーネントに伝達します。
  handleClick() {
    const selectEvent = new CustomEvent("select", { detail: this.name });
    this.dispatchEvent(selectEvent);
  }
}
