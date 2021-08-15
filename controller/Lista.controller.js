sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/ui/model/Filter",
	"sap/ui/model/FilterOperator"
], function (Controller, History, Filter, FilterOperator) {
	"use strict";

	return Controller.extend("invent.clientes.controller.Lista", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},

		inserirCadastroNovo: function() {

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
		},

		filtroDeContatos : function (oEvent) {
			// build filter array 
			let aFilter = [];
			let sQuery = oEvent.getParameter("query");
			if (sQuery) {
				aFilter.push(new Filter("Nome", FilterOperator.Contains, sQuery));
			}
			// filter binding
			let oList = this.byId("listaDeContatos");
			let oBinding = oList.getBinding("items");
			oBinding.filter(aFilter);
		},
		onSearch : function(oEvent)
        {
            let filterTable = new Filter("Nome", sap.ui.model.FilterOperator.Contains, oEvent.getSource().getValue());
            oEvent.getSource().getParent().getParent().getBinding("items").filter(filterTable);
        },
		

	});
});