import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';

import Input from '../../Input/Input';
import classes from './StreamCreate.module.css';

class StreamCreate extends React.Component {
  renderInput = ({ input }, type, name) => {
    return (
      <Fragment>
        <label>{name}</label>
        <Input
          type={type}
          name={name}
          change={input.onChange}
          value={input.value}
        />
      </Fragment>
    );
  };

  onSubmit = formValue => {
    console.log(formValue);
  };

  render() {
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

export default reduxForm({ form: 'StreamCreate' })(StreamCreate);
