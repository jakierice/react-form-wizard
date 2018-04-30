import React from "react";
import styled from "styled-components";
import FormWizardHeader from "./FormWizardHeader";
import FormWizardBody from "./FormWizardBody";
import FormWizardFooter from "./FormWizardFooter";

const FormContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 3fr 1fr;
  max-width: 80rem;
`;

class FormWizard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: 0
    };
  }

  renderStepTitles = () => {
    return React.Children.map(this.props.children, child => (
      <h5>{child.props.title}</h5>
    ));
  };

  renderSteps = (handleChange, onSubmit) => {
    return React.Children.map(this.props.children, (child, index) =>
      React.cloneElement(child, {
        active: index === this.state.activeStep ? true : false,
        onChange: handleChange,
        onSubmit
      })
    );
  };

  disableButton = button => {
    const activeStep = this.state.activeStep;
    const stepCount = this.props.children.length;

    switch (button) {
      case "previous":
        return activeStep === 0;
      case "next":
        return activeStep === stepCount - 1;
      default:
        return false;
    }
  };

  navigatePrevious = () => {
    if (this.state.activeStep > 0) {
      this.setState(prevState => {
        return { activeStep: prevState.activeStep - 1 };
      });
    }
  };

  navigateNext = () => {
    const stepCount = this.props.children.length;

    if (this.state.activeStep < stepCount - 1) {
      this.setState(prevState => {
        return { activeStep: prevState.activeStep + 1 };
      });
    }
  };

  render() {
    return (
      <FormContainer>
        <FormWizardHeader>{this.renderStepTitles()}</FormWizardHeader>
        <FormWizardBody
          render={(handleChange, onSubmit) => 
            this.renderSteps(handleChange, onSubmit)
          }
					hideReview={false}
        />
        <FormWizardFooter
          disableButton={this.disableButton}
          navigateNext={this.navigateNext}
          navigatePrevious={this.navigatePrevious}
        />
      </FormContainer>
    );
  }
}

export default FormWizard;
