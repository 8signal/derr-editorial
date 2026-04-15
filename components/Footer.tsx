export default function Footer() {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-logo">
          Amber Derr Editorial
        </div>
        <p>&copy; {new Date().getFullYear()} Amber Derr Editorial. All rights reserved.</p>
        <p>
          <a href="mailto:amber@theeditderr.com">
            amber@theeditderr.com
          </a>
        </p>
      </div>
    </footer>
  );
}
