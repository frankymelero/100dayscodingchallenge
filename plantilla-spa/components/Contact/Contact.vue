<template>
    
      <!-- Contact Start -->
      <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row">
                <div class="col-lg-6" style="min-height: 500px;">
                    <div class="position-relative h-100" >
                        <iframe class="position-absolute w-100 h-100" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd" frameborder="0" style="border:0;" allowfullscreen="false" aria-hidden="false" tabindex="0"></iframe>
                    </div>
                </div>
                <div class="col-lg-6 pt-5 pb-lg-5">
                    <div class="contact-form bg-light p-4 p-lg-5 my-lg-5">
                        <h6 class="d-inline-block text-white text-uppercase bg-primary py-1 px-2">Contact</h6>
                        <h1 class="mb-4">Contact For Any Query</h1>
                        <div id="success"></div>
                        <form name="sentMessage" id="contactForm"  >
                            <div class="form-row">
                                <div class="col-sm-6 control-group">
                                    <input type="text" class="form-control border-0 p-4" id="name" placeholder="Your Name"
                                     data-validation-required-message="Please enter your name" />
                                    <p class="help-block text-danger" required></p>
                                </div>
                                <div class="col-sm-6 control-group">
                                    <input type="email" class="form-control border-0 p-4" id="email" placeholder="Your Email"
                                         data-validation-required-message="Please enter your email" />
                                    <p class="help-block text-danger" required></p>
                                </div>
                            </div>
                            <div class="control-group">
                                <input type="text" class="form-control border-0 p-4" id="subject" placeholder="Subject"
                               data-validation-required-message="Please enter a subject" required/>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div class="control-group">
                                <textarea class="form-control border-0 py-3 px-4" rows="3" id="message" placeholder="Message"
                                   
                                    data-validation-required-message="Please enter your message" required></textarea>
                                <p class="help-block text-danger"></p>
                            </div>
                            <div>
                                <button class="btn btn-primary py-3 px-4" type="button" @click="sendEmail">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Contact End -->
</template>

<script setup>
import emailjs from 'emailjs-com';
const sendEmail = () => {

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const subject = document.getElementById('subject').value;
  const message = document.getElementById('message').value;

  const emailParams = {
    from_name: name,
    from_email: email,
    subject: subject,
    message: message,
  };

  const restartForm () => {
      name = "";
      email = "";
      subject = "";
      message = "";
  }

  emailjs.send('service_87e2u3i', 'template_35wn5fi', emailParams, 'UJc6rUhAnbit4DOGE')
    .then((response) => {
      console.log('Mensaje enviado:', response);
      alert("Mensaje enviado");
    restartForm();

    })
    .catch((error) => {
      console.error('Error al enviar el correo electrónico:', error);
      alert("Error, no se ha podido enviar el mensaje.");
      restartForm();
    });
};
</script>
