import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import './index.css'

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };

  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);

      // Define template params
      const templateParams = {
        name,
        email,
        subject,
        message,
      };
      
      // Use emailjs to email contact form data
      await emailjs.send(
        'service_sj2o44c',    // Replace with your actual service ID
        'template_90klsll',   // Replace with your actual template ID
        templateParams,
        'Kv9c0RIdq-RVTouCo'   // Replace with your actual public key
      );
      

      // Display success alert
      alert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      alert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };

  return (
    
    <div className='ContactForm'>
      <div className='container'>
        <div className='row'>
          <div className='col-12 text-center'>
            <div className='contactForm'>
            <br/>
            <h1>Contact me here!</h1>
            <h3 className='title'>A copy of this message will be sent to your email address</h3>
              <form
                id='contact-form'
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                
                {/* Row 1 of form */}
                <div className='row formRow'>
                  <div className='col-6'>
                    <h3>Name</h3>
                    <input
                      type='text'
                      name='name'
                      size={40}
                      {...register('name', {
                        required: {
                          value: true,
                          message: 'Please enter your name',
                        },
                        maxLength: {
                          value: 30,
                          message: 'Please use 30 characters or less',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Name'
                    ></input>
                    {errors.name && (
                      <span className='errorMessage'>
                        {errors.name.message}
                      </span>
                    )}
                  </div>
                  <br/>
                  <div className='col-6'>
                    <h3>Email</h3>
                    <input
                      type='email'
                      name='email'
                      size={40}
                      {...register('email', {
                        required: true,
                        pattern:
                          /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                      })}
                      className='form-control formInput'
                      placeholder='Email address'
                    ></input>
                    {errors.email && (
                      <span className='errorMessage'>
                        Please enter a valid email address
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 2 of form */}
                <div className='row formRow'>
                  <div className='col'>
                  <h3>Subject</h3>
                    <input
                      type='text'
                      name='subject'
                      size={50}
                      {...register('subject', {
                        required: {
                          value: true,
                          message: 'Please enter a subject',
                        },
                        maxLength: {
                          value: 75,
                          message: 'Subject cannot exceed 75 characters',
                        },
                      })}
                      className='form-control formInput'
                      placeholder='Subject'
                    ></input>
                    {errors.subject && (
                      <span className='errorMessage'>
                        {errors.subject.message}
                      </span>
                    )}
                  </div>
                </div>
                {/* Row 3 of form */}
                <div className='row formRow'>
                  <div className='col'>
                  <h3>Message</h3>
                    <textarea
                      rows={8}
                      cols={75}
                      name='message'
                      {...register('message', {
                        required: true,
                      })}
                      className='form-control formInput'
                      placeholder='Message'
                    ></textarea>
                    {errors.message && (
                      <span className='errorMessage'>
                        Please enter a message
                      </span>
                    )}
                  </div>
                </div>

                <button
                  className='submit-btn btn btn-primary'
                  disabled={disabled}
                  type='submit'
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      {alertInfo.display && (
        <div
          className={`alert alert-${alertInfo.type} alert-dismissible mt-5`}
          role='alert'
        >
          {alertInfo.message}
          <button
            type='button'
            className='btn-close'
            data-bs-dismiss='alert'
            aria-label='Close'
            onClick={() =>
              setAlertInfo({ display: false, message: '', type: '' })
            } // Clear the alert when close button is clicked
          ></button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;