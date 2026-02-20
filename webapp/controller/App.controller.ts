import Controller from 'sap/ui/core/mvc/Controller';
import JSONModel from 'sap/ui/model/json/JSONModel';

export default class AppController extends Controller {
  onInit(): void | undefined {
    const oData = {
      recipient: {
        name: "Ganesh Acharya"
      }
    };
    const oModel = new JSONModel(oData);
    this.getView()?.setModel(oModel);

  }
  onShowHello(): void {
    alert("Hello");
  }
}
