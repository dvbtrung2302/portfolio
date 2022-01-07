import { useState } from 'react';
import clsx from 'clsx'

import { INFO } from 'constants/global';
import { FIELD_LIST } from './constants';
import { checkIsEmail } from 'utils/functions';
import { IInitialThemeReducerState } from 'redux/reducers/themeReducer';
import { useAppSelector } from 'hooks/useAppSelector';
import contactApi from 'apis/contactApi';

import Button from 'components/Button';
import Spinner from 'components/Spinner';
import Input from 'components/Input';

import styles from "./ContactForm.module.scss";
import useForm from 'hooks/useForm';

interface IInitialState {
  loading: boolean,
  successMessage: string,
}

const initialState: IInitialState = {
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
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialState: {
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
    },
    validateSchema
  })
  const theme: IInitialThemeReducerState = useAppSelector(state => state.theme);

  const onSubmit = async (preloadData: Function): Promise<void> => {
    try {
      setState(prevState => ({
        ...prevState,
        loading: true
      }))
      const resp = await contactApi.contact(values);
      if (resp.status === 0) {
        alert(resp.message);
        setState(prevState => ({
          ...prevState,
          loading: false
        }))
      } else {
        setState({
          ...initialState,
          loading: false,
          successMessage: resp.message
        })
        preloadData()
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
        <form className={styles.formGroup} onSubmit={handleSubmit(onSubmit)} data-test="form">
          { FIELD_LIST.map(item =>
            <div className={styles.formControl} key={item.name} data-test="field">
              <Input 
                {...item}
                value={values[item.name]}
                error={errors[item.name]}
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