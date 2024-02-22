import { makeObservable, observable, action } from "mobx";
import axios from "axios";
import { environment } from "../environments/environment";

class TabelaFipeStore {
  baseURL = environment.url;

  resultSearchVehicleBrand = [];
  resultSearchVehicleModel = { modelos: [], anos: [] };
  resultSearchVehicleYear = [];
  resultAllInfosToSearch = {};

  constructor() {
    makeObservable(this, {
      resultSearchVehicleBrand: observable,
      resultSearchVehicleModel: observable,
      resultSearchVehicleYear: observable,
      resultAllInfosToSearch: observable,
      searchVehicleBrand: action,
      searchVehicleModel: action,
      searchVehicleYear: action,
      returnAllInfosToSearch: action,
    });
  }

  async searchVehicleBrand() {
    try {
      const response = await axios.get(`${this.baseURL}/carros/marcas`);
      this.resultSearchVehicleBrand = response.data;
    } catch (error) {
      console.error("Erro ao buscar api:", error);
    }
  }

  async searchVehicleModel(id) {
    try {
      const response = await axios.get(
        `${this.baseURL}/carros/marcas/${id}/modelos`
      );
      this.resultSearchVehicleModel = response.data;
    } catch (error) {
      console.error("Erro ao buscar api:", error);
    }
  }

  async searchVehicleYear(marcaId, modeloId) {
    try {
      const response = await axios.get(
        `${this.baseURL}/carros/marcas/${marcaId}/modelos/${modeloId}/anos`
      );
      this.resultSearchVehicleYear = response.data;
    } catch (error) {
      console.error("Erro ao buscar api:", error);
    }
  }

  async returnAllInfosToSearch(marcaId, modeloId, anoId) {
    try {
      const response = await axios.get(
        `${this.baseURL}/carros/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`
      );

      this.resultAllInfosToSearch = response.data;
    } catch (error) {
      console.error("Erro ao buscar api:", error);
    }
  }
}

const storeInstance = new TabelaFipeStore();

export default storeInstance;
