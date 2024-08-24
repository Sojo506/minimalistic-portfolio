function ContactSection() {
  return (
    <section id='contact' className='text-center'>
      <h2 className='text-3xl font-bold mb-8 text-purple-400'>Get in Touch</h2>
      <p className='mb-6'>
        I'm always open to new opportunities and collaborations. Feel free to
        reach out!
      </p>
      <a
        href='mailto:fsojodev@gmail.com'
        className='inline-block bg-green-500 text-black font-semibold py-2 px-6 rounded-full hover:bg-green-400 transition-colors'
      >
        Contact Me
      </a>
    </section>
  );
}

export default ContactSection;
