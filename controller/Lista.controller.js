sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History"
], function (Controller, History) {
	"use strict";

	return Controller.extend("invent.clientes.controller.Lista", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		inserirCadastroNovo: function() {

			console.log()
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("cadastroDeCliente");
		},


		navegarParaDetalhes: function (oEvent) {

			var oItem = oEvent.getSource();
			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("detail", {
				invoicePath: window.encodeURIComponent(oItem.getBindingContext("invoice").getPath().substr(1))
			});
		},

		onNavBack: function () {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();

			if (sPreviousHash !== undefined) {
				window.history.go(-1);
			} else {
				var oRouter = this.getOwnerComponent().getRouter();
				oRouter.navTo("overview", {}, true);
			}
		}
		

	});
});