
import './About.css';

function About() {
 
  return (
    <section className='about'>
      <div className='about__content'>
         <div className="about__photo"></div>
      <div className="about__content-text">
        <p className='about__content-title'>About the author</p>
        <p className='about__content-description'>
          <span className='about__content-description__divider'>This block describes the project author. Here you should indicate your name, what you do, and which development technologies you know.</span>
          <span>You can also talk about your experience with TripleTen, what you learned there, and how you can help potential customers.</span>
       </p>
      </div>
     </div>
     

    </section>
  )
}
export default About;