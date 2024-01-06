import { Button } from "./componets/Button";
import {links} from './links.js'
function App() {
  return (
    <>
      <div className="container">
        <div className="profile">
          <img src="logo.png" alt="Logo GR Store"  />
          <span>@grstore_12</span>
        </div>
        <main className="buttons">
          {links.map((link) => {
            return <Button url={link.link} key={link.label} label={link.label} />;
          })}
      
        </main>
        <div className="icons">
          {links.map((link) => {
            return (
              <a key={link.label} href={link.link}>
                <img src={link.icon} alt={link.label} />
              </a>
            );
          })}
        </div>
        <footer>
          <a  href="https://github.com/ElleLavigne">By Elle Lavigne</a>
        </footer>
      </div>
    </>
  );
}

export default App;
