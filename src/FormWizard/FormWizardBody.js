import React from "react";
import styled from "styled-components";

const defaultProps = {
  hideReview: true
};

const BodyContainer = styled.div`
  padding: 1.2rem 2rem;
`;

class FormWizardBody extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    this.setState({ [name]: value });
  };

  onSubmit = e => {
    if (e) e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <BodyContainer>
        {this.props.render(this.handleChange, this.onSubmit)}
      </BodyContainer>
    );
  }
}

FormWizardBody.defaultProps = defaultProps;

export default FormWizardBody;
