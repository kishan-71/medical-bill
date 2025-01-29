import Doctor_api from '../service/Doctor_api';
import Doctor from '../model/Doctor_model';

const Doctor_control = {
  createDoctor: async (doctorData) => {
    try {
      const newDoctor = await Doctor_api.createDoctor(doctorData);
      console.log(doctorData);
      // Handle success (e.g., display success message)
    } catch (error) {
      // Handle error (e.g., display error message)
    }
  },

  getDoctors: async () => {
    try {
      const doctorsData = await Doctor_api.getDoctors();
      return Doctor.mapFromJson(doctorsData);
    } catch (error) {
      // Handle error (e.g., display error message)
      return [];
    }
  },
};

export default Doctor_control;