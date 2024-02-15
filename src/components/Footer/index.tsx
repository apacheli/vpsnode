import "./index.css";

function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer-text">
          <a className="open-panel open-panel-footer" href="/">Open Panel</a>
          <div className="credits">
            <p>© 2024-present VPSNode. All rights reserved.</p>
            <p>Designed by Jimmy and Landen</p>
          </div>
        </div>
        <nav className="footer-navigation">
          <ul className="footer-navigation-list">
            <p>Community</p>
            <li><a href="/">Discord</a></li>
            <li><a href="/">Twitter</a></li>
            <li><a href="/">GitHub</a></li>
          </ul>
          <ul className="footer-navigation-list">
            <p>Company</p>
            <li><a href="/">About Us</a></li>
            <li><a href="/">Careers</a></li>
            <li><a href="/">Licenses</a></li>
            <li><a href="/">Privacy Policy</a></li>
            <li><a href="/">Terms of Service</a></li>
          </ul>
          <ul className="footer-navigation-list">
            <p>Resources</p>
            <li><a href="/">Developers</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Our Partners</a></li>
            <li><a href="/">Pricing</a></li>
            <li><a href="/">Status</a></li>
          </ul>
          <ul className="footer-navigation-list">
            <p>Hosting</p>
            <li><a href="/">Minecraft</a></li>
            <li><a href="/">Discord Bots</a></li>
            <li><a href="/">Satisfactory</a></li>
            <li><a href="/">Palworld</a></li>
            <li><a href="/">Counter-Strike 2</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Footer;
