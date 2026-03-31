export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-wordmark">Amber Derr Editorial</span>
          <span className="footer-tagline">
            Your words, handled with care.
          </span>
        </div>
        <div className="footer-meta">
          <a href="mailto:amber@amberderreditorial.com" className="footer-email">
            amber@amberderreditorial.com
          </a>
          <p className="footer-copy">
            &copy; {new Date().getFullYear()} Amber Derr Editorial. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
