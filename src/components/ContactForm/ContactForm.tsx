import { FormEvent, useCallback, useState } from 'react';
import clsx from 'clsx'

import { INFO } from 'constants/global';
import { FIELD_LIST } from './constants';
import { checkIsEmail, validateField, validateForm } from 'utils/functions';
import { IInitialThemeReducerState } from 'redux/reducers/themeReducer';
import { useAppSelector } from 'hooks/useAppSelector';
import contactApi from 'apis/contactApi';

import Button from 'components/Button';
import Spinner from 'components/Spinner';
import Input from 'components/Input';

import styles from "./ContactForm.module.scss";

interface IInitialState {
  errors: { [type: string]: string },
  values: { [type: string]: string },
  loading: boolean,
  successMessage: string,
}

const initialState: IInitialState = {
  errors: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  values: {
    name: "",
    email: "",
    subject: "",
    message: ""
  },
  loading: false,
  successMessage: ""
}

const validateSchema: {[type: string]: any} = {
  name: {
    required: {
      value: true,
      message: "This field is required."
    },
  },
  email: {
    required: {
      value: true,
      message: "This field is required."
    },
    isEmail: {
      isValid: (value: string) => checkIsEmail(value),
      message: "Wrong email format."
    },
  },
  subject: {
    required: {
      value: true,
      message: "This field is required."
    },
  },
  message: {
    required: {
      value: true,
      message: "This field is required."
    },
  },
} 

export interface IContactFormProps {
  className?: string
}

const ContactForm = (props: IContactFormProps) => {
  const { className } = props;
  const [state, setState] = useState(initialState);
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);

  const handleChange = useCallback(({name, value}) => {
    if (validateSchema[name]) {
      const errorMessage = validateField(validateSchema[name], value)
      setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          [name]: value
        },
        errors: {
          ...prevState.errors,
          [name]: errorMessage
        }
      }))
    } else {
      setState(prevState => ({
        ...prevState,
        values: {
          ...prevState.values,
          [name]: value
        }
      }))
    }
  }, [])

  const handleSubmit = async (e: FormEvent): Promise<void> => {
    e.preventDefault();
    const { valid, newErrors } = validateForm(validateSchema, state.values);
    if (!valid) {
      setState(prevState => ({
        ...prevState,
        errors: newErrors
      }))
      return;
    }
    try {
      setState(prevState => ({
        ...prevState,
        loading: true
      }))
      const resp = await contactApi.contact(state.values);
      if (resp.status === 0) {
        alert(resp.message);
        setState(prevState => ({
          ...prevState,
          loading: false
        }))
      } else {
        setState({
          ...initialState,
          successMessage: resp.message
        })
      }
    } catch (error) {
      alert(error);
      setState(prevState => ({
        ...prevState,
        loading: false
      }))
    }
  }

  return (
    <div className={clsx(styles.root, className && className)} data-test="contact-form">
      <div className={styles.textBox}>
        <img 
          src={`/images/map-${theme.mode}.svg`}
          alt="map" 
          className={styles.background} 
          data-test="map-image"
        />
        <div className={styles.text}>
          <h3 className={styles.title}>Let's talk about everything!</h3>
          <p className={styles.sendEmail}>
            Don't like forms? Send me an  <a href={`mailto:${INFO.email}`}>email</a>. 👋
          </p> 
        </div>
      </div>
      <div className={styles.form}>
        <form className={styles.formGroup} onSubmit={handleSubmit} data-test="form">
          { FIELD_LIST.map(item =>
            <div className={styles.formControl} key={item.name} data-test="field">
              <Input 
                {...item}
                value={state.values[item.name]}
                error={state.errors[item.name]}
                disabled={state.loading}
                onChange={handleChange}
              />
            </div>
          )}
          { state.successMessage &&
            <div className={styles.alert}>{state.successMessage}</div>
          }
          <Button 
            type="submit" 
            data-test="form-button"
            disabled={state.loading}
          >
            Send Message
            { state.loading &&
              <Spinner />
            }
          </Button>
        </form>
      </div>
    </div>
  )
}

export default ContactForm