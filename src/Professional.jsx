import './Style/Professional.css'

function Professional() {
  return (
    <section className="Professional">
      <h3>Professional Skills</h3>

      <div className="columns">

        {/* LEFT COLUMN */}
        <div className="column left-col">
          <div className="skill">
            <h4>HTML</h4>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '80%' }}></div>
            </div>
          </div>

          <div className="skill">
            <h4>Java</h4>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '60%' }}></div>
            </div>
          </div>

          <div className="skill">
            <h4>C++</h4>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN */}
        <div className="column right-col">
          <div className="skill">
            <h4>Python</h4>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '70%' }}></div>
            </div>
          </div>

          <div className="skill">
            <h4>React</h4>
            <div className="bar-container">
              <div className="bar-fill" style={{ width: '75%' }}></div>
            </div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Professional;
