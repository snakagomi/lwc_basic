import { LightningElement } from "lwc";

export default class Parent2 extends LightningElement {
  // ↓HTMLで子コンポーネントに渡している値です。
  color = "blue";

  get options() {
    return [
      { label: "BLUE", value: "blue" },
      { label: "RED", value: "red" },
      { label: "GREEN", value: "green" }
    ];
  }

  handleChange(event) {
    this.color = event.target.value;
  }
}
