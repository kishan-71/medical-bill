import React, { useState } from 'react';
import InputText from '../componants/InputText';
import Button from '../componants/Button';
import Doctor_control from '../../control/Doctor_control';

const DForm = () => {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = ('submit', (event) => {
    event.preventDefault();
    const doctorData = { name, mobile, city };
    Doctor_control.createDoctor(doctorData);
    console.log(doctorData);
  });

  return (
    <form>
      <InputText label="Name" name="name" value={name} onChange={(e) => setName(e.target.value)} />
      <InputText label="Mobile" name="mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} />
      <InputText label="City" name="city" value={city} onChange={(e) => setCity(e.target.value)} />
      <Button label="Submit" onClick={handleSubmit} />
    </form>
  );
};

export default DForm;