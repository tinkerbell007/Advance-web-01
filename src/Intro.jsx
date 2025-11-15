import './Style/Intro.css'
function Intro() {
  return (
    <section className="AboutSection">

      {/* LEFT SIDE */}
      <div className="About_me">
        <h2>About Me</h2>
        <p>A passionate Full-Stack Developer specializing in React JS. I love transforming ideas into clean, responsive, and interactive web applications. With a strong eye for detail and a knack for problem-solving, I enjoy crafting seamless user experiences and exploring modern web technologies. Always curious and eager to learn, I thrive on turning challenges into creative solutions </p>
      </div>

      {/* RIGHT SIDE */}
      <table className="Intro">
      
        <tbody>
          <tr>
            <th>Age</th>
            <td>20</td>
          </tr>

          <tr>
            <th>Email</th>
            <td>email@email.com</td>
          </tr>

          <tr>
            <th>Phone</th>
            <td>1234567890</td>
          </tr>

          <tr>
            <th>Address</th>
            <td>123 house 123 st abc city</td>
          </tr>
        </tbody>
      </table>

    </section>
  );
}

export default Intro;
