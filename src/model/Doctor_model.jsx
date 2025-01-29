class Doctor {
    constructor(name, mobile, city) {
      this.name = name;
      this.mobile = mobile;
      this.city = city;
    }
  
    toObject() {
      return {
        name: this.name,
        mobile: this.mobile,
        city: this.city,
      };
    }
  
    static fromObject(obj) {
      return new Doctor(obj.name, obj.mobile, obj.city);
    }
  
    static mapToObject(doctors) {
      return doctors.map((doctor) => doctor.toObject());
    }
  
    static mapFromJson(json) {
      return json.map((doctorData) => Doctor.fromObject(doctorData));
    }
  }
  
  export default Doctor;