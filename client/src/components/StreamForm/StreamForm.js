import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import classes from './StreamForm.module.css';

class StreamForm extends React.Component {
  renderInput = ({ input, meta }, label) => {
    return (
      <Fragment>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {this.renderError(meta)}
      </Fragment>
    );
  };

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return <p>{error}</p>;
    }
  };

  onSubmit = formValue => {
    this.props.onSubmit(formValue);
  };

  render() {
    return (
      <div className={classes.card}>
        <h2>{this.props.title}</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={formProps => this.renderInput(formProps, 'title')}
          />
          <Field
            name="description"
            component={formProps => this.renderInput(formProps, 'description')}
          />
          <button className={classes.button}>Submit</button>
        </form>
      </div>
    );
  }
}

const validate = formValues => {
  const errors = {};

  if (!formValues.title) {
    errors.title = 'Please enter a title';
  }

  if (!formValues.description) {
    errors.description = 'Please enter a description';
  }

  return errors;
};

export default reduxForm({ form: 'StreamForm', validate })(StreamForm);
