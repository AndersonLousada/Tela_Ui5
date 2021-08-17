sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"

], function (Controller, JSONModel) {
	"use strict";

	return Controller.extend("invent.clientes.controller.Overview", {
		
		onInit: function () {

			 const quantidadeClient = this.funcaoQueTrazQuantidadeDeClientes();

			 let tilesJson = { qtd: quantidadeClient };
			 let model = new JSONModel(tilesJson)

			this.getView().setModel(model, "tiles");
        },

		funcaoQueTrazQuantidadeDeClientes : function (){

			let modelInvoice = this.getOwnerComponent().getModel("invoice");

			return modelInvoice.getData().Invoices.length;
		},

		navegarParaLista : function (){
			var oRouter = this.getOwnerComponent().getRouter();
				 oRouter.navTo("listaName");
				
		},

		inserirCadastroNovo: function() {

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("cadastroDeCliente");
		}

	});
	
});