sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageToast",
	"sap/m/MessageBox"
], function (Controller, History, MessageToast, MessageBox ) {
	"use strict";

	return Controller.extend("invent.clientes.controller.Inserir", {

		onInit: function () {
            this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
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
		},
		voltarParaInicio: function() {

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("voltarParaInicio");
		},
		onConfirmationMessageBoxPress: function () {
			MessageBox.confirm("Sempre confirme as informações.");
		}

		

		

	});
});