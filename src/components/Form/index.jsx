import React from 'react';

import { StyledForm, Input, InputButton } from './styles';

const Form = ({ handleSubmit, handleChange, formData, buttonText }) => (
  <StyledForm onSubmit={handleSubmit}>
    <Input
      label="E-Mail"
      type="email"
      name="email"
      id="signin-email"
      placeholder="E-mail address"
      value={formData.email}
      onChange={handleChange}
      autoComplete="email"
      required
    />
    <Input
      label="Password"
      type="password"
      name="password"
      id="signin-password"
      placeholder="Password"
      value={formData.password}
      onChange={handleChange}
      autoComplete="new-password"
      required
    />
    <InputButton type="submit" value={buttonText} />
  </StyledForm>
);

export default Form;
