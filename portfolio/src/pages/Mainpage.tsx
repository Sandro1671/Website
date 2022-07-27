import logo from '../logo.svg';

function Mainpage() {
  return (
    <div className="Mainpage">
      <header className="Mainpage-header">
        <img src={logo} className="Mainpage-logo" alt="logo" />
        <p>
          Edit <code>src/Mainpage.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
}

export default Mainpage;
