import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;

const FormWizardFooter = ({
  disableButton,
  navigateNext,
  navigatePrevious
}) => (
  <FooterContainer>
    <button onClick={navigatePrevious} disabled={disableButton("previous")}>
      Previous
    </button>
    <button onClick={navigateNext} disabled={disableButton("next")}>
      Next
    </button>
  </FooterContainer>
);

export default FormWizardFooter;
