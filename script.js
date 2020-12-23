function App(props) {
  return (
    <React.Fragment>
      <header>
        <div id="img">
          <img src="llana.jpg" alt='Headshot of Sally Student' />
        </div>
        <h1>About me</h1>
      </header>

      <main>
        <section id="introduction">
          <p>
            Hi I'm Sally I'm 25 and below this line you'll find more
            information about me.
          </p>
        </section>
        <br />
        <section id="Education">
          <h2>I have studied at:</h2>
          <ul>
            <li>IES BEZMILIANA</li>
            <li>Minnesota University</li>
          </ul>
        </section>
        <br />
        <section id="works">
          <h2>I have worked at:</h2>
          <div id="works_list">
            <ul>
              <li>
                Github as Engineer during 2018 and there I have to Lorem
                ipsum dolor sit amet, consectetur adipisicing elit.
              </li>
              <li>
                Jetbrains as Project manager during 2019 and I'm still
                working there. My work consist in A assumenda autem
                dolorem doloremque
              </li>
            </ul>
          </div>
        </section>
        <br />
        <section id="Contact-section">
          <h2>My contact information: </h2>
          <address id="Contact-info">
            <p>My name is {props.name}</p>
            <p>
              My email is:
              <a href={"mailto://sally@InternetExplorer.old"}>
                {props.email}
              </a>
            </p>
            <p>
              My phone number is:
              <a href="tel:+34100572415">{props.phone}</a>
            </p>
          </address>
        </section>
      </main>
      </React.Fragment>
  );
}
ReactDOM.render(
  <App
    name='Sally Student'
    email='sally@sallystudent.com'
    phone='123-456-7890'
    website='www.sally.com'
  />,
    document.querySelector("#application-root"));