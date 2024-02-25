import Acciones from '../model/accionesModel.js';

// crear el servicio de acciones
class AccionesService {
  async createAccion(accionData) {
    try {
      const nuevaAccion = await Acciones.create(accionData);
      return nuevaAccion;
    } catch (error) {
      console.error(error);
      throw new Error('Error creating accion');
    }
  }

  async getAccionById(id) {
    try {
      const accion = await Acciones.findByPk(id);
      return accion;
    } catch (error) {
      throw new Error('Error getting accion by id');
    }
  }

  async updateAccion(id, accionData) {
    try {
      const accion = await Acciones.findByPk(id);
      if (!accion) {
        throw new Error('Accion not found');
      }
      await accion.update(accionData);
      return accion;
    } catch (error) {
      throw new Error('Error updating accion');
    }
  }

  async deleteAccion(id) {
    try {
      const accion = await Acciones.findByPk(id);
      if (!accion) {
        throw new Error('Accion not found');
      }
      await accion.destroy();
      return accion;
    } catch (error) {
      throw new Error('Error deleting accion');
    }
  }
}

export default new AccionesService();


