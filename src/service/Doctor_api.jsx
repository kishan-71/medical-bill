const baseUrl = 'http://localhost/api/doctors.php'; // Replace with your actual API endpoint

const Doctor_api = {
  createDoctor: async (doctorData) => {
    const response = await fetch(`${baseUrl}/doctors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctorData),
    });

    if (!response.ok) {
      throw new Error('Failed to create doctor');
    }

    const newDoctorData = await response.json();
    return newDoctorData;
  },

  getDoctors: async () => {
    const response = await fetch(`${baseUrl}/doctors`);

    if (!response.ok) {
      throw new Error('Failed to fetch doctors');
    }

    const doctorsData = await response.json();
    return doctorsData;
  },
};

export default Doctor_api;