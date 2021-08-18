sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/core/routing/History",
	"sap/m/MessageBox",
	"sap/ui/model/json/JSONModel"
], function (Controller, History, MessageBox, JSONModel) {
	"use strict";

	return Controller.extend("invent.clientes.controller.Inserir", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());

			let cliente = {
				Cidade: "",
				Cep: "",
				Estado: ""
			};

			this.setClienteModel(cliente);

		},

		setClienteModel: function (data) {
			var oModel = new JSONModel(data);
			this.getView().setModel(oModel, "cliente");
		},

		getClienteModel: function (data) {
			var oModel = new JSONModel(data);
			return this.getView().getModel("cliente").getData();
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
		voltarParaInicio: function () {

			var oRouter = this.getOwnerComponent().getRouter();
			oRouter.navTo("voltarParaInicio");
		},

		buscarEndereco: async function () {

			try {

				let cliente = this.getClienteModel();
				const url = `https://viacep.com.br/ws/${cliente.Cep}/json/`;
				const dados = await fetch(url);
				const endereco = await dados.json();

				cliente.Rua = endereco.logradouro;
				cliente.Numero = endereco.gia;
				cliente.Bairro = endereco.bairro;
				cliente.Cidade = endereco.localidade;
				cliente.Estado = endereco.uf;

				this.setClienteModel(cliente);


			} catch (error) {
				MessageBox.error(`Erro ao fazer consulta! ${error}`);
			}
		},


		onConfirmationMessageBoxPress: function () {

		},

		

	});
});