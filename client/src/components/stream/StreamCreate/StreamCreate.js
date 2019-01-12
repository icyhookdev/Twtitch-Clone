import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

import Input from '../../Input/Input';
import classes from './StreamCreate.module.css';
import stream from '../../../api/stream';
import { createStream } from '../../../actions/';

class StreamCreate extends React.Component {
  renderInput = ({ input, meta }, type, name) => {
    return (
      <Fragment>
        <label>{name}</label>
        <Input
          type={type}
          name={name}
          change={input.onChange}
          value={input.value}
        />
        {this.renderError(meta)}
      </Fragment>
    );
  };

  renderError = ({ touched, error }) => {
    if (touched && error) {
      return <p>{error}</p>;
    }
  };

  onSubmit = async formValue => {
    this.props.createStream(formValue);
  };

  render() {
    console.log(this.props);
    return (
      <div className={classes.card}>
        <h2>Create a Stream</h2>
        <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
          <Field
            name="title"
            component={formProps =>
              this.renderInput(formProps, 'text', 'title')
            }
          />
          <Field
            name="description"
            component={formProps =>
              this.renderInput(formProps, 'text', 'description')
            }
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

const formWrap = reduxForm({ form: 'StreamCreate', validate })(StreamCreate);

export default connect(
  null,
  { createStream }
)(formWrap);
